export default function SettingsPage() {
  const SECTIONS = [
    {
      title: "Workspace",
      fields: [
        { label: "Company name", value: "Acme Corp", type: "text" },
        { label: "Industry", value: "SaaS", type: "text" },
        { label: "Team size", value: "1–10", type: "select" },
      ],
    },
    {
      title: "Outreach identity",
      fields: [
        { label: "From name", value: "Jordan at Acme", type: "text" },
        { label: "From email", value: "jordan@acme.com", type: "email" },
        { label: "Reply-to email", value: "jordan@acme.com", type: "email" },
      ],
    },
  ]

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-normal mb-1" style={{ fontFamily: "var(--font-instrument, 'Instrument Serif', Georgia, serif)" }}>
          Settings
        </h1>
        <p className="text-sm text-[#6B6860]">Workspace and outreach configuration</p>
      </div>

      <div className="space-y-8">
        {SECTIONS.map(section => (
          <div key={section.title}>
            <h2 className="text-xs font-medium text-[#6B6860] uppercase tracking-wider mb-3">{section.title}</h2>
            <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] divide-y divide-[#E8E6E0]">
              {section.fields.map(field => (
                <div key={field.label} className="flex items-center gap-4 px-5 py-3">
                  <label className="text-sm text-[#6B6860] w-36 shrink-0">{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.value}
                    className="flex-1 text-sm text-[#1A1916] bg-transparent border-0 outline-none focus:ring-1 focus:ring-[#7B5CF0] rounded px-1 py-0.5"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Integrations */}
        <div>
          <h2 className="text-xs font-medium text-[#6B6860] uppercase tracking-wider mb-3">Integrations</h2>
          <div className="bg-[#F7F5F0] border border-[#E8E6E0] rounded-[8px] divide-y divide-[#E8E6E0]">
            {[
              { name: "HubSpot CRM", status: "Connected", statusColor: "text-emerald-600" },
              { name: "LinkedIn Sales Navigator", status: "Connect →", statusColor: "text-[#7B5CF0]" },
              { name: "Outreach.io", status: "Connect →", statusColor: "text-[#7B5CF0]" },
              { name: "Stripe Billing", status: "Not configured", statusColor: "text-[#6B6860]" },
            ].map(int => (
              <div key={int.name} className="flex items-center justify-between px-5 py-3">
                <span className="text-sm text-[#1A1916]">{int.name}</span>
                <span className={`text-xs font-medium ${int.statusColor}`}>{int.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button className="bg-[#1A1916] text-[#FCFBF7] px-5 py-2.5 rounded-[6px] text-sm font-medium hover:bg-[#7B5CF0] transition-colors">
            Save changes
          </button>
        </div>
      </div>
    </div>
  )
}
