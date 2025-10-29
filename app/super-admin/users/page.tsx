"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building2, Users, BarChart3, Settings, CreditCard, TrendingUp, Plus, Search, Edit, Trash2 } from "lucide-react"
import { useState } from "react"

const superAdminNavItems = [
  { label: "Dashboard", href: "/super-admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Schools", href: "/super-admin/schools", icon: <Building2 size={20} /> },
  { label: "Subscriptions", href: "/super-admin/subscriptions", icon: <CreditCard size={20} /> },
  { label: "Analytics", href: "/super-admin/analytics", icon: <TrendingUp size={20} /> },
  { label: "Users", href: "/super-admin/users", icon: <Users size={20} /> },
  { label: "Settings", href: "/super-admin/settings", icon: <Settings size={20} /> },
]

const mockUsers = [
  { id: 1, name: "John Admin", email: "john@abcschool.com", school: "ABC School", role: "Admin", status: "Active" },
  {
    id: 2,
    name: "Jane Teacher",
    email: "jane@xyzacademy.com",
    school: "XYZ Academy",
    role: "Teacher",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Student",
    email: "mike@globalinst.com",
    school: "Global Institute",
    role: "Student",
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah Parent",
    email: "sarah@eliteschool.com",
    school: "Elite School",
    role: "Parent",
    status: "Inactive",
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <ProtectedRoute requiredRoles={["super-admin"]}>
      <div className="flex">
        <Sidebar navItems={superAdminNavItems} title="Platform Admin" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">User Management</h1>
                <p className="text-muted-foreground">Manage all platform users</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                Add User
              </Button>
            </div>

            {/* Search */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>{filteredUsers.length} users found</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Name</th>
                        <th className="text-left py-3 px-4 font-semibold">Email</th>
                        <th className="text-left py-3 px-4 font-semibold">School</th>
                        <th className="text-left py-3 px-4 font-semibold">Role</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-semibold">{user.name}</td>
                          <td className="py-3 px-4">{user.email}</td>
                          <td className="py-3 px-4">{user.school}</td>
                          <td className="py-3 px-4">{user.role}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
