'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Mock data for purchased gift cards
const purchasedGiftCards = [
  {
    id: "1",
    cardCode: "GFT-XYZ-123",
    balance: "$50.00",
    purchaseDate: "2023-09-01",
  },
  {
    id: "2",
    cardCode: "GFT-ABC-456",
    balance: "$25.00",
    purchaseDate: "2023-10-20",
  },
]

export function UserGiftCards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Gift Cards</CardTitle>
        <CardDescription>View your purchased gift cards and their balances.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {purchasedGiftCards.map((card) => (
          <div key={card.id} className="flex items-center justify-between p-4 bg-muted rounded-md">
            <div>
              <div className="font-semibold">Card Code: {card.cardCode}</div>
              <div className="text-sm text-muted-foreground">Purchased on {card.purchaseDate}</div>
            </div>
            <div className="font-semibold text-lg">{card.balance}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
