"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import type { UserRole } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRoles?: UserRole[]
}

export function ProtectedRoute({ children, requiredRoles }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    } else if (!isLoading && user && requiredRoles && !requiredRoles.includes(user.role)) {
      router.push("/")
    }
  }, [user, isLoading, requiredRoles, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user || (requiredRoles && !requiredRoles.includes(user.role))) {
    return null
  }

  return <>{children}</>
}
