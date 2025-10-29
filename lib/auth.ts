export type UserRole = "admin" | "teacher" | "student" | "parent" | "super-admin"

export interface User {
  id: string
  email: string
  role: UserRole
  name?: string
  schoolId?: string
}

export interface AuthContext {
  user: User | null
  isLoading: boolean
  error: string | null
}

// Get current user from localStorage
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  const userStr = localStorage.getItem("user")
  if (!userStr) return null

  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

// Check if user has required role
export function hasRole(user: User | null, requiredRoles: UserRole[]): boolean {
  if (!user) return false
  return requiredRoles.includes(user.role)
}

// Get role-based dashboard path
export function getDashboardPath(role: UserRole): string {
  const paths: Record<UserRole, string> = {
    admin: "/admin/dashboard",
    teacher: "/teacher/dashboard",
    student: "/student/dashboard",
    parent: "/parent/dashboard",
    "super-admin": "/super-admin/dashboard",
  }
  return paths[role]
}

// Logout user
export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user")
    window.location.href = "/"
  }
}
