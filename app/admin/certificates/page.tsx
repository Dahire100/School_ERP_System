"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

const adminNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <BookOpen size={20} /> },
  { label: "Certificates", href: "/admin/certificates", icon: <BookOpen size={20} /> },
]

export default function CertificatesPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="flex">
        <Sidebar navItems={adminNavItems} title="Admin Panel" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Certificate Management</h1>
            <p className="text-muted-foreground mb-8">Generate and manage student certificates</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generate Certificates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Create Certificate</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Bulk Generate
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certificate Templates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View Templates</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Create Template
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Issued Certificates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View All</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certificate Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Completion Certificate</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Merit Certificate
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
