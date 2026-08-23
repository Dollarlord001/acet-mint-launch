import { createServerFn } from "@tanstack/react-start";

export type WaitlistInput = { name: string; email: string };

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((data: WaitlistInput) => {
    const name = String(data?.name ?? "").trim();
    const email = String(data?.email ?? "").trim();
    if (!name || name.length > 100) throw new Error("Invalid name");
    if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      throw new Error("Invalid email");
    return { name, email };
  })
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("waitlist_signups")
      .insert({ name: data.name, email: data.email })
      .select("id")
      .single();
    if (error) throw new Error("Could not save your signup. Please try again.");

    const { notifyWaitlistOwner } = await import("./waitlist-notify.server");
    await notifyWaitlistOwner({ ...data, id: row.id });

    return { stored: true };
  });
