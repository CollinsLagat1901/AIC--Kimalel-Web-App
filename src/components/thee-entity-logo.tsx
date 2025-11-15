
import { cn } from "@/lib/utils";
import Link from 'next/link';

export function TheeEntityLogo({ className }: { className?: string }) {
  return (
    <Link href="https://www.theeentity.co.ke/" target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 text-sm font-bold transition-colors", className)}>
      <div className="p-1 bg-accent/20 rounded-md text-primary-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M12.27 2.37a2.02 2.02 0 0 0-1.74 0L4.5 5.87a2.02 2.02 0 0 0-1 1.74v7.02c0 .7.37 1.34 1 1.74l6.03 3.5c.5.3 1.24.3 1.74 0l4.29-2.47a.5.5 0 0 0 .21-.71.5.5 0 0 0-.71-.22l-4.29 2.48a1.02 1.02 0 0 1-.87 0l-6.03-3.5a1.02 1.02 0 0 1-.5-1.02V7.61c0-.42.18-.8.5-1.02l6.03-3.5c.22-.12.55-.12.77 0l4.29 2.48a.5.5 0 1 0 .5-.87L13.14 2.47a1.02 1.02 0 0 0-.87-.1z" />
          <path d="M16.94 17.5a.5.5 0 0 0 .86.5l3.47-2a2.02 2.02 0 0 0 1.23-2.58V8.61a2.02 2.02 0 0 0-1.23-1.74l-3.47-2a.5.5 0 0 0-.86.5l.02.04 3.45 1.99a1.02 1.02 0 0 1 .61.88v4.82a1.02 1.02 0 0 1-.61.88l-3.45 2z" />
          <path d="M8.33 9.42h4.34v1.25H9.58v2.24h2.9v1.26H9.58V16H8.33V9.42z" />
          <path d="m13.08 9.38 1.45.69c.3.14.45.33.45.56 0 .2-.09.36-.26.49s-.4.19-.68.19h-.48v3.1h-1.25V9.42h1.77zm-.03 2.16c.14 0 .26-.03.35-.08.1-.06.14-.14.14-.25 0-.1-.05-.18-.14-.24s-.22-.09-.38-.09h-.42v.66h.45z" />
        </svg>
      </div>
      <span className="font-headline">Thee Entity</span>
    </Link>
  );
}
