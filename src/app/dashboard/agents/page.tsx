import { AGENTS } from "@/lib/agents"

const STATUS_COLORS: Record<string, string> = {
  active: "bg-emerald-400",
  idle: "bg-[#E8E6E0]",
  paused: "bg-amber-400",
  error: "bg-red-400",
}

export default function AgentsPage() {
  const active = AGENTS.filter(a => a.status === "active")
  const idle = AGENTS.filter(a => a.status === "idle")

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
          Agent Fleet
        </h1>
        <p className="text-sm text-[#6B6860]">
          {active.length} active · {idle.length} idle — {AGENTS.reduce((s, a) => s + a.tasksToday, 0).toLocaleString()} tasks run today
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {AGENTS.map(agent => (
          <div key={agent.id} className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-4 hover:border-[#7B5CF0]/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="text-2xl leading-none mt-0.5">{agent.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-medium text-[#1A1916]">{agent.name}</span>
                  <span className="text-[10px] text-[#6B6860] bg-[#E8E6E0] px-1.5 py-0.5 rounded-full">{agent.role}</span>
                </div>
                <p className="text-xs text-[#6B6860] leading-relaxed mb-3">{agent.description}</p>
                <div className="flex items-center gap-4 text-[11px] text-[#6B6860]">
                  <span className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[agent.status]}`} />
                    {agent.status}
                  </span>
                  <span>{agent.tasksToday} tasks</span>
                  <span>{agent.successRate}% success</span>
                  <span>{agent.lastActive}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
