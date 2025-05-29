
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    BarChart,
    Users,
    Settings,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

interface SidebarItemProps {
    icon: React.ElementType;
    title: string;
    isActive?: boolean;
    isCollapsed: boolean;
    href: string;
}

const SidebarItem = ({
    icon: Icon,
    title,
    isActive,
    isCollapsed,
    href
}: SidebarItemProps) => {
    return (
        <Link
            to={href}
            className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-primary/10",
                isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"
            )}
        >
            <Icon className="h-5 w-5" />
            {!isCollapsed && <span className="animate-fade-in">{title}</span>}
        </Link>
    );
};

export function DashboardSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={cn(
            "flex flex-col border-r bg-card h-screen transition-all duration-300",
            isCollapsed ? "w-[70px]" : "w-[250px]"
        )}>
            {/* Logo */}
            <div className={cn(
                "flex items-center h-16 px-4 border-b",
                !isCollapsed ? "justify-between" : "justify-center"
            )}>
                {!isCollapsed && <h1 className="font-semibold text-lg animate-fade-in">Dashboard</h1>}
                <button
                    onClick={toggleSidebar}
                    className="rounded-full p-1 hover:bg-muted"
                >
                    {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-auto p-3 space-y-1">
                <SidebarItem
                    icon={LayoutDashboard}
                    title="Overview"
                    isActive={true}
                    isCollapsed={isCollapsed}
                    href="/"
                />
                <SidebarItem
                    icon={BarChart}
                    title="Analytics"
                    isCollapsed={isCollapsed}
                    href="/analytics"
                />
                <SidebarItem
                    icon={Users}
                    title="Customers"
                    isCollapsed={isCollapsed}
                    href="/customers"
                />
                <SidebarItem
                    icon={Settings}
                    title="Settings"
                    isCollapsed={isCollapsed}
                    href="/settings"
                />
            </nav>

            {/* User Profile */}
            <div className={cn(
                "border-t p-3 flex items-center",
                isCollapsed ? "justify-center" : "justify-start space-x-3"
            )}>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="text-sm font-medium">JD</span>
                </div>
                {!isCollapsed && (
                    <div className="animate-fade-in">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">Admin</p>
                    </div>
                )}
            </div>
        </aside>
    );
}
