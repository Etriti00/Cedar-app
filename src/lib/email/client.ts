import { Resend } from "resend"

// Lazily instantiated so missing env vars don't crash at build time
let client: Resend | null = null

export function getResendClient(): Resend {
  if (!client) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured")
    }
    client = new Resend(process.env.RESEND_API_KEY)
  }
  return client
}

export const EMAIL_FROM = process.env.EMAIL_FROM ?? "Cedar <noreply@cedar.ai>"
