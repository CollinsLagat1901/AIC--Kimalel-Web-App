import { cn } from "@/lib/utils";
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold transition-colors", className)}>
      <div className="p-1.5 bg-background rounded-full">
        <AicLogoIcon className="w-6 h-6" />
      </div>
      <span className="font-headline">AIC Saramek Kimalel</span>
    </Link>
  );
}

function AicLogoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100"
            height="100"
        >
            <circle cx="50" cy="50" r="48" stroke="#D80027" strokeWidth="4" fill="white" />
            <path
                d="M50.5,13.5 C41,22 36,25 35,33 C33,41 38,47 40,52 C42,57 41,60 41,65 C41,70 38.5,73 38,79 C37.5,85 41,88 47,88 C53,88 57,86 58,80 C59,74 58,70 59,65 C60,60 62,56 65,52 C68,48 72,45 71,36 C70,27 60,18 50.5,13.5 Z"
                stroke="black"
                strokeWidth="1.5"
                fill="white"
            />
            <line x1="15" y1="50" x2="85" y2="50" stroke="#D80027" strokeWidth="5" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="#D80027" strokeWidth="5" />
            <text
                x="50"
                y="60"
                fontFamily="sans-serif"
                fontSize="28"
                fontWeight="bold"
                textAnchor="middle"
                fill="black"
            >
                AIC
            </text>
        </svg>
    );
}
