export const getCookieName = () => {
  return process.env.COOKIE_NAME || "jwt-AlumnLink";
};

export const getCookieOptions = () => {
  const isProd = process.env.NODE_ENV === "production";
  // Normalize and validate SameSite
  const rawSameSite = (process.env.COOKIE_SAMESITE || (isProd ? "none" : "lax")).toLowerCase();
  const sameSite = ["lax", "strict", "none"].includes(rawSameSite) ? rawSameSite : (isProd ? "none" : "lax");

  // Secure defaults to true in production, false otherwise; env overrides win
  const secure = process.env.COOKIE_SECURE
    ? process.env.COOKIE_SECURE === "true"
    : isProd;

  const domain = process.env.COOKIE_DOMAIN && process.env.COOKIE_DOMAIN.trim() !== ""
    ? process.env.COOKIE_DOMAIN.trim()
    : undefined;

  return {
    httpOnly: true,
    sameSite,
    secure,
    domain,
    path: "/",
  };
};
