
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Calendar, Users, HandHeart, Newspaper, Mail, Settings, GitPullRequest } from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/sermons', label: 'Sermons', icon: BookOpen },
  { href: '/admin/events', label: 'Events', icon: Calendar },
  { href: '/admin/ministries', label: 'Ministries', icon: Users },
  { href: '/admin/donations', label: 'Donations', icon: HandHeart },
  { href: '/admin/stories', label: 'Stories', icon: Newspaper },
  { href: '/admin/subscriptions', label: 'Subscriptions', icon: Mail },
  { href: '/admin/requests', label: 'Prayer Requests', icon: GitPullRequest },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-primary text-primary-foreground">
      <div className="h-16 flex items-center justify-center border-b border-white/20">
        <Logo className="text-primary-foreground" />
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === item.href
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-white/10'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-white/20">
        <Link
            href="/admin/settings"
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === "/admin/settings"
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-white/10'
            )}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
      </div>
    </aside>
  );
}
