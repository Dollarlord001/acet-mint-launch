export const OWNER_EMAIL = "acetconsults96@gmail.com";

/**
 * Sends the waitlist notification to the ACET owner inbox.
 * Wired to Lovable managed email once the sender domain is verified.
 */
export async function notifyWaitlistOwner(entry: { id: string; name: string; email: string }) {
  try {
    const modPath = "./email-templates/send-email";
    const mod = (await import(/* @vite-ignore */ modPath).catch(() => null)) as
      | { sendTemplateEmail: (t: string, to: string, o: unknown) => Promise<{ sent: boolean }> }
      | null;

    if (!mod) return { sent: false, reason: "email_not_configured" as const };
    return await mod.sendTemplateEmail("waitlist-signup", OWNER_EMAIL, {
      templateData: { name: entry.name, email: entry.email },
      idempotencyKey: `waitlist-signup-${entry.id}`,
    });
  } catch (err) {
    console.error("waitlist notification failed", err);
    return { sent: false, reason: "send_failed" as const };
  }
}
