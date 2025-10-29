"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { logout } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import Link from "next/link"
import { useState } from "react"

interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface SidebarProps {
  navItems: NavItem[]
  title: string
}

export function Sidebar({ navItems, title }: SidebarProps) {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground"
      >
        {isOpen ? <Icons.X /> : <Icons.Menu />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 text-sidebar-foreground border-r border-sidebar-border transition-transform duration-300 z-40 bg-chart-4 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl font-bold text-sidebar-primary truncate">{title}</h1>
          <p className="text-xs text-sidebar-foreground/70 mt-1 truncate">{user?.email}</p>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {item.icon}
              <span className="text-sm font-medium truncate">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 bg-transparent border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={logout}
          >
            <Icons.LogOut />
            <span className="truncate">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
