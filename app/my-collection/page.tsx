'use client'

import { useState, useEffect } from "react"
import { CollectionsHeader } from "@/components/collections/collections-header"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { UserCoinTransactions } from "@/components/profile/user-coin-transactions"
import { UserGiftCards } from "@/components/profile/user-gift-cards"

export default function MyCollectionPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user, router])

  if (!user) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-muted-foreground mb-6">
          Redirecting to login...
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <CollectionsHeader />
      <div className="mt-8">
        <UserCoinTransactions />
      </div>
      <div className="mt-8">
        <UserGiftCards />
      </div>
    </div>
  )
}
