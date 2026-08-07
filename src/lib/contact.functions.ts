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

export const sendContactNotification = createServerFn({ method: "POST" })
  .inputValidator(ContactInput)
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("./contact.server");
    return sendContactEmail(data);
  });
