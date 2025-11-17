import dotenv from 'dotenv';
import { mailtrapClient, sender } from '../lib/mailtrap.js';

dotenv.config();

const run = async () => {
  try {
    const to = [{ email: process.env.EMAIL_TEST_TO || process.env.EMAIL_USER }];
    if (!to[0].email) {
      console.error('No recipient configured. Set EMAIL_TEST_TO or EMAIL_USER in .env');
      process.exit(1);
    }

    const res = await mailtrapClient.send({
      from: sender,
      to,
      subject: 'Test email from CareerNest (local)',
      html: `<p>This is a test email sent at ${new Date().toISOString()}</p>`,
      text: `This is a test email sent at ${new Date().toISOString()}`,
    });

    console.log('Email send result:', res);
  } catch (err) {
    console.error('Error sending test email:', err);
    process.exit(1);
  }
};

run();
