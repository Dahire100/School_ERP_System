"use client"

import { useEffect, useState } from "react"
import { type User, getCurrentUser } from "@/lib/auth"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const user = getCurrentUser()
    setUser(user)
    setIsLoading(false)
  }, [])

  return { user, isLoading }
}
