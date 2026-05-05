"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Check } from "lucide-react"

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
  const [form, setForm] = useState({
    company: "",
    role: "",
    size: "",
    goal: "",
    icp: "",
    fromName: "",
    fromEmail: "",
  })

  const next = () => {
    if (step < STEPS.length) setStep(s => s + 1)
    else router.push("/dashboard")
  }

  return (
    <div className="w-full max-w-md">
      {/* Step indicators */}
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
            <h2 className="text-lg font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
              Set up your workspace
            </h2>
            <p className="text-sm text-[#6B6860] mb-5">Tell us about your company so Cedar can calibrate the agents to your context.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#6B6860] mb-1.5">Company name</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#6B6860] mb-1.5">Your role</label>
                <div className="grid grid-cols-2 gap-2">
                  {ROLES.map(r => (
                    <button
                      key={r}
                      onClick={() => setForm(f => ({ ...f, role: r }))}
                      className={`text-sm py-2 px-3 rounded-[6px] border text-left transition-colors ${
                        form.role === r
                          ? "border-[#7B5CF0] bg-[#F0EBFB] text-[#7B5CF0]"
                          : "border-[#E8E6E0] text-[#6B6860] hover:border-[#1A1916] hover:text-[#1A1916]"
                      }`}
                    >{r}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#6B6860] mb-1.5">Sales team size</label>
                <div className="flex gap-2">
                  {SIZES.map(s => (
                    <button
                      key={s}
                      onClick={() => setForm(f => ({ ...f, size: s }))}
                      className={`flex-1 text-xs py-1.5 rounded-[6px] border transition-colors ${
                        form.size === s
                          ? "border-[#7B5CF0] bg-[#F0EBFB] text-[#7B5CF0]"
                          : "border-[#E8E6E0] text-[#6B6860] hover:border-[#1A1916]"
                      }`}
                    >{s}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-lg font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
              Define your ICP
            </h2>
            <p className="text-sm text-[#6B6860] mb-5">Scout and the research agents use this to find and prioritise the right prospects.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#6B6860] mb-1.5">Primary goal</label>
                <div className="space-y-2">
                  {GOALS.map(g => (
                    <button
                      key={g}
                      onClick={() => setForm(f => ({ ...f, goal: g }))}
                      className={`w-full text-sm py-2.5 px-3 rounded-[6px] border text-left transition-colors ${
                        form.goal === g
                          ? "border-[#7B5CF0] bg-[#F0EBFB] text-[#7B5CF0]"
                          : "border-[#E8E6E0] text-[#6B6860] hover:border-[#1A1916] hover:text-[#1A1916]"
                      }`}
                    >{g}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#6B6860] mb-1.5">Describe your ideal customer</label>
                <textarea
                  rows={3}
                  placeholder="e.g. B2B SaaS companies with 50-500 employees, Head of Sales or VP Sales, Series A or B, using Salesforce..."
                  value={form.icp}
                  onChange={e => setForm(f => ({ ...f, icp: e.target.value }))}
                  className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
              Outreach identity
            </h2>
            <p className="text-sm text-[#6B6860] mb-5">Scribe and Echo send outreach on your behalf. Set the sender identity here.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#6B6860] mb-1.5">Your name (appears in From:)</label>
                <input
                  type="text"
                  placeholder="Jordan Smith"
                  value={form.fromName}
                  onChange={e => setForm(f => ({ ...f, fromName: e.target.value }))}
                  className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#6B6860] mb-1.5">Sending email address</label>
                <input
                  type="email"
                  placeholder="jordan@acme.com"
                  value={form.fromEmail}
                  onChange={e => setForm(f => ({ ...f, fromEmail: e.target.value }))}
                  className="w-full border border-[#E8E6E0] rounded-[6px] px-3 py-2 text-sm bg-white text-[#1A1916] outline-none focus:border-[#7B5CF0] transition-colors"
                />
              </div>
              <div className="bg-[#F0EBFB] rounded-[6px] p-3 text-xs text-[#7B5CF0]">
                You&apos;ll connect your email inbox in the next step. Cedar uses OAuth — we never store your password.
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-lg font-normal mb-2" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
              Ready to launch
            </h2>
            <p className="text-sm text-[#6B6860] mb-6 max-w-xs mx-auto">
              Your fleet of 20 agents is configured and ready. Scout will start discovering prospects within minutes.
            </p>
            <div className="bg-[#FCFBF7] border border-[#E8E6E0] rounded-[8px] p-4 text-left mb-6 space-y-2">
              {["Scout will surface your first 50 prospects", "Scribe will draft personalised outreach", "Echo will manage your follow-up sequences", "Lens will track every open and click"].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#6B6860]">
                  <Check size={12} className="text-[#7B5CF0] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={next}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#1A1916] text-[#FCFBF7] py-2.5 rounded-[6px] text-sm font-medium hover:bg-[#7B5CF0] transition-colors"
        >
          {step === STEPS.length ? "Launch Cedar" : "Continue"}
          <ArrowRight size={13} />
        </button>
      </div>
      <p className="text-xs text-[#6B6860] text-center mt-3">Step {step} of {STEPS.length}</p>
    </div>
  )
}
