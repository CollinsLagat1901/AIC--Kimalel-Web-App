import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Users, HandHeart, Newspaper, Mail, ArrowUpRight } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { ministries } from "@/lib/constants";
import { subMonths } from "date-fns";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = createClient();

  const { count: sermonCount } = await supabase.from('sermons').select('*', { count: 'exact', head: true });
  const { count: eventCount } = await supabase.from('events').select('*', { count: 'exact', head: true }).gt('date', new Date().toISOString());
  const ministryCount = ministries.length;
  
  const oneMonthAgo = subMonths(new Date(), 1).toISOString();
  const { count: subscriberCount } = await supabase.from('subscribers').select('*', { count: 'exact', head: true }).gt('created_at', oneMonthAgo);
  const { count: requestCount } = await supabase.from('contacts').select('*', { count: 'exact', head: true }).eq('status', 'Unread');
  
  // Placeholder for donations
  const monthlyDonations = "Ksh 0";


  const overviewCards = [
    { title: "Total Sermons", value: sermonCount, icon: BookOpen, href: "/admin/sermons", buttonText: "View Sermons" },
    { title: "Upcoming Events", value: eventCount, icon: Calendar, href: "/admin/events", buttonText: "Add Event" },
    { title: "Active Ministries", value: ministryCount, icon: Users, href: "/admin/ministries", buttonText: "Manage" },
    { title: "Donations (Month)", value: monthlyDonations, icon: HandHeart, href: "/admin/donations", buttonText: "View Donations" },
    { title: "New Subscribers", value: subscriberCount, icon: Newspaper, href: "/admin/subscriptions", buttonText: "View List" },
    { title: "Prayer Requests", value: requestCount, icon: Mail, href: "/admin/requests", buttonText: "View Requests" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
      <p className="text-muted-foreground">Welcome back, Admin. Here's your church's digital overview.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">
        {overviewCards.map(card => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
              <card.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{card.value}</div>
              <Button variant="link" asChild className="p-0 h-auto text-xs text-accent mt-2">
                <Link href={card.href}>
                  {card.buttonText}
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Activity feed coming soon...</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
