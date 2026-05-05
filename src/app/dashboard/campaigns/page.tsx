import { CAMPAIGNS } from "@/lib/mock-data"
import { Plus } from "lucide-react"

const STATUS_STYLES: Record<string, string> = {
  "Active": "text-emerald-700 bg-emerald-50",
  "Paused": "text-amber-700 bg-amber-50",
  "Draft": "text-[#6B6860] bg-[#E8E6E0]",
}

export default function CampaignsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Campaigns
          </h1>
          <p className="text-sm text-[#6B6860]">Multi-channel outreach sequences managed by your agent fleet</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-[#1A1916] text-[#FCFBF7] px-4 py-2 rounded-[6px] text-sm font-medium hover:bg-[#7B5CF0] transition-colors">
          <Plus size={13} />
          New campaign
        </button>
      </div>

      <div className="space-y-3">
        {CAMPAIGNS.map(c => (
          <div key={c.id} className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-5 hover:border-[#7B5CF0]/40 transition-colors cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-sm font-medium text-[#1A1916] mb-0.5">{c.name}</div>
                <div className="text-xs text-[#6B6860]">Updated {c.lastUpdated}</div>
              </div>
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[c.status] ?? ""}`}>{c.status}</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Prospects", value: c.prospects.toLocaleString() },
                { label: "Replied", value: c.replied.toString() },
                { label: "Meetings", value: c.meetings.toString() },
                { label: "Reply rate", value: c.replyRate },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-lg font-semibold text-[#1A1916]">{stat.value}</div>
                  <div className="text-[11px] text-[#6B6860]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
