// lib/mail.ts
import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 587);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const secure = String(process.env.SMTP_SECURE || "false") === "true"; // true for 465

if (!host || !user || !pass) {
  console.warn("SMTP credentials are missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.");
}

export const mailer = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: { user, pass },
});
