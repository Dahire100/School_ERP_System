"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const teacherNavItems = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: <FileText size={20} /> },
  { label: "Download Center", href: "/teacher/download-center", icon: <FileText size={20} /> },
]

export default function DownloadCenterPage() {
  return (
    <ProtectedRoute requiredRoles={["teacher"]}>
      <div className="flex">
        <Sidebar navItems={teacherNavItems} title="Teacher Portal" />
        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-2">Download Center</h1>
            <p className="text-muted-foreground mb-8">Upload and manage study materials for students</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">45</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Downloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">234</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Storage Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2.3 GB</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">Upload File</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Create Folder
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Manage Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full">View All Materials</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Statistics
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
