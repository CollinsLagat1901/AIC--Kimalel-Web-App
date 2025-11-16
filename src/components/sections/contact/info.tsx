
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactDetails = [
    { icon: MapPin, title: "Church Address", lines: ["AIC Kimalel Saramek", "Racecourse, Eldoret, Uasin Gishu County"] },
    { icon: Phone, title: "Phone Numbers", lines: ["Office: +254 705 226196"] },
    { icon: Mail, title: "Email Address", lines: ["Kiptooelias@gmail.com"] },
    { icon: Clock, title: "Office Hours", lines: ["Monday - Friday", "8:00 AM - 5:00 PM"] },
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {contactDetails.map(detail => (
                <div key={detail.title} className="flex flex-col items-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4">
                        <detail.icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{detail.title}</h3>
                    {detail.lines.map(line => (
                        <p key={line} className="text-muted-foreground">{line}</p>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
