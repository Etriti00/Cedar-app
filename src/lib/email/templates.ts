export function welcomeEmail(name?: string) {
  return {
    subject: "Welcome to Cedar — your fleet is ready",
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:480px;margin:0 auto;padding:40px 24px;color:#1A1916">
        <h1 style="font-size:24px;font-weight:400;margin-bottom:8px">Welcome to Cedar${name ? `, ${name}` : ""}</h1>
        <p style="color:#6B6860;font-size:15px;line-height:1.6;margin-bottom:24px">
          Your fleet of 20 AI sales agents is configured and ready. Scout will start surfacing prospects within the next few minutes.
        </p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" style="display:inline-block;background:#1A1916;color:#FCFBF7;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500">
          Go to dashboard →
        </a>
        <p style="color:#6B6860;font-size:13px;margin-top:32px">Cedar · AI-native B2B sales platform</p>
      </div>
    `,
  }
}

export function trialExpiryEmail(daysLeft: number) {
  return {
    subject: `Your Cedar trial ends in ${daysLeft} day${daysLeft === 1 ? "" : "s"}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:480px;margin:0 auto;padding:40px 24px;color:#1A1916">
        <h1 style="font-size:24px;font-weight:400;margin-bottom:8px">Your trial ends in ${daysLeft} day${daysLeft === 1 ? "" : "s"}</h1>
        <p style="color:#6B6860;font-size:15px;line-height:1.6;margin-bottom:24px">
          Upgrade now to keep your agents running and your pipeline growing.
        </p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings?tab=billing" style="display:inline-block;background:#7B5CF0;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500">
          Upgrade to Growth →
        </a>
      </div>
    `,
  }
}
