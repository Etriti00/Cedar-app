"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [magicSent, setMagicSent] = useState(false)

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push("/dashboard")
      router.refresh()
    }
  }

  const sendMagicLink = async () => {
    if (!email) { setError("Enter your email first"); return }
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })

    setLoading(false)
    if (error) setError(error.message)
    else setMagicSent(true)
  }

  if (magicSent) {
    return (
      <div className="min-h-screen bg-[#FCFBF7] flex items-center justify-center p-8">
        <div className="max-w-sm w-full text-center">
          <div className="text-3xl mb-4">✉️</div>
          <h2 className="text-lg font-normal mb-2" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Check your inbox
          </h2>
          <p className="text-sm text-[#6B6860]">We sent a magic link to <strong>{email}</strong>. Click it to sign in.</p>
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
            Sign in
          </h1>
          <p className="text-sm text-[#6B6860] mb-6">
            No account? <Link href="/auth/signup" className="text-[#7B5CF0] hover:underline">Start your free trial</Link>
          </p>

          <form onSubmit={signIn} className="space-y-3">
            <div>
              <label className="block text-xs text-[#6B6860] mb-1.5">Email</label>
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
                placeholder="••••••••"
                className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors"
              />
            </div>

            {error && <p className="text-xs text-red-600 bg-red-50 rounded px-3 py-2">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A1916] text-[#FCFBF7] py-2.5 rounded-[6px] text-sm font-medium hover:bg-[#7B5CF0] transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-4">
            <div className="h-px flex-1 bg-[#E8E6E0]" />
            <span className="text-xs text-[#6B6860]">or</span>
            <div className="h-px flex-1 bg-[#E8E6E0]" />
          </div>

          <button
            onClick={sendMagicLink}
            disabled={loading}
            className="w-full border border-[#E8E6E0] text-[#1A1916] py-2.5 rounded-[6px] text-sm font-medium hover:border-[#7B5CF0] transition-colors disabled:opacity-50"
          >
            Send magic link
          </button>
        </div>
      </div>
    </div>
  )
}
