"use client"

import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { ThemeProvider, useTheme } from "next-themes"
import type { ReactNode } from "react"
import { apiKeyPlugin } from "@/lib/auth/api-key-plugin"
import { deleteUserPlugin } from "@/lib/auth/delete-user-plugin"
import { emailOtpPlugin } from "@/lib/auth/email-otp-plugin"
import { magicLinkPlugin } from "@/lib/auth/magic-link-plugin"
import { multiSessionPlugin } from "@/lib/auth/multi-session-plugin"
import { organizationPlugin } from "@/lib/auth/organization-plugin"
import { passkeyPlugin } from "@/lib/auth/passkey-plugin"
import { themePlugin } from "@/lib/auth/theme-plugin"
import { twoFactorPlugin } from "@/lib/auth/two-factor-plugin"
import { usernamePlugin } from "@/lib/auth/username-plugin"
import { authClient } from "@/lib/auth-client"
import { AuthProvider } from "./auth/auth-provider"
import { Toaster } from "./ui/sonner"

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter()
  const params = useParams()

  const rawSlug = params?.slug
  const slug = typeof rawSlug === "string" ? rawSlug : Array.isArray(rawSlug) ? rawSlug[0] : null

  // Fungsi navigate dengan tipe parameter object sesuai ekspektasi Better Auth
  const navigate = ({ to, replace }: { to: string; replace?: boolean }) => {
    if (replace) {
      router.replace(to)
    } else {
      router.push(to)
    }
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider
        authClient={authClient}
        redirectTo="/settings/account"
        socialProviders={["github"]}
        emailAndPassword={{ requireEmailVerification: false }}
        navigate={navigate}
        plugins={[
          usernamePlugin({
            usernamePrefix: "@",
            localization: { usernamePlaceholder: "username" }
          }),
          magicLinkPlugin(),
          emailOtpPlugin({
            emailVerification: true,
            passwordReset: true,
            changeEmail: true
          }),
          twoFactorPlugin(),
          passkeyPlugin(),
          apiKeyPlugin({
            organization: true,
            configurations: [
              { id: "default", label: "Personal", organization: false },
              { id: "organization", label: "Organization", organization: true }
            ]
          }),
          themePlugin({ useTheme }),
          multiSessionPlugin(),
          deleteUserPlugin(),
          organizationPlugin({
            slugPrefix: "@",
            slug: slug,
            teams: true
          })
        ]}
        Link={({ href, ...props }) => <Link href={href} {...props} />}
      >
        {children}

        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}