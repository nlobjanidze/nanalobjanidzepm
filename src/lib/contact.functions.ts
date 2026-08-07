import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactInput = z.object({
  name: z.string().min(1).max(100),
  email: z.string().min(3).max(255),
  phone: z.string().max(50).nullable().optional(),
  organization: z.string().max(150).nullable().optional(),
  interest: z.string().max(100).nullable().optional(),
  message: z.string().max(2000).nullable().optional(),
  submittedAt: z.string().max(64).optional(),
});

const TO_EMAIL = "nanalobjanidze.pm@gmail.com";

function esc(value: string | null | undefined) {
  return String(value ?? "-")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendContactNotification = createServerFn({ method: "POST" })
  .inputValidator(ContactInput)
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    const from = process.env["RESEND_FROM"] ?? "Website Contact <onboarding@resend.dev>";

    const rows: Array<[string, string | null | undefined]> = [
      ["სახელი და გვარი", data.name],
      ["ელფოსტა", data.email],
      ["ტელეფონი", data.phone],
      ["ორგანიზაცია", data.organization],
      ["დაინტერესება", data.interest],
      ["შეტყობინება", data.message],
      ["გაგზავნის თარიღი", data.submittedAt ?? new Date().toISOString()],
    ];

    const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#12263f">
<h2 style="margin:0 0 16px">ახალი შეტყობინება საიტიდან</h2>
<table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="border:1px solid #e5e7eb;background:#f8fafc;font-weight:bold;width:200px">${esc(
        label,
      )}</td><td style="border:1px solid #e5e7eb;white-space:pre-wrap">${esc(value)}</td></tr>`,
  )
  .join("")}
</table></div>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `ახალი შეტყობინება: ${data.name}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Resend send failed [${response.status}]: ${body}`);
      throw new Error(`Email send failed [${response.status}]: ${body}`);
    }

    const result = (await response.json()) as { id?: string };
    return { ok: true as const, id: result.id ?? null };
  });
