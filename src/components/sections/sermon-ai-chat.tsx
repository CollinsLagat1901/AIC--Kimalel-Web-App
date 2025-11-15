'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { handleSermonQuery } from '@/app/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  question: z.string().min(1, 'Please enter a question.'),
});

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function SermonAIChatTrigger({ sermonTranscript, children }: { sermonTranscript: string; children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] grid-rows-[auto_1fr_auto] p-0 max-h-[90dvh]">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="flex items-center gap-2">
            <Bot /> AI Sermon Assistant
          </DialogTitle>
        </DialogHeader>
        <SermonAIChat sermonTranscript={sermonTranscript} />
      </DialogContent>
    </Dialog>
  );
}

function SermonAIChat({ sermonTranscript }: { sermonTranscript: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: values.question }]);
    form.reset();

    const result = await handleSermonQuery(sermonTranscript, values.question);
    
    if (result.success) {
      setMessages((prev) => [...prev, { role: 'assistant', content: result.answer as string }]);
    } else {
        toast({
            variant: "destructive",
            title: "AI Assistant Error",
            description: result.error,
        });
      setMessages((prev) => prev.slice(0, -1));
    }
    
    setIsLoading(false);
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <ScrollArea className="h-full max-h-[60vh] px-6">
        <div ref={scrollAreaRef} className="space-y-4 pr-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback><Bot size={20} /></AvatarFallback>
            </Avatar>
            <div className="bg-muted p-3 rounded-lg max-w-sm">
              <p className="text-sm">Hello! Ask me anything about the sermon.</p>
            </div>
          </div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}
            >
              {message.role === 'assistant' && (
                <Avatar className="w-8 h-8">
                    <AvatarFallback><Bot size={20} /></AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-3 rounded-lg max-w-sm ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <Avatar className="w-8 h-8">
                    <AvatarFallback><User size={20} /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
           {isLoading && (
            <div className="flex items-start gap-3">
                 <Avatar className="w-8 h-8">
                    <AvatarFallback><Bot size={20} /></AvatarFallback>
                </Avatar>
              <div className="bg-muted p-3 rounded-lg max-w-sm flex items-center">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <DialogFooter className="p-6 pt-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start space-x-2">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Type your question..." {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </DialogFooter>
    </>
  );
}
