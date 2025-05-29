
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface StatCardProps {
    title: string;
    value: string | number;
    change?: {
        value: number;
        isPositive: boolean;
    };
    icon: React.ReactNode;
    className?: string;
}

export function StatCard({ title, value, change, icon, className }: StatCardProps) {
    return (
        <Card className={cn("p-6", className)}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{title}</p>
                    <h3 className="text-2xl font-bold mt-1">{value}</h3>

                    {change && (
                        <div className="flex items-center mt-1">
                            <span className={cn(
                                "text-xs font-medium",
                                change.isPositive ? "text-emerald-500" : "text-rose-500"
                            )}>
                                {change.isPositive ? "+" : ""}{change.value}%
                            </span>
                            <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                        </div>
                    )}
                </div>

                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {icon}
                </div>
            </div>
        </Card>
    );
}
