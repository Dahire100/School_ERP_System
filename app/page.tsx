"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

type UserRole = "admin" | "teacher" | "student" | "parent" | "super-admin"

export default function LoginPage() {
  const [role, setRole] = useState<UserRole>("student")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simulate login - in production, this would call an API
      if (!email || !password) {
        setError("Please fill in all fields")
        return
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store user session
      const userData = { email, role, id: Math.random().toString() }
      localStorage.setItem("user", JSON.stringify(userData))

      // Redirect based on role
      const redirects: Record<UserRole, string> = {
        admin: "/admin/dashboard",
        teacher: "/teacher/dashboard",
        student: "/student/dashboard",
        parent: "/parent/dashboard",
        "super-admin": "/super-admin/dashboard",
      }

      window.location.href = redirects[role]
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
            <span className="text-xl font-bold">ERP</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">School ERP</h1>
          <p className="text-muted-foreground">Educational Management System</p>
        </div>

        {/* Login Card */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Select your role and enter your credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">
                  User Role
                </Label>
                <Select value={role} onValueChange={(value) => setRole(value as UserRole)}>
                  <SelectTrigger id="role" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="parent">Parent/Guardian</SelectItem>
                    <SelectItem value="super-admin">Platform Owner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="w-full"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full"
                />
              </div>

              {error && (
                <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                  <AlertDescription className="text-destructive text-sm">{error}</AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              {/* Demo Credentials */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3 font-semibold">Demo Credentials:</p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between items-start">
                    <span>
                      <span className="font-semibold text-foreground">Student:</span> student@school.com
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Password: password</div>

                  <div className="flex justify-between items-start pt-2">
                    <span>
                      <span className="font-semibold text-foreground">Teacher:</span> teacher@school.com
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Password: password</div>

                  <div className="flex justify-between items-start pt-2">
                    <span>
                      <span className="font-semibold text-foreground">Admin:</span> admin@school.com
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Password: password</div>

                  <div className="flex justify-between items-start pt-2">
                    <span>
                      <span className="font-semibold text-foreground">Parent:</span> parent@school.com
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Password: password</div>

                  <div className="flex justify-between items-start pt-2">
                    <span>
                      <span className="font-semibold text-foreground">Super Admin:</span> superadmin@school.com
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">Password: password</div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">© 2025 School ERP System. All rights reserved.</p>
      </div>
    </div>
  )
}
