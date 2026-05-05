export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FCFBF7] flex flex-col">
      <nav className="border-b border-[#E8E6E0] px-6 h-14 flex items-center">
        <span className="font-semibold text-sm text-[#1A1916]">Cedar</span>
      </nav>
      <div className="flex-1 flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  )
}
