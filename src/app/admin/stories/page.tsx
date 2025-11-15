
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const stories = [
  {
    title: "How I Found Hope in a Storm",
    category: "Testimony",
    contributor: "Jane Doe",
    date: "2024-07-15",
    status: "Published",
  },
  {
    title: "Our Community Garden Project",
    category: "Community Impact",
    contributor: "John Smith",
    date: "2024-07-10",
    status: "Published",
  },
  {
    title: "A Youth's Journey to Faith",
    category: "Youth Story",
    contributor: "Anonymous",
    date: "2024-07-05",
    status: "Draft",
  },
   {
    title: "The Power of a Praying Family",
    category: "Family",
    contributor: "Emily White",
    date: "2024-06-28",
    status: "Published",
  },
];

export default function StoriesAdminPage() {
  return (
    <TooltipProvider>
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Stories</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage all testimonials and stories here.</p>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button disabled className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Add New Story
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Coming Soon</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
              <div className="flex items-center justify-between">
                  <div>
                      <CardTitle>Story List</CardTitle>
                      <CardDescription>A list of all stories submitted.</CardDescription>
                  </div>
                  <div className="relative w-full max-w-sm">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input disabled placeholder="Search stories..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                  </div>
              </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Contributor</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stories.map((story) => (
                  <TableRow key={story.title}>
                    <TableCell className="font-medium">{story.title}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{story.category}</Badge>
                    </TableCell>
                    <TableCell>{story.contributor}</TableCell>
                    <TableCell>{story.date}</TableCell>
                    <TableCell>
                      <Badge variant={story.status === 'Published' ? 'default' : 'outline'}>{story.status}</Badge>
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
                          <DropdownMenuItem disabled>Edit</DropdownMenuItem>
                          <DropdownMenuItem disabled>View</DropdownMenuItem>
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
