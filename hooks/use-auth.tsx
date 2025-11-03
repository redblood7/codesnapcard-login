'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  coins: number
}

interface AuthContextType {
  user: User | null
  login: (userData: Omit<User, 'coins'> & { coins?: number }) => void
  logout: () => void
  updateCoins: (amount: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      // Ensure coins property exists for backward compatibility
      if (user.coins === undefined) {
        user.coins = 0
      }
      setUser(user)
    }
  }, [])

  const login = (userData: Omit<User, 'coins'> & { coins?: number }) => {
    const newUser: User = {
      ...userData,
      coins: userData.coins || 0,
    }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateCoins = (amount: number) => {
    if (user) {
      const updatedUser = { ...user, coins: user.coins + amount }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateCoins }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
