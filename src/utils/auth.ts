import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '~/utils/prisma';
import { createAuthClient } from 'better-auth/react';
import resend from "~/server/email.service";

// const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql', // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true, 
      sendResetPassword: async ({ user, url } : {
          user: { email: string; id: string; name?: string | null; image?: string | null; };
          url: string;
      }) => {
          await resend.emails.send({
              from: "Acme <onboarding@resend.dev>",
              to: user.email,
              subject: "Reset your password",
              html: `<a href=${url}>Click the link to reset your password: ${url}</a>`,
          });
      },
  },
});

export const authClient = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  baseURL: 'http://localhost:3000',
  fetchOptions: {
    credentials: 'include',
  }
});
