export type AgentStatus = "active" | "idle" | "paused" | "error"

export interface Agent {
  id: string
  name: string
  role: string
  description: string
  status: AgentStatus
  tasksToday: number
  successRate: number
  lastActive: string
  icon: string
}

export const AGENTS: Agent[] = [
  { id: "a1", name: "Scout", role: "Prospect Discovery", description: "Identifies and surfaces high-fit target accounts from web signals, job postings, and intent data.", status: "active", tasksToday: 147, successRate: 94, lastActive: "2m ago", icon: "🔭" },
  { id: "a2", name: "Minerva", role: "Account Research", description: "Deep-dives into target accounts: org structure, tech stack, recent news, and buying triggers.", status: "active", tasksToday: 89, successRate: 97, lastActive: "5m ago", icon: "🔍" },
  { id: "a3", name: "Scribe", role: "Personalized Outreach", description: "Writes hyper-personalized first-touch emails grounded in account research.", status: "active", tasksToday: 203, successRate: 91, lastActive: "1m ago", icon: "✍️" },
  { id: "a4", name: "Echo", role: "Email Follow-ups", description: "Manages multi-step email sequences, adjusting tone and timing based on engagement signals.", status: "active", tasksToday: 312, successRate: 88, lastActive: "Just now", icon: "📧" },
  { id: "a5", name: "Pulse", role: "LinkedIn Outreach", description: "Sends LinkedIn connection requests and InMails matched to prospect persona and seniority.", status: "active", tasksToday: 76, successRate: 82, lastActive: "8m ago", icon: "💼" },
  { id: "a6", name: "Aria", role: "Voice Calls", description: "Places AI voice calls for warm intros and qualification, transcribing and summarising outcomes.", status: "idle", tasksToday: 34, successRate: 79, lastActive: "1h ago", icon: "📞" },
  { id: "a7", name: "Lens", role: "Engagement Tracking", description: "Monitors email opens, clicks, and reply signals to trigger the right follow-up action.", status: "active", tasksToday: 891, successRate: 99, lastActive: "Just now", icon: "👁️" },
  { id: "a8", name: "Sift", role: "Lead Scoring", description: "Ranks prospects by fit, intent, and engagement to surface the hottest leads first.", status: "active", tasksToday: 445, successRate: 93, lastActive: "3m ago", icon: "⚖️" },
  { id: "a9", name: "Atlas", role: "CRM Sync", description: "Keeps your CRM up to date — contacts, activities, stage changes — without manual entry.", status: "active", tasksToday: 178, successRate: 98, lastActive: "4m ago", icon: "🗺️" },
  { id: "a10", name: "Grove", role: "Meeting Scheduling", description: "Handles back-and-forth scheduling, sends calendar links, and confirms meetings automatically.", status: "active", tasksToday: 23, successRate: 96, lastActive: "22m ago", icon: "📅" },
  { id: "a11", name: "Forge", role: "Sequence Builder", description: "Designs and launches multi-channel outreach sequences based on ICP and campaign goals.", status: "idle", tasksToday: 8, successRate: 100, lastActive: "3h ago", icon: "🔧" },
  { id: "a12", name: "Compass", role: "ICP Refinement", description: "Analyses won/lost deals to continuously sharpen the ideal customer profile.", status: "idle", tasksToday: 2, successRate: 95, lastActive: "6h ago", icon: "🧭" },
  { id: "a13", name: "Vox", role: "Reply Handling", description: "Reads inbound replies, classifies intent, and drafts appropriate responses for review.", status: "active", tasksToday: 67, successRate: 87, lastActive: "11m ago", icon: "💬" },
  { id: "a14", name: "Ridge", role: "Objection Handling", description: "Drafts responses to common objections — price, timing, competitor — tuned to the prospect context.", status: "idle", tasksToday: 14, successRate: 84, lastActive: "45m ago", icon: "🛡️" },
  { id: "a15", name: "Tide", role: "Re-engagement", description: "Identifies cold or ghosted prospects and launches re-engagement sequences at optimal intervals.", status: "active", tasksToday: 56, successRate: 72, lastActive: "18m ago", icon: "🌊" },
  { id: "a16", name: "Ink", role: "Proposal Generation", description: "Creates personalised proposal decks and one-pagers using deal context and account research.", status: "idle", tasksToday: 5, successRate: 100, lastActive: "2h ago", icon: "📄" },
  { id: "a17", name: "Sage", role: "Deal Intelligence", description: "Surfaces deal risks, competitive signals, and recommended next steps for open opportunities.", status: "active", tasksToday: 31, successRate: 91, lastActive: "27m ago", icon: "🧠" },
  { id: "a18", name: "Quill", role: "Invoicing", description: "Generates and sends invoices, tracks payment status, and follows up on overdue accounts.", status: "idle", tasksToday: 12, successRate: 100, lastActive: "1h ago", icon: "🧾" },
  { id: "a19", name: "Bloom", role: "Expansion Signals", description: "Monitors existing customers for upsell and cross-sell opportunities based on usage patterns.", status: "idle", tasksToday: 9, successRate: 89, lastActive: "4h ago", icon: "🌱" },
  { id: "a20", name: "Volt", role: "A/B Testing", description: "Runs message and sequence experiments to identify what outreach performs best for each segment.", status: "active", tasksToday: 44, successRate: 93, lastActive: "14m ago", icon: "⚡" },
]
