export type WaitlistEntry = { name: string; email: string };

/**
 * Waitlist submission stub.
 *
 * No backend is connected yet, so nothing is persisted. When the ACET database
 * is linked, replace the body with a server-function insert into the
 * `waitlist_signups` table — the call signature below stays the same.
 */
export async function submitWaitlist(entry: WaitlistEntry): Promise<{ stored: boolean }> {
  await new Promise((r) => setTimeout(r, 450));
  void entry;
  return { stored: false };
}
