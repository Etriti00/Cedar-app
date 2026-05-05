export default function AnalyticsPage() {
  const WEEKS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"]
  const SENT = [320, 410, 390, 520, 480, 610, 570, 680]
  const REPLIES = [38, 52, 41, 68, 61, 84, 72, 96]
  const MEETINGS = [4, 7, 5, 9, 8, 12, 10, 14]
  const maxSent = Math.max(...SENT)

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
          Analytics
        </h1>
        <p className="text-sm text-[#6B6860]">Last 8 weeks of outreach performance</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Emails sent", value: "3,980", delta: "+18% vs prior period" },
          { label: "Reply rate", value: "14.7%", delta: "+2.3pp vs prior period" },
          { label: "Meetings booked", value: "69", delta: "+22% vs prior period" },
        ].map(s => (
          <div key={s.label} className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-4">
            <div className="text-xs text-[#6B6860] mb-2">{s.label}</div>
            <div className="text-2xl font-semibold text-[#1A1916] mb-1">{s.value}</div>
            <div className="text-[11px] text-[#7B5CF0]">{s.delta}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-5 mb-4">
        <h2 className="text-sm font-medium mb-5">Outreach volume</h2>
        <div className="flex items-end gap-3 h-32">
          {SENT.map((count, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="text-[10px] font-mono text-[#6B6860]">{count}</div>
              <div
                className="w-full rounded-t-[3px] bg-[#7B5CF0]/70"
                style={{ height: `${(count / maxSent) * 88}px` }}
              />
              <div className="text-[10px] text-[#6B6860]">{WEEKS[i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reply rate trend */}
      <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] p-5">
        <h2 className="text-sm font-medium mb-4">Reply rate trend</h2>
        <div className="flex items-end gap-3 h-20">
          {REPLIES.map((count, i) => {
            const rate = ((count / SENT[i]) * 100).toFixed(1)
            const maxRate = 20
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="text-[10px] font-mono text-[#7B5CF0]">{rate}%</div>
                <div
                  className="w-full rounded-t-[3px] bg-[#7B5CF0]"
                  style={{ height: `${(parseFloat(rate) / maxRate) * 56}px` }}
                />
                <div className="text-[10px] text-[#6B6860]">{WEEKS[i]}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
