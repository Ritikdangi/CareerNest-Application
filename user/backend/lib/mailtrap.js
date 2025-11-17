import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

// Environment-configured values
const TOKEN = process.env.MAILTRAP_TOKEN;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || EMAIL_USER;
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || "CareerNest";

// Export a sender object used by email templates/handlers
export const sender = {
	email: EMAIL_FROM,
	name: EMAIL_FROM_NAME,
};

// If EMAIL_USER + EMAIL_PASS are provided we use Nodemailer (Gmail SMTP or any SMTP)
// Otherwise, if MAILTRAP_TOKEN is present, fall back to the Mailtrap client
let mailtrapClientInstance = null;
let transporter = null;

if (EMAIL_USER && EMAIL_PASS) {
	// Use Gmail SMTP by default (recommended to use an App Password)
	transporter = nodemailer.createTransport({
		host: process.env.EMAIL_SMTP_HOST || "smtp.gmail.com",
		port: process.env.EMAIL_SMTP_PORT ? parseInt(process.env.EMAIL_SMTP_PORT, 10) : 465,
		secure: process.env.EMAIL_SMTP_SECURE ? process.env.EMAIL_SMTP_SECURE === 'true' : true,
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS,
		},
	});

	// Verify transporter (optional) — do not throw here to keep startup stable
	transporter.verify().then(() => {
		console.log("✅ Mail transporter configured (SMTP)");
	}).catch(err => {
		console.warn("⚠️ Mail transporter verification failed:", err.message);
	});
} else if (TOKEN) {
	// Keep existing Mailtrap behaviour if token provided
	mailtrapClientInstance = new MailtrapClient({ token: TOKEN });
	console.log("ℹ️ Mailtrap client configured (token)");
} else {
	console.warn("⚠️ No mail configuration found. Set EMAIL_USER and EMAIL_PASS for SMTP or MAILTRAP_TOKEN for Mailtrap.");
}

// Provide a unified interface similar to previous mailtrapClient.send(...) calls
export const mailtrapClient = {
	send: async (opts = {}) => {
		// opts: { from, to: [{ email }], subject, html, text }
		if (transporter) {
			const fromAddress = opts.from && opts.from.email ?
				`\"${opts.from.name || EMAIL_FROM_NAME}\" <${opts.from.email}>` :
				`\"${EMAIL_FROM_NAME}\" <${EMAIL_FROM}>`;

			const toList = (opts.to || []).map(r => (typeof r === 'string' ? r : r.email)).filter(Boolean).join(',');

			const mailOptions = {
				from: fromAddress,
				to: toList || opts.to || EMAIL_FROM,
				subject: opts.subject || opts.subject || 'No Subject',
				html: opts.html,
				text: opts.text,
			};

			try {
				const info = await transporter.sendMail(mailOptions);
				// nodemailer returns an info object — keep it for compatibility
				return info;
			} catch (err) {
				// If auth fails (bad Gmail credentials), and Mailtrap is configured, fallback to Mailtrap
				console.error('Error sending email via SMTP:', err);
				if (err && err.code === 'EAUTH' && mailtrapClientInstance) {
					console.warn('SMTP auth failed. Falling back to Mailtrap client since MAILTRAP_TOKEN is configured.');
					try {
						return await mailtrapClientInstance.send(opts);
					} catch (mailtrapErr) {
						console.error('Fallback to Mailtrap also failed:', mailtrapErr);
						throw mailtrapErr;
					}
				}
				throw err;
			}
		} else if (mailtrapClientInstance) {
			// Mailtrap client accepts the same shape used previously
			return await mailtrapClientInstance.send(opts);
		} else {
			throw new Error('No mail client configured. Set EMAIL_USER and EMAIL_PASS or MAILTRAP_TOKEN.');
		}
	}
};
