import { PROSPECTS } from "@/lib/mock-data"
import { UserPlus } from "lucide-react"

const STATUS_STYLES: Record<string, string> = {
  "Replied": "text-emerald-700 bg-emerald-50",
  "Meeting Booked": "text-[#7B5CF0] bg-[#F0EBFB]",
  "In Sequence": "text-blue-700 bg-blue-50",
  "Opened": "text-amber-700 bg-amber-50",
  "Cold": "text-[#6B6860] bg-[#E8E6E0]",
}

export default function ProspectsPage() {
  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
            Prospects
          </h1>
          <p className="text-sm text-[#6B6860]">1,847 total · 596 in active sequence</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-[#1A1916] text-[#FCFBF7] px-4 py-2 rounded-[6px] text-sm font-medium hover:bg-[#7B5CF0] transition-colors">
          <UserPlus size={13} />
          Add prospects
        </button>
      </div>

      <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E8E6E0]">
              {["Name", "Company", "Title", "Status", "Score", "Channel", "Last contact"].map(h => (
                <th key={h} className="text-left text-xs text-[#6B6860] font-medium px-4 py-3 first:pl-5">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROSPECTS.map((p, i) => (
              <tr key={p.id} className={`border-b border-[#E8E6E0] last:border-0 hover:bg-[#FCFBF7] transition-colors cursor-pointer ${i % 2 === 1 ? "bg-[#FAFAF7]" : ""}`}>
                <td className="pl-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#E8E6E0] flex items-center justify-center text-[10px] font-medium text-[#6B6860]">
                      {p.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-sm text-[#1A1916]">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-[#1A1916]">{p.company}</td>
                <td className="px-4 py-3 text-sm text-[#6B6860]">{p.title}</td>
                <td className="px-4 py-3">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[p.status] ?? "text-[#6B6860] bg-[#E8E6E0]"}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-12 h-1 rounded-full bg-[#E8E6E0] overflow-hidden">
                      <div className="h-full rounded-full bg-[#7B5CF0]" style={{ width: `${p.score}%` }} />
                    </div>
                    <span className="text-xs font-mono text-[#6B6860]">{p.score}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs text-[#6B6860]">{p.channel}</td>
                <td className="px-4 py-3 text-xs text-[#6B6860]">{p.lastContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
