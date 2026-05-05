import { getStripeClient, STRIPE_PRICES, type PlanKey } from "@/lib/stripe/client"
import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { plan } = await request.json() as { plan: PlanKey }
  const priceId = STRIPE_PRICES[plan]

  if (!priceId) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
  }

  const stripe = getStripeClient()
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: user.email,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/#pricing`,
    metadata: { userId: user.id, plan },
    subscription_data: {
      trial_period_days: 14,
      metadata: { userId: user.id, plan },
    },
  })

  return NextResponse.json({ url: session.url })
}
