
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityItem = {
    id: number;
    user: string;
    action: string;
    time: string;
    status?: 'success' | 'pending' | 'error';
};

const activities: ActivityItem[] = [
    {
        id: 1,
        user: "John Smith",
        action: "Created a new invoice #5320",
        time: "10 minutes ago",
        status: 'success'
    },
    {
        id: 2,
        user: "Lisa Wong",
        action: "Added a new product",
        time: "1 hour ago"
    },
    {
        id: 3,
        user: "Mark Johnson",
        action: "Completed order #8742",
        time: "3 hours ago",
        status: 'success'
    },
    {
        id: 4,
        user: "Sarah Davis",
        action: "Submitted a refund request",
        time: "5 hours ago",
        status: 'pending'
    },
    {
        id: 5,
        user: "Alex Thompson",
        action: "Failed payment attempt",
        time: "Yesterday",
        status: 'error'
    }
];

export function RecentActivity() {
    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-5">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3 animate-fade-in">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                {activity.user.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-medium">{activity.user}</p>
                                <p className="text-sm text-muted-foreground">{activity.action}</p>
                                <div className="flex items-center mt-1">
                                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                                    {activity.status && (
                                        <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activity.status === 'success' ? 'bg-emerald-100 text-emerald-700' :
                                                activity.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-rose-100 text-rose-700'
                                            }`}>
                                            {activity.status}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
