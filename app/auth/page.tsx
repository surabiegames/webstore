"use client"

import { Auth } from "@/components/auth/auth"

export default function AuthDemo() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Auth view="signIn" />
      </div>
    </main>
  )
}