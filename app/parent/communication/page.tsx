"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, Settings, Calendar, DollarSign, AlertCircle, Send } from "lucide-react"

const parentNavItems = [
  { label: "Dashboard", href: "/parent/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Child Progress", href: "/parent/progress", icon: <BarChart3 size={20} /> },
  { label: "Attendance", href: "/parent/attendance", icon: <Calendar size={20} /> },
  { label: "Fees", href: "/parent/fees", icon: <DollarSign size={20} /> },
  { label: "Communication", href: "/parent/communication", icon: <AlertCircle size={20} /> },
  { label: "Settings", href: "/parent/settings", icon: <Settings size={20} /> },
]

const mockMessages = [
  {
    id: 1,
    from: "Dr. Robert Brown",
    subject: "Great performance in Mathematics",
    message: "Your child has shown excellent progress in the recent exam.",
    date: "2025-11-01",
  },
  {
    id: 2,
    from: "School Administration",
    subject: "Annual Sports Day",
    message: "We are excited to announce the annual sports day on November 15th.",
    date: "2025-10-28",
  },
  {
    id: 3,
    from: "Ms. Emily Davis",
    subject: "Assignment Submission",
    message: "Please remind your child to submit the English essay by Friday.",
    date: "2025-10-25",
  },
]

export default function CommunicationPage() {
  return (
    <ProtectedRoute requiredRoles={["parent"]}>
      <div className="flex">
        <Sidebar navItems={parentNavItems} title="Parent Portal" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Communication</h1>
              <p className="text-muted-foreground">Messages from school and teachers</p>
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {mockMessages.map((msg) => (
                <Card key={msg.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold">{msg.from}</p>
                        <p className="text-sm font-semibold text-foreground">{msg.subject}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{msg.date}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{msg.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Reply Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
                <CardDescription>Contact school administration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold">Recipient</label>
                    <Input placeholder="Select recipient" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Subject</label>
                    <Input placeholder="Enter subject" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Message</label>
                    <textarea
                      placeholder="Type your message..."
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={4}
                    />
                  </div>
                  <Button className="gap-2">
                    <Send size={16} />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
