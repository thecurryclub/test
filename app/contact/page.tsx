// =============================================
// lib/validation/contact.ts — Shared validation (single source of truth)
// =============================================
import { z } from 'zod'

// Keep this declaration here ONLY. Import it elsewhere via a single import.
export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine((v) => !v || /^[+()\d\s-]{7,}$/.test(v), {
      message: 'Enter a valid phone number',
    }),
  reason: z.enum(['general', 'wholesale', 'media', 'support'], {
    required_error: 'Select a reason',
  }),
  message: z.string().min(20, 'Tell us a bit more (min 20 characters)'),
  // spam controls
  hp: z.string().max(0).optional(), // honeypot (must be empty if present)
  startedAt: z.number().optional(), // client fills Date.now()
})

export type ContactFormValues = z.infer<typeof contactSchema>

// Also export a default so importers can alias it locally to avoid name clashes
export default contactSchema


// =============================================
// app/contact/page.tsx — Beautiful Contact Page
// =============================================
'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
// IMPORTANT: alias the import to avoid any duplicate identifier with local vars
import schema, { ContactFormValues } from '../../lib/validation/contact'

// --- UI primitives (shadcn/ui style). Replace with your own if already present.
function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1 text-sm text-red-600" role="alert">
      {message}
    </p>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-900">
      {children}
    </label>
  )
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        'block w-full rounded-xl border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500',
        'px-4 py-2',
        props.className || '',
      ].join(' ')}
    />
  )
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        'block w-full rounded-xl border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500',
        'px-4 py-2',
        props.className || '',
      ].join(' ')}
    />
  )
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[
        'block w-full rounded-xl border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500',
        'px-4 py-2 bg-white',
        props.className || '',
      ].join(' ')}
    />
  )
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props
  return (
    <button
      {...rest}
      className={[
        'inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold text-white',
        'bg-amber-600 hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500',
        'shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed',
        className || '',
      ].join(' ')}
    />
  )
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { reason: 'general' },
  })

  // time-trap spam control (require at least 5s on page)
  useEffect(() => {
    setValue('startedAt', Date.now())
  }, [setValue])

  const onSubmit = async (data: ContactFormValues) => {
    // simple time trap check on client as well
    if (!data.startedAt || Date.now() - data.startedAt < 5000) {
      setServerMessage('That was a bit quick. Please take a moment and try again.')
      setStatus('error')
      return
    }

    try {
      setStatus('sending')
      setServerMessage('')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const payload = await res.json()
      if (!res.ok) throw new Error(payload?.error || 'Something went wrong')
      setStatus('success')
      setServerMessage("Thanks! Your message has been sent. We'll get back within 1 business day.")
      reset({ reason: 'general' })
    } catch (err: any) {
      setStatus('error')
      setServerMessage(err.message || 'Failed to send message. Please try again later.')
    }
  }

  return (
    <main className="min-h-[calc(100vh-200px)] bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              We usually reply in under 1 business day
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let’s talk — Tru Flavors & The Curry Club
            </h1>
            <p className="mt-3 text-gray-600">
              Partnerships, wholesale, press, or product support — drop us a note. Prefer email?{' '}
              <a className="font-medium text-amber-700 underline" href="mailto:info@truflavors.org">
                info@truflavors.org
              </a>
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <p className="text-gray-700">info@truflavors.org</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">HQ</p>
                <p className="text-gray-700">Virginia Water, Surrey, UK</p>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot */}
              <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('hp')} />
              <input type="hidden" {...register('startedAt', { valueAsNumber: true })} />

              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Jane Appleseed" {...register('name')} aria-invalid={!!errors.name} />
                <FieldError message={errors.name?.message} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...register('email')} aria-invalid={!!errors.email} />
                  <FieldError message={errors.email?.message} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" type="tel" placeholder="+44 20 1234 5678" {...register('phone')} aria-invalid={!!errors.phone} />
                  <FieldError message={errors.phone?.message} />
                </div>
              </div>

              <div>
                <Label htmlFor="reason">Reason</Label>
                <Select id="reason" {...register('reason')} aria-invalid={!!errors.reason}>
                  <option value="general">General enquiry</option>
                  <option value="wholesale">Wholesale / Partnerships</option>
                  <option value="media">Press / Media</option>
                  <option value="support">Order support</option>
                </Select>
                <FieldError message={errors.reason?.message} />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={6} placeholder="How can we help?" {...register('message')} aria-invalid={!!errors.message} />
                <div className="mt-1 text-xs text-gray-500">Please include order number if applicable.</div>
                <FieldError message={errors.message?.message} />
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" disabled={isSubmitting || status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </Button>
                {status === 'success' && <span className="text-sm text-green-700">{serverMessage}</span>}
                {status === 'error' && <span className="text-sm text-red-700">{serverMessage}</span>}
              </div>

              <p className="text-xs text-gray-500">
                Protected by a honeypot + time check. By submitting you agree to our{' '}
                <Link className="underline" href="/privacy">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Helpful extras */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-semibold text-gray-900">Hours</h3>
            <p className="mt-2 text-sm text-gray-600">
              Mon–Fri: 9:00–17:00 (UK time)
              <br />
              Sat–Sun: Closed
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-semibold text-gray-900">Press kit</h3>
            <p className="mt-2 text-sm text-gray-600">Logos, product shots, and founder bio.</p>
            <Link href="/press" className="mt-2 inline-block text-sm font-semibold text-amber-700 underline">
              View press kit
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-semibold text-gray-900">FAQ</h3>
            <p className="mt-2 text-sm text-gray-600">Delivery, returns, wholesale MOQs, and more.</p>
            <Link href="/faq" className="mt-2 inline-block text-sm font-semibold text-amber-700 underline">
              Browse FAQs
            </Link>
          </div>
        </div>

        {/* Optional map embed (replace coordinates if needed) */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
          <iframe
            title="Virginia Water area"
            src="https://www.google.com/maps?q=Virginia%20Water%2C%20UK&output=embed"
            className="h-72 w-full"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}


// =============================================
// app/api/contact/route.ts — Email sending via Resend
// =============================================
import { NextResponse } from 'next/server'
// IMPORTANT: alias the import to avoid any duplicate identifier with local vars
import schema from '../../../lib/validation/contact'

export const runtime = 'edge' // fast + cheap on Vercel

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const { name, email, phone, reason, message, hp, startedAt } = parsed.data

    // Anti‑spam checks
    if (hp && hp.length > 0) return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    if (!startedAt || Date.now() - startedAt < 5000) {
      return NextResponse.json({ error: 'Please wait a few seconds before submitting.' }, { status: 400 })
    }

    // --- Send email using Resend ---
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO = 'info@truflavors.org'
    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const subjectMap: Record<string, string> = {
      general: 'New enquiry',
      wholesale: 'Wholesale/Partnership enquiry',
      media: 'Press/Media enquiry',
      support: 'Order support',
    }

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 8px">${subjectMap[reason]}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Reason:</strong> ${reason}</p>
        <p style="white-space:pre-wrap"><strong>Message:</strong>\n${message}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid #eee"/>
        <p style="font-size:12px;color:#666">This email was sent from the website contact form.</p>
      </div>
    `

    const send = async (payload: Record<string, any>) => {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!r.ok) {
        const t = await r.text()
        throw new Error(`Resend error: ${r.status} ${t}`)
      }
      return r.json()
    }

    // Primary: send to team inbox
    await send({
      from: 'Tru Flavors Website <contact@truflavors.org>', // use a verified domain/sender in Resend
      to: [TO],
      reply_to: email,
      subject: `${subjectMap[reason]} from ${name}`,
      html,
    })

    // Optional courtesy copy to the sender
    await send({
      from: 'Tru Flavors <contact@truflavors.org>',
      to: [email],
      subject: 'We received your message — Tru Flavors',
      html: `<p>Hi ${name.split(' ')[0]},</p><p>Thanks for getting in touch. Our team will reply shortly.</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}


// =============================================
// __tests__/contact-schema.test.ts — Tests (Vitest)
// =============================================
// How to run:
//   npm i -D vitest @types/node
//   Add to package.json: { "scripts": { "test": "vitest" } }
//   npx vitest
import { describe, it, expect } from 'vitest'
import { contactSchema } from '../lib/validation/contact'

const base = {
  name: 'Jane Appleseed',
  email: 'jane@example.com',
  reason: 'general' as const,
  message: 'This is a message with well over twenty chars.',
  startedAt: Date.now() - 6000,
}

describe('contactSchema', () => {
  it('accepts valid minimal data', () => {
    const parsed = contactSchema.safeParse({ ...base })
    expect(parsed.success).toBe(true)
  })

  it('rejects short name', () => {
    const parsed = contactSchema.safeParse({ ...base, name: 'A' })
    expect(parsed.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const parsed = contactSchema.safeParse({ ...base, email: 'nope' })
    expect(parsed.success).toBe(false)
  })

  it('allows missing phone and rejects bad phone', () => {
    const ok = contactSchema.safeParse({ ...base })
    expect(ok.success).toBe(true)

    const bad = contactSchema.safeParse({ ...base, phone: 'abc' })
    expect(bad.success).toBe(false)
  })

  it('rejects message under 20 chars', () => {
    const parsed = contactSchema.safeParse({ ...base, message: 'too short' })
    expect(parsed.success).toBe(false)
  })

  it('requires valid reason', () => {
    const parsed = contactSchema.safeParse({ ...base, reason: 'unknown' })
    expect(parsed.success).toBe(false)
  })

  it('honeypot must be empty if present', () => {
    const ok = contactSchema.safeParse({ ...base, hp: '' })
    expect(ok.success).toBe(true)

    const bad = contactSchema.safeParse({ ...base, hp: 'bot' })
    expect(bad.success).toBe(false)
  })

  // Additional tests
  it('accepts various valid phone formats', () => {
    const cases = ['+44 20 1234 5678', '(020) 1234-5678', '02012345678']
    for (const phone of cases) {
      const parsed = contactSchema.safeParse({ ...base, phone })
      expect(parsed.success).toBe(true)
    }
  })

  it('rejects non-number startedAt when provided', () => {
    // @ts-expect-error testing invalid type
    const parsed = contactSchema.safeParse({ ...base, startedAt: 'now' })
    expect(parsed.success).toBe(false)
  })

  it('accepts missing startedAt (server enforces time check)', () => {
    const parsed = contactSchema.safeParse({ ...base, startedAt: undefined })
    expect(parsed.success).toBe(true)
  })
})


// =============================================
// styles — Tailwind utility classes assumed
// Ensure Tailwind is set up in your project.
// If not using Tailwind, replace classNames with your system.
// =============================================

// =============================================
// .env — add (do not commit to git)
// =============================================
// RESEND_API_KEY=your_resend_api_key
// (In Resend, verify the sending domain truflavors.org and create a sender like contact@truflavors.org)

// =============================================
// notes
// - Validation was centralized to avoid duplicates and we now alias imports as `schema` to prevent
//   any duplicate identifier errors (e.g., "Duplicate declaration 'contactSchema'").
// - Page is accessible (labels, aria-invalid, role=alert) and mobile‑friendly.
// - Spam protection: honeypot + time‑trap on both client and server.
// - Edge runtime for fast API route on Vercel.
// - If you prefer Nodemailer/SMTP, swap the Resend block accordingly.
// - The map iframe works without any API keys (generic location).
// - Replace the UI primitives with your existing shadcn/ui components if present.
