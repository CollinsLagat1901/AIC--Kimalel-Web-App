import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Youtube } from 'lucide-react';
import Link from "next/link";

const infoItems = [
  {
    icon: Clock,
    title: "Service Times",
    lines: [
      { label: "English Service:", value: "9:00 AM – 10:30 AM" },
      { label: "Kiswahili Service:", value: "10:40 AM – 12:00 PM" },
      { label: "Sunday School for kids available during both services.", value: "" }
    ],
    buttonText: "Plan Your Visit",
    href: "/contact",
  },
  {
    icon: MapPin,
    title: "Our Location",
    lines: [
      { label: "AIC Saramek Kimalel Church,", value: "" },
      { label: "Racecourse, Eldoret.", value: "" }
    ],
    buttonText: "Get Directions",
    href: "https://maps.app.goo.gl/t2UotCaY79vicXJj9",
  },
  {
    icon: Youtube,
    title: "Watch Online",
    lines: [
      { label: "Join our services live every Sunday.", value: "" },
      { label: "Available on YouTube and Facebook.", value: "" }
    ],
    buttonText: "Watch Live Now",
    href: "#",
  }
];

export default function QuickInfo() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoItems.map((item) => (
            <Card key={item.title} className="group text-center bg-card border-2 border-transparent hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-background text-accent rounded-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl pt-4 text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground mb-6 min-h-[6rem]">
                    {item.lines.map((line, index) => (
                        <p key={index} className="text-sm">
                            <strong>{line.label}</strong> {line.value}
                        </p>
                    ))}
                </div>
                <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300">
                    <Link href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'}>{item.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
