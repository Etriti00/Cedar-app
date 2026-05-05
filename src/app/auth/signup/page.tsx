"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirm, setConfirm] = useState(false)

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })

    setLoading(false)
    if (error) setError(error.message)
    else setConfirm(true)
  }

  if (confirm) {
    return (
      <div className="min-h-screen bg-[#FCFBF7] flex items-center justify-center p-8">
        <div className="max-w-sm w-full text-center">
          <div className="text-3xl mb-4">✉️</div>
          <h2 className="text-lg font-normal mb-2" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Confirm your email
          </h2>
          <p className="text-sm text-[#6B6860]">We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FCFBF7] flex flex-col">
      <nav className="border-b border-[#E8E6E0] px-6 h-14 flex items-center">
        <Link href="/" className="font-semibold text-sm text-[#1A1916]">Cedar</Link>
      </nav>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Start your free trial
          </h1>
          <p className="text-sm text-[#6B6860] mb-6">
            Already have an account? <Link href="/auth/login" className="text-[#7B5CF0] hover:underline">Sign in</Link>
          </p>

          <form onSubmit={signUp} className="space-y-3">
            <div>
              <label className="block text-xs text-[#6B6860] mb-1.5">Work email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#6B6860] mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={8}
                placeholder="Min 8 characters"
                className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors"
              />
            </div>

            {error && <p className="text-xs text-red-600 bg-red-50 rounded px-3 py-2">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A1916] text-[#FCFBF7] py-2.5 rounded-[6px] text-sm font-medium hover:bg-[#7B5CF0] transition-colors disabled:opacity-50"
            >
              {loading ? "Creating account…" : "Create account — free"}
            </button>
          </form>

          <p className="text-[11px] text-[#6B6860] text-center mt-4">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </div>
  )
}
