
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { format } from "date-fns";
import { useEffect, useState } from "react";

type ContactRequest = {
  id: string;
  full_name: string;
  subject: string | null;
  message: string | null;
  created_at: string;
  status: string | null;
};

export default function PrayerRequestsAdminPage() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);

  useEffect(() => {
    const supabase = createClient();
    async function fetchRequests() {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching requests:", error);
      } else {
        setRequests(data as ContactRequest[]);
      }
    }
    fetchRequests();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Prayer Requests</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage all prayer and contact requests.</p>
        </div>
      </div>

      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle>Request Inbox</CardTitle>
                    <CardDescription>A list of all prayer and contact requests submitted.</CardDescription>
                </div>
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input disabled placeholder="Search by name or subject..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Message Preview</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests && requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.full_name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{request.subject}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-500 dark:text-gray-400 max-w-xs truncate">{request.message}</TableCell>
                  <TableCell>{format(new Date(request.created_at), "PPP")}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={request.status === 'Resolved' ? 'default' : (request.status === 'Unread' ? 'destructive' : 'secondary')}
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem disabled>View Details</DropdownMenuItem>
                        <DropdownMenuItem disabled>Mark as In Progress</DropdownMenuItem>
                        <DropdownMenuItem disabled>Mark as Resolved</DropdownMenuItem>
                        <DropdownMenuItem disabled>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
               {(!requests || requests.length === 0) && (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No requests found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
