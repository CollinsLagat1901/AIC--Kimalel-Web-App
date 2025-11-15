
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Search, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const donations = [
  {
    donor: "John Doe",
    amount: "Ksh 5,000",
    method: "M-Pesa",
    reference: "RSTV123XYZ",
    date: "2024-07-20",
    status: "Confirmed",
  },
  {
    donor: "Jane Smith",
    amount: "Ksh 10,000",
    method: "Bank Transfer",
    reference: "BT-987654",
    date: "2024-07-19",
    status: "Confirmed",
  },
  {
    donor: "Anonymous",
    amount: "Ksh 1,000",
    method: "Cash",
    reference: "N/A",
    date: "2024-07-21",
    status: "Pending",
  },
   {
    donor: "Peter Jones",
    amount: "Ksh 2,500",
    method: "M-Pesa",
    reference: "RSTV456ABC",
    date: "2024-07-18",
    status: "Failed",
  },
];

export default function DonationsAdminPage() {
  return (
    <TooltipProvider>
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Donations</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage all church donations here.</p>
          </div>
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button disabled className="bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                    <Download className="mr-2 h-5 w-5" />
                    Export CSV
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming Soon</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button disabled className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Add Manual Donation
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming Soon</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
              <div className="flex items-center justify-between">
                  <div>
                      <CardTitle>Donation List</CardTitle>
                      <CardDescription>A list of all donations received.</CardDescription>
                  </div>
                  <div className="relative w-full max-w-sm">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input disabled placeholder="Search donations..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                  </div>
              </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Reference</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation) => (
                  <TableRow key={donation.reference}>
                    <TableCell className="font-medium">{donation.donor}</TableCell>
                    <TableCell>{donation.amount}</TableCell>
                    <TableCell>{donation.method}</TableCell>
                    <TableCell>{donation.reference}</TableCell>
                    <TableCell>{donation.date}</TableCell>
                    <TableCell>
                      <Badge variant={donation.status === 'Confirmed' ? 'default' : (donation.status === 'Pending' ? 'secondary' : 'destructive')}>{donation.status}</Badge>
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
                          <DropdownMenuItem disabled>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
