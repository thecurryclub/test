// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { z } from "zod";

const ContactSchema = z.object({
  firstName: z.string().min(2, "Please enter your first name."),
  lastName: z.string().min(2, "Please enter your last name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please add a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
  // Honeypot: must be empty
  website: z.string().max(0, "Spam detected."),
});

type ContactValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState<string>("");

  const onChange =
    (field: keyof ContactValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((eObj) => ({ ...eObj, [field]: "" }));
    };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setServerMsg("");
    setErrors({});

    const parsed = ContactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fieldErrors[i.path[0] as string] = i.message));
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setServerMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setServerMsg("Thanks! Your message has been sent.");
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please try again.");
    }
  }

  const disabled = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-soft" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">First name</label>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={onChange("firstName")}
            className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200 ${
              errors.firstName ? "border-red-400" : ""
            }`}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-xs text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">Last name</label>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={onChange("lastName")}
            className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200 ${
              errors.lastName ? "border-red-400" : ""
            }`}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-xs text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={onChange("email")}
            className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200 ${
              errors.email ? "border-red-400" : ""
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <input
            id="subject"
            name="subject"
            value={values.subject}
            onChange={onChange("subject")}
            className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200 ${
              errors.subject ? "border-red-400" : ""
            }`}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-xs text-red-600">{errors.subject}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={onChange("message")}
            className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-orange-200 ${
              errors.message ? "border-red-400" : ""
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Honeypot (hidden) */}
        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            value={values.website}
            onChange={onChange("website")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="mt-4 inline-flex items-center rounded-xl bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-700 disabled:opacity-60"
      >
        {disabled ? "Sending…" : "Send message"}
      </button>

      {status !== "idle" && (
        <p className={`mt-3 text-sm ${status === "success" ? "text-green-700" : status === "error" ? "text-red-600" : "text-slate-500"}`}>
          {serverMsg}
        </p>
      )}

      <p className="mt-3 text-xs text-slate-500">
        We’ll only use your details to respond to your query.
      </p>
    </form>
  );
}
