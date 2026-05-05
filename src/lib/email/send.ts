import { getResendClient, EMAIL_FROM } from "./client"

interface SendEmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail({ to, subject, html, from }: SendEmailOptions) {
  const resend = getResendClient()
  const { data, error } = await resend.emails.send({
    from: from ?? EMAIL_FROM,
    to,
    subject,
    html,
  })
  if (error) throw new Error(`Failed to send email: ${error.message}`)
  return data
}
