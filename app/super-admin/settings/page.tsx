"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Users, BarChart3, Settings, CreditCard, TrendingUp } from "lucide-react"

const superAdminNavItems = [
  { label: "Dashboard", href: "/super-admin/dashboard", icon: <BarChart3 size={20} /> },
  { label: "Schools", href: "/super-admin/schools", icon: <Building2 size={20} /> },
  { label: "Subscriptions", href: "/super-admin/subscriptions", icon: <CreditCard size={20} /> },
  { label: "Analytics", href: "/super-admin/analytics", icon: <TrendingUp size={20} /> },
  { label: "Users", href: "/super-admin/users", icon: <Users size={20} /> },
  { label: "Settings", href: "/super-admin/settings", icon: <Settings size={20} /> },
]

export default function SettingsPage() {
  return (
    <ProtectedRoute requiredRoles={["super-admin"]}>
      <div className="flex">
        <Sidebar navItems={superAdminNavItems} title="Platform Admin" />

        <main className="flex-1 md:ml-64 p-4 md:p-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Platform Settings</h1>
              <p className="text-muted-foreground">Manage platform configuration</p>
            </div>

            {/* Platform Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Platform Information</CardTitle>
                <CardDescription>Update platform details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" placeholder="Enter platform name" defaultValue="School ERP" />
                </div>
                <div>
                  <Label htmlFor="platform-email">Support Email</Label>
                  <Input
                    id="platform-email"
                    type="email"
                    placeholder="Enter support email"
                    defaultValue="support@schoolerp.com"
                  />
                </div>
                <div>
                  <Label htmlFor="platform-phone">Support Phone</Label>
                  <Input id="platform-phone" placeholder="Enter support phone" defaultValue="+1-800-SCHOOL" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Subscription Plans */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Subscription Plans</CardTitle>
                <CardDescription>Configure subscription plans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="basic-price">Basic Plan Price</Label>
                  <Input id="basic-price" type="number" placeholder="1000" defaultValue="1000" />
                </div>
                <div>
                  <Label htmlFor="pro-price">Professional Plan Price</Label>
                  <Input id="pro-price" type="number" placeholder="2000" defaultValue="2000" />
                </div>
                <div>
                  <Label htmlFor="enterprise-price">Enterprise Plan Price</Label>
                  <Input id="enterprise-price" type="number" placeholder="5000" defaultValue="5000" />
                </div>
                <Button>Save Plans</Button>
              </CardContent>
            </Card>

            {/* Email Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>Email Configuration</CardTitle>
                <CardDescription>Configure email settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="smtp-host">SMTP Host</Label>
                  <Input id="smtp-host" placeholder="smtp.gmail.com" defaultValue="smtp.gmail.com" />
                </div>
                <div>
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input id="smtp-port" type="number" placeholder="587" defaultValue="587" />
                </div>
                <div>
                  <Label htmlFor="smtp-email">SMTP Email</Label>
                  <Input
                    id="smtp-email"
                    type="email"
                    placeholder="Enter SMTP email"
                    defaultValue="noreply@schoolerp.com"
                  />
                </div>
                <Button>Save Configuration</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
