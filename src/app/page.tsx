import Link from "next/link"
import { ArrowRight, Check, Zap, Shield, TrendingUp } from "lucide-react"

const FEATURES = [
  { icon: "🔭", title: "Prospect Discovery", desc: "Scout surfaces high-fit accounts from intent signals, job boards, and web data — no manual list building." },
  { icon: "✍️", title: "Hyper-personal Outreach", desc: "Scribe writes first-touch emails that read like they came from your best rep. At scale." },
  { icon: "📞", title: "Voice Calls", desc: "Aria places qualification calls, transcribes outcomes, and books follow-ups automatically." },
  { icon: "📅", title: "Meeting Scheduling", desc: "Grove handles all scheduling back-and-forth so prospects never wait for a reply." },
  { icon: "🧠", title: "Deal Intelligence", desc: "Sage surfaces deal risks, champion signals, and recommended next steps for every open opp." },
  { icon: "🧾", title: "Invoicing", desc: "Quill generates and sends invoices, chases payments, and keeps your books clean." },
]

const PRICING = [
  {
    name: "Starter",
    price: "$299",
    period: "/mo",
    description: "For founders running their own sales motion.",
    features: ["5 active agents", "500 prospects/mo", "2 active campaigns", "Email + LinkedIn", "CRM sync"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$699",
    period: "/mo",
    description: "For teams replacing or scaling past their SDR layer.",
    features: ["15 active agents", "2,000 prospects/mo", "Unlimited campaigns", "Email + LinkedIn + Voice", "CRM sync", "A/B testing", "Priority support"],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$999",
    period: "/mo",
    description: "Full fleet. Maximum pipeline velocity.",
    features: ["All 20 agents", "Unlimited prospects", "Unlimited campaigns", "All channels + invoicing", "Custom ICP training", "Dedicated onboarding"],
    cta: "Talk to us",
    highlight: false,
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#1A1916]">
      {/* Nav */}
      <nav className="border-b border-[#E8E6E0] bg-[#FCFBF7]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-[#1A1916]">Cedar</span>
          <div className="flex items-center gap-6 text-sm text-[#6B6860]">
            <Link href="#features" className="hover:text-[#1A1916] transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-[#1A1916] transition-colors">Pricing</Link>
            <Link href="/dashboard" className="text-[#1A1916] hover:text-[#7B5CF0] transition-colors font-medium">Dashboard →</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#7B5CF0] bg-[#F0EBFB] px-3 py-1.5 rounded-full mb-8">
            <Zap size={11} />
            20 specialized AI agents — one platform
          </div>
          <h1 className="text-5xl md:text-6xl font-normal leading-[1.1] mb-6" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Your entire sales team,<br />
            <em>minus the headcount</em>
          </h1>
          <p className="text-lg text-[#6B6860] max-w-xl mb-10 leading-relaxed">
            Cedar deploys a fleet of 20 AI agents across your pipeline — from prospect discovery to closed invoice — running autonomously while you focus on the deals that matter.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 bg-[#1A1916] text-[#FCFBF7] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#7B5CF0] transition-colors"
            >
              Start free trial <ArrowRight size={14} />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm text-[#6B6860] hover:text-[#1A1916] transition-colors"
            >
              See the dashboard →
            </Link>
          </div>
          <p className="text-xs text-[#6B6860] mt-4">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#E8E6E0] bg-[#F7F5F0] py-5">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-8 overflow-x-auto scrollbar-none">
          <span className="text-xs text-[#6B6860] whitespace-nowrap shrink-0">Trusted by teams at</span>
          {["Lattice", "Rippling", "Intercom", "Linear", "Notion", "Vercel", "Figma"].map(co => (
            <span key={co} className="text-sm font-medium text-[#1A1916] opacity-40 whitespace-nowrap">{co}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#E8E6E0]">
        {[
          { value: "20", label: "Specialized agents" },
          { value: "3.2×", label: "More pipeline per rep" },
          { value: "87%", label: "Avg reply rate lift" },
          { value: "< 48h", label: "Time to first meeting" },
        ].map(s => (
          <div key={s.label}>
            <div className="text-3xl font-semibold text-[#1A1916] mb-1">{s.value}</div>
            <div className="text-sm text-[#6B6860]">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-normal mb-3" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Every agent owns a job
          </h2>
          <p className="text-[#6B6860] max-w-lg">Not a chatbot. A fleet. Each agent has a single function it executes better than a human would.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-[#F7F5F0] rounded-[8px] p-5 border border-[#E8E6E0] hover:border-[#7B5CF0]/30 transition-colors">
              <div className="text-2xl mb-3">{f.icon}</div>
              <div className="text-sm font-medium mb-1.5">{f.title}</div>
              <div className="text-sm text-[#6B6860] leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#E8E6E0]">
        <div className="mb-12">
          <h2 className="text-3xl font-normal mb-3" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Priced against one SDR salary
          </h2>
          <p className="text-[#6B6860] max-w-lg">One SDR costs $60–80k/year plus tools. Cedar's full fleet costs less than the tools alone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRICING.map(p => (
            <div
              key={p.name}
              className={`rounded-[8px] p-6 border ${
                p.highlight
                  ? "border-[#7B5CF0] bg-[#7B5CF0] text-white"
                  : "border-[#E8E6E0] bg-[#F7F5F0]"
              }`}
            >
              <div className={`text-xs font-medium mb-1 ${p.highlight ? "text-[#F0EBFB]" : "text-[#6B6860]"}`}>{p.name}</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-semibold">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-[#F0EBFB]" : "text-[#6B6860]"}`}>{p.period}</span>
              </div>
              <p className={`text-sm mb-5 ${p.highlight ? "text-[#F0EBFB]" : "text-[#6B6860]"}`}>{p.description}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={13} className={p.highlight ? "text-[#F0EBFB]" : "text-[#7B5CF0]"} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/onboarding"
                className={`block text-center text-sm font-medium py-2.5 rounded-lg transition-colors ${
                  p.highlight
                    ? "bg-white text-[#7B5CF0] hover:bg-[#F0EBFB]"
                    : "bg-[#1A1916] text-[#FCFBF7] hover:bg-[#7B5CF0]"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8E6E0] py-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-[#6B6860]">
          <span className="font-medium text-[#1A1916]">Cedar</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#1A1916] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#1A1916] transition-colors">Terms</Link>
            <Link href="mailto:hello@cedar.ai" className="hover:text-[#1A1916] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
