
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ministries } from "@/lib/constants";
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ministryData = ministries.map(m => ({
    ...m,
    leader: "Rev. John Doe",
    status: "Active"
}))

export default function MinistriesAdminPage() {
  return (
    <TooltipProvider>
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Ministries</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage all church ministries here.</p>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button disabled className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Add New Ministry
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
                      <CardTitle>Ministry List</CardTitle>
                      <CardDescription>A list of all ministries in your church.</CardDescription>
                  </div>
                  <div className="relative w-full max-w-sm">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input disabled placeholder="Search ministries..." className="pl-10 bg-gray-100 dark:bg-gray-700 border-none" />
                  </div>
              </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ministryData.map((ministry) => {
                const ministryImage = PlaceHolderImages.find(p => p.id === ministry.imageId);
                return (
                  <Card key={ministry.name} className="group overflow-hidden relative text-white text-center flex flex-col justify-between h-80 transition-all duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-900">
                    {ministryImage && (
                      <Image
                        src={ministryImage.imageUrl}
                        alt={ministry.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={ministryImage.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    <div className="absolute top-2 right-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost" className="h-8 w-8 bg-black/30 hover:bg-black/50 text-white">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem disabled>Edit</DropdownMenuItem>
                          <DropdownMenuItem disabled>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="relative p-4 flex flex-col items-center justify-end h-full w-full">
                        <div className="transition-transform duration-500 group-hover:-translate-y-4">
                            <ministry.icon className="w-10 h-10 mb-2 text-accent" />
                            <h3 className="text-xl font-bold font-headline">{ministry.name}</h3>
                            <p className="text-sm text-gray-300">{ministry.leader}</p>
                        </div>
                        <div className="absolute bottom-4 px-4 w-full">
                            <Badge variant={ministry.status === 'Active' ? 'default' : 'outline'} className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out delay-100">
                              {ministry.status}
                            </Badge>
                        </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
