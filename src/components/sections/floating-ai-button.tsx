'use client';

import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SermonAIChatTrigger } from './sermon-ai-chat';
import { featuredSermon } from '@/lib/constants';

export function FloatingAIButton() {
  return (
    <SermonAIChatTrigger sermonTranscript={featuredSermon.transcript}>
      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full h-16 w-16 bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-all duration-300 hover:scale-110"
      >
        <Bot className="h-8 w-8" />
        <span className="sr-only">Ask AI</span>
      </Button>
    </SermonAIChatTrigger>
  );
}
