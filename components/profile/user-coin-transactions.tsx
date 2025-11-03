'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

// Mock data for coin transactions
const coinTransactions = [
  {
    id: "1",
    date: "2023-10-15",
    description: "Purchased 100 coins",
    amount: "+100",
  },
  {
    id: "2",
    date: "2023-10-18",
    description: "Used 50 coins to purchase an artwork",
    amount: "-50",
  },
  {
    id: "3",
    date: "2023-11-01",
    description: "Purchased 200 coins",
    amount: "+200",
  },
]

export function UserCoinTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Coin Transactions</CardTitle>
        <CardDescription>View your recent coin purchases and usage.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coinTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className="text-right">{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
