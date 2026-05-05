export const PROSPECTS = [
  { id: "p1", name: "Sarah Chen", title: "VP Sales", company: "Lattice", email: "sarah.chen@lattice.com", status: "Replied", score: 94, lastContact: "Today", channel: "Email" },
  { id: "p2", name: "Marcus Webb", title: "Head of Revenue", company: "Rippling", email: "m.webb@rippling.com", status: "Meeting Booked", score: 98, lastContact: "Yesterday", channel: "LinkedIn" },
  { id: "p3", name: "Priya Nair", title: "Founder & CEO", company: "Runway", email: "priya@runway.com", status: "In Sequence", score: 81, lastContact: "2d ago", channel: "Email" },
  { id: "p4", name: "Tom Okafor", title: "Sales Director", company: "Brex", email: "tom@brex.com", status: "Opened", score: 76, lastContact: "3d ago", channel: "Email" },
  { id: "p5", name: "Elena Russo", title: "CRO", company: "Intercom", email: "e.russo@intercom.io", status: "In Sequence", score: 88, lastContact: "1d ago", channel: "Email" },
  { id: "p6", name: "James Park", title: "VP of Growth", company: "Linear", email: "james@linear.app", status: "Replied", score: 91, lastContact: "Today", channel: "LinkedIn" },
  { id: "p7", name: "Amara Diallo", title: "Head of Sales", company: "Notion", email: "amara@makenotion.com", status: "Opened", score: 73, lastContact: "4d ago", channel: "Email" },
  { id: "p8", name: "Carlos Mendez", title: "Revenue Lead", company: "Vercel", email: "carlos@vercel.com", status: "Cold", score: 62, lastContact: "1w ago", channel: "Email" },
  { id: "p9", name: "Hana Takahashi", title: "GTM Lead", company: "Figma", email: "hana@figma.com", status: "Meeting Booked", score: 96, lastContact: "Today", channel: "Email" },
  { id: "p10", name: "David Osei", title: "Founder", company: "Raycast", email: "david@raycast.com", status: "In Sequence", score: 84, lastContact: "2d ago", channel: "LinkedIn" },
]

export const CAMPAIGNS = [
  { id: "c1", name: "SaaS VP Sales — Q2", status: "Active", prospects: 312, replied: 48, meetings: 12, replyRate: "15.4%", lastUpdated: "Today" },
  { id: "c2", name: "Agency Founders Outbound", status: "Active", prospects: 189, replied: 29, meetings: 7, replyRate: "15.3%", lastUpdated: "Yesterday" },
  { id: "c3", name: "Professional Services Heads", status: "Paused", prospects: 95, replied: 11, meetings: 3, replyRate: "11.6%", lastUpdated: "3d ago" },
  { id: "c4", name: "Series A Startups", status: "Draft", prospects: 0, replied: 0, meetings: 0, replyRate: "—", lastUpdated: "5d ago" },
]

export const PIPELINE = [
  { stage: "Prospects", count: 1847, change: "+12%" },
  { stage: "In Sequence", count: 596, change: "+8%" },
  { stage: "Replied", count: 88, change: "+23%" },
  { stage: "Meeting Booked", count: 22, change: "+5%" },
  { stage: "Proposal Sent", count: 9, change: "+12%" },
]
