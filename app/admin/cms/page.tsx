"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BookOpen size={20} /> },
  { label: "Front CMS", href: "/admin/cms", icon: <BookOpen size={20} /> },
]

export default function CMSPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Front CMS</h1>
            <p className="text-muted-foreground mb-8">Manage public website content</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Pages</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Create Page
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Media</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Upload Media
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Website Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Edit Settings</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Preview
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Manage SEO</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
