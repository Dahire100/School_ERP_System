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

const mockSchools = [
  { id: 1, name: "ABC School", city: "New York", students: 1234, status: "Active" },
  { id: 2, name: "XYZ Academy", city: "Los Angeles", students: 856, status: "Active" },
  { id: 3, name: "Global Institute", city: "Chicago", students: 2100, status: "Active" },
  { id: 4, name: "Elite School", city: "Houston", students: 945, status: "Inactive" },
]

export default function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSchools = mockSchools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.city.toLowerCase().includes(searchTerm.toLowerCase()),
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
                <h1 className="text-3xl font-bold text-foreground mb-2">School Management</h1>
                <p className="text-muted-foreground">Manage all schools on the platform</p>
              </div>
              <Button className="gap-2">
                <Plus size={20} />
                Add School
              </Button>
            </div>

            {/* Search */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Search by school name or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Schools Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Schools</CardTitle>
                <CardDescription>{filteredSchools.length} schools found</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">School Name</th>
                        <th className="text-left py-3 px-4 font-semibold">City</th>
                        <th className="text-left py-3 px-4 font-semibold">Students</th>
                        <th className="text-left py-3 px-4 font-semibold">Status</th>
                        <th className="text-left py-3 px-4 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSchools.map((school) => (
                        <tr key={school.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-semibold">{school.name}</td>
                          <td className="py-3 px-4">{school.city}</td>
                          <td className="py-3 px-4">{school.students}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                school.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {school.status}
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
