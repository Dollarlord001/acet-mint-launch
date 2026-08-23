import { joinWaitlist } from "./waitlist.functions";

export type WaitlistEntry = { name: string; email: string };

export async function submitWaitlist(entry: WaitlistEntry): Promise<{ stored: boolean }> {
  return await joinWaitlist({ data: entry });
}
