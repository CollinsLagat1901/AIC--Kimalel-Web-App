'use client';

import React, { useEffect } from "react";
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, UploadCloud } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { addSermon } from "@/app/admin/sermons/actions";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Saving...' : 'Save Sermon'}
    </Button>
  );
}

export function SermonEditDialog({ children }: { children: React.ReactNode }) {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);
  const [state, formAction] = useActionState(addSermon, { message: '', success: false });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success" : "Error",
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        setOpen(false);
      }
    }
  }, [state, toast]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Add New Sermon</DialogTitle>
            <DialogDescription>
              Fill in the details below to add a new sermon to the archive.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" name="title" placeholder="Sermon Title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="preacher" className="text-right">
                Preacher
              </Label>
              <Input id="preacher" name="preacher" placeholder="Preacher's Name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Date
              </Label>
              <Input type="hidden" name="date" value={date?.toISOString()} />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="description" className="text-right pt-2">
                Description
              </Label>
              <Textarea id="description" name="description" placeholder="Sermon summary or description..." className="col-span-3" rows={4} />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right pt-2">
                  Media
              </Label>
              <div className="col-span-3 border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50">
                  <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">Video, Audio, or Text files</p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tags" className="text-right">
                Tags
              </Label>
              <Input id="tags" name="tags" placeholder="e.g. Faith, Forgiveness, Hope" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Type
              </Label>
              <RadioGroup name="type" defaultValue="Video" className="flex items-center space-x-4 col-span-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Video" id="r-video" />
                  <Label htmlFor="r-video">Video</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Audio" id="r-audio" />
                  <Label htmlFor="r-audio">Audio</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Text" id="r-text" />
                  <Label htmlFor="r-text">Text</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Status
              </Label>
              <div className="flex items-center space-x-2 col-span-3">
                  <Switch name="published" id="status-switch" />
                  <Label htmlFor="status-switch">Published</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
