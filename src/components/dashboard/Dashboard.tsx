
import { BarChart2, Users, CreditCard, ArrowUpRight } from "lucide-react";
import { DashboardSidebar } from "./DashboardSidebar";
import { StatCard } from "./StatCard";
import { RevenueChart } from "./RevenueChart";
import { RecentActivity } from "./RecentActivity";

export function Dashboard() {
    return (
        <div className="flex min-h-screen bg-muted/30">
            <DashboardSidebar />

            <div className="flex-1 overflow-auto">
                <div className="p-6">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
                        <p className="text-muted-foreground">
                            Welcome back! Here's what's happening with your business today.
                        </p>
                    </header>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                            title="Total Revenue"
                            value="$45,231.89"
                            change={{ value: 20.1, isPositive: true }}
                            icon={<CreditCard size={20} />}
                        />
                        <StatCard
                            title="New Customers"
                            value="356"
                            change={{ value: 12.3, isPositive: true }}
                            icon={<Users size={20} />}
                        />
                        <StatCard
                            title="Active Sessions"
                            value="1,893"
                            change={{ value: 5.4, isPositive: true }}
                            icon={<ArrowUpRight size={20} />}
                        />
                        <StatCard
                            title="Conversion Rate"
                            value="12.5%"
                            change={{ value: 1.8, isPositive: false }}
                            icon={<BarChart2 size={20} />}
                        />
                    </div>

                    {/* Charts and Recent Activity */}
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                        <RevenueChart />
                        <RecentActivity />
                    </div>
                </div>
            </div>
        </div>
    );
}
