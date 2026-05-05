"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const STEPS = [
  { id: 1, title: "Your workspace" },
  { id: 2, title: "ICP setup" },
  { id: 3, title: "Outreach identity" },
  { id: 4, title: "Launch fleet" },
]

const ROLES = ["Founder / CEO", "Head of Sales", "VP Sales", "Revenue Lead", "Other"]
const SIZES = ["Just me", "2–5", "6–15", "16–50", "50+"]
const GOALS = ["Replace SDR team", "Scale outbound", "Book more meetings", "Expand to new verticals"]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    company: "",
    role: "",
    size: "",
    goal: "",
    icp: "",
    fromName: "",
    fromEmail: "",
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const finish = async () => {
    setSaving(true)
    setError(null)
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { error } = await supabase
          .from("profiles")
          .update({
            company: form.company,
            role: form.role,
            team_size: form.size,
            icp: form.icp,
            from_name: form.fromName,
            from_email: form.fromEmail,
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id)
        if (error) throw error
      }
      router.push("/dashboard")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong")
      setSaving(false)
    }
  }

  const next = () => {
    if (step < STEPS.length) setStep(s => s + 1)
    else finish()
  }

  return (
    <div className="min-h-screen bg-[#FCFBF7] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2 flex-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${
                step > s.id
                  ? "bg-[#7B5CF0] text-white"
                  : step === s.id
                  ? "bg-[#1A1916] text-white"
                  : "bg-[#E8E6E0] text-[#6B6860]"
              }`}>
                {step > s.id ? <Check size={11} /> : s.id}
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-px flex-1 ${step > s.id ? "bg-[#7B5CF0]" : "bg-[#E8E6E0]"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-6">
          {step === 1 && (
            <div>
              <h2 className="text-lg font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>Your workspace</h2>
              <p className="text-sm text-[#6B6860] mb-5">Tell Cedar about your company so agents can personalise outreach.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#6B6860] mb-1.5">Company name</label>
                  <input value={form.company} onChange={e => set("company", e.target.value)}
                    placeholder="Acme Inc." className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-[#6B6860] mb-1.5">Your role</label>
                  <div className="flex flex-wrap gap-2">
                    {ROLES.map(r => (
                      <button key={r} onClick={() => set("role", r)}
                        className={`px-3 py-1.5 rounded-[6px] text-xs border transition-colors ${form.role === r ? "border-[#7B5CF0] bg-[#F0EBFB] text-[#7B5CF0]" : "border-[#E8E6E0] text-[#6B6860] hover:border-[#1A1916]"}`}>
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#6B6860] mb-1.5">Team size</label>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map(s => (
                      <button key={s} onClick={() => set("size", s)}
                        className={`px-3 py-1.5 rounded-[6px] text-xs border transition-colors ${form.size === s ? "border-[#7B5CF0] bg-[#F0EBFB] text-[#7B5CF0]" : "border-[#E8E6E0] text-[#6B6860] hover:border-[#1A1916]"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>ICP setup</h2>
              <p className="text-sm text-[#6B6860] mb-5">Describe your ideal customer so agents know who to find.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#6B6860] mb-1.5">Primary goal</label>
                  <div className="flex flex-wrap gap-2">
                    {GOALS.map(g => (
                      <button key={g} onClick={() => set("goal", g)}
                        className={`px-3 py-1.5 rounded-[6px] text-xs border transition-colors ${form.goal === g ? "border-[#7B5CF0] bg-[#F0EBFB] text-[#7B5CF0]" : "border-[#E8E6E0] text-[#6B6860] hover:border-[#1A1916]"}`}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#6B6860] mb-1.5">ICP description</label>
                  <textarea value={form.icp} onChange={e => set("icp", e.target.value)} rows={4}
                    placeholder="e.g. B2B SaaS companies with 10–200 employees, Series A–B, based in North America, with a dedicated sales team struggling to hit pipeline targets."
                    className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors resize-none" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>Outreach identity</h2>
              <p className="text-sm text-[#6B6860] mb-5">Emails will be sent from this name and address.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#6B6860] mb-1.5">From name</label>
                  <input value={form.fromName} onChange={e => set("fromName", e.target.value)}
                    placeholder="Alex from Acme" className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-[#6B6860] mb-1.5">From email</label>
                  <input type="email" value={form.fromEmail} onChange={e => set("fromEmail", e.target.value)}
                    placeholder="alex@acme.com" className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors" />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>Ready to launch</h2>
              <p className="text-sm text-[#6B6860] mb-5">Your fleet of 20 agents is configured and ready. Click below to start prospecting.</p>
              <div className="space-y-2">
                {[
                  { label: "Company", value: form.company || "—" },
                  { label: "Role", value: form.role || "—" },
                  { label: "Team size", value: form.size || "—" },
                  { label: "From", value: form.fromName ? `${form.fromName} <${form.fromEmail}>` : "—" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-[#6B6860]">{label}</span>
                    <span className="text-[#1A1916] font-medium truncate max-w-[60%] text-right">{value}</span>
                  </div>
                ))}
              </div>
              {error && <p className="mt-4 text-xs text-red-600 bg-red-50 rounded px-3 py-2">{error}</p>}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-4">
          {step > 1 ? (
            <button onClick={() => setStep(s => s - 1)} className="text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors">
              Back
            </button>
          ) : <div />}
          <button
            onClick={next}
            disabled={saving}
            className="flex items-center gap-2 bg-[#1A1916] text-[#FCFBF7] px-4 py-2 rounded-[6px] text-sm font-medium hover:bg-[#7B5CF0] transition-colors disabled:opacity-50"
          >
            {saving ? (
              <><Loader2 size={14} className="animate-spin" /> Saving…</>
            ) : step === STEPS.length ? (
              <>Launch fleet <ArrowRight size={14} /></>
            ) : (
              <>Continue <ArrowRight size={14} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
