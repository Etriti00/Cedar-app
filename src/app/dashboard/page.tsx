import { AGENTS } from "@/lib/agents"
import { PIPELINE, CAMPAIGNS } from "@/lib/mock-data"
import { Activity, TrendingUp, Users, Calendar } from "lucide-react"
import Link from "next/link"

const ACTIVE_AGENTS = AGENTS.filter(a => a.status === "active")
const TOTAL_TASKS = AGENTS.reduce((s, a) => s + a.tasksToday, 0)

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
          Good morning
        </h1>
        <p className="text-sm text-[#6B6860]">Your fleet ran {TOTAL_TASKS.toLocaleString()} tasks since midnight. Here's what's happening.</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active agents", value: `${ACTIVE_AGENTS.length}/20`, icon: Activity, delta: null },
          { label: "Pipeline value", value: "$284k", icon: TrendingUp, delta: "+12% vs last week" },
          { label: "Prospects today", value: "147", icon: Users, delta: "+31 new" },
          { label: "Meetings booked", value: "22", icon: Calendar, delta: "+5 this week" },
        ].map(({ label, value, icon: Icon, delta }) => (
          <div key={label} className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#6B6860]">{label}</span>
              <Icon size={13} className="text-[#6B6860]" />
            </div>
            <div className="text-2xl font-semibold text-[#1A1916] mb-1">{value}</div>
            {delta && <div className="text-[11px] text-[#7B5CF0]">{delta}</div>}
          </div>
        ))}
      </div>

      {/* Pipeline funnel */}
      <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-5 mb-6">
        <h2 className="text-sm font-medium mb-4">Pipeline</h2>
        <div className="flex items-end gap-3">
          {PIPELINE.map((stage, i) => {
            const maxCount = PIPELINE[0].count
            const pct = (stage.count / maxCount) * 100
            return (
              <div key={stage.stage} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-xs text-[#6B6860] font-mono">{stage.count.toLocaleString()}</div>
                <div
                  className="w-full rounded-[4px] transition-all"
                  style={{
                    height: `${Math.max(pct * 0.8, 8)}px`,
                    background: i === 0 ? "#E8E6E0" : i === PIPELINE.length - 1 ? "#7B5CF0" : `rgba(123, 92, 240, ${0.2 + i * 0.15})`,
                    minHeight: "8px",
                  }}
                />
                <div className="text-[10px] text-[#6B6860] text-center leading-tight">{stage.stage}</div>
                <div className="text-[10px] text-[#7B5CF0] font-medium">{stage.change}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Active campaigns + Live agents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Campaigns */}
        <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium">Active campaigns</h2>
            <Link href="/dashboard/campaigns" className="text-xs text-[#7B5CF0] hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {CAMPAIGNS.filter(c => c.status === "Active").map(c => (
              <div key={c.id} className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#1A1916]">{c.name}</div>
                  <div className="text-xs text-[#6B6860]">{c.prospects} prospects · {c.replyRate} reply rate</div>
                </div>
                <div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{c.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Live agent feed */}
        <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium">Live agent activity</h2>
            <Link href="/dashboard/agents" className="text-xs text-[#7B5CF0] hover:underline">All agents</Link>
          </div>
          <div className="space-y-2.5">
            {ACTIVE_AGENTS.slice(0, 5).map(a => (
              <div key={a.id} className="flex items-center gap-3">
                <div className="text-base leading-none">{a.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-[#1A1916] truncate">{a.name} <span className="text-[#6B6860] font-normal">· {a.role}</span></div>
                  <div className="text-[11px] text-[#6B6860]">{a.tasksToday} tasks today · {a.lastActive}</div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
