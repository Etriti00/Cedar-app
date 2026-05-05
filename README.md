# Cedar

**AI-native B2B sales platform powered by a fleet of 20 specialized agents.**

Cedar deploys 20 purpose-built AI agents to automate your entire sales pipeline — from prospect discovery to closed invoice — replacing the need for a human SDR team.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Geist (body), Instrument Serif (display), DM Mono (mono)
- **Auth:** Supabase (next step)
- **Email:** Resend (next step)
- **Payments:** Stripe (next step)
- **Deploy:** Vercel (next step)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page with hero, features, pricing |
| `/onboarding` | 4-step onboarding wizard |
| `/dashboard` | Main app dashboard — pipeline KPIs, agent activity |
| `/dashboard/agents` | Full fleet view for all 20 agents |
| `/dashboard/prospects` | Prospect table with scoring and status |
| `/dashboard/campaigns` | Campaign management |
| `/dashboard/analytics` | Outreach performance metrics |
| `/dashboard/settings` | Workspace and outreach configuration |

## Next Steps (Tech Tree)

1. **Auth** — Supabase auth with email/password + magic link
2. **Email** — Transactional email via Resend (welcome, trial expiry, etc.)
3. **Deployment** — Vercel + env var sync
4. **Monitoring** — Error tracking and analytics
5. **Billing** — Stripe subscriptions (Starter $299/mo, Growth $699/mo, Scale $999/mo)

## Agents

Cedar's 20-agent fleet covers:

| Agent | Function |
|---|---|
| Scout | Prospect Discovery |
| Minerva | Account Research |
| Scribe | Personalised Outreach |
| Echo | Email Follow-ups |
| Pulse | LinkedIn Outreach |
| Aria | Voice Calls |
| Lens | Engagement Tracking |
| Sift | Lead Scoring |
| Atlas | CRM Sync |
| Grove | Meeting Scheduling |
| Forge | Sequence Builder |
| Compass | ICP Refinement |
| Vox | Reply Handling |
| Ridge | Objection Handling |
| Tide | Re-engagement |
| Ink | Proposal Generation |
| Sage | Deal Intelligence |
| Quill | Invoicing |
| Bloom | Expansion Signals |
| Volt | A/B Testing |
