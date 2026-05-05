"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { LayoutDashboard, Users, Megaphone, UserSearch, BarChart3, Settings, Zap, LogOut } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"

const NAV = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/agents", icon: Zap, label: "Agents" },
  { href: "/dashboard/prospects", icon: UserSearch, label: "Prospects" },
  { href: "/dashboard/campaigns", icon: Megaphone, label: "Campaigns" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
]

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState<string | null>(null)
  const [initials, setInitials] = useState("·")

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) {
        setEmail(user.email)
        setInitials(user.email[0].toUpperCase())
      }
    })
  }, [])

  const signOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/auth/login")
    router.refresh()
  }

  return (
    <aside className="w-52 shrink-0 border-r border-[#E8E6E0] bg-[#F2F0EB] flex flex-col h-screen sticky top-0">
      <div className="h-14 flex items-center px-5 border-b border-[#E8E6E0]">
        <span className="font-semibold text-sm text-[#1A1916] tracking-tight">Cedar</span>
        <span className="ml-2 text-[10px] font-medium text-[#7B5CF0] bg-[#F0EBFB] px-1.5 py-0.5 rounded-full">Beta</span>
      </div>
      <nav className="flex-1 py-3 px-2">
        {NAV.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-[6px] text-sm transition-colors mb-0.5 ${
                active
                  ? "bg-white text-[#1A1916] shadow-sm"
                  : "text-[#6B6860] hover:text-[#1A1916] hover:bg-[#E8E6E0]"
              }`}
            >
              <Icon size={14} />
              {label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-[#E8E6E0]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#7B5CF0] flex items-center justify-center text-white text-[10px] font-medium shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-[#1A1916] truncate">{email ?? "Loading…"}</div>
            <div className="text-[10px] text-[#6B6860]">Free trial</div>
          </div>
          <button
            onClick={signOut}
            title="Sign out"
            className="text-[#6B6860] hover:text-red-500 transition-colors ml-1 shrink-0"
          >
            <LogOut size={13} />
          </button>
        </div>
      </div>
    </aside>
  )
}
