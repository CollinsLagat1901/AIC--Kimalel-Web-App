export default function OurHistory() {
    const timelineEvents = [
        { year: "1980", event: "Church Founded" },
        { year: "1995", event: "First Sanctuary Built" },
        { year: "2005", event: "Sunday School Launched" },
        { year: "2015", event: "Community Outreach Program Started" },
        { year: "2024", event: "Growing Stronger Than Ever" },
      ];

  return (
    <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Our History</h2>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Founded as part of the Africa Inland Church (AIC) family, AIC Saramek Kimalel Church has been a center of worship and spiritual growth for the local community. Through the years, we’ve built a family of believers who are united in Christ, committed to service, and driven by love.
                </p>
            </div>
            
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 w-0.5 h-full bg-accent/30 -translate-x-1/2"></div>
                
                {timelineEvents.map((item, index) => (
                    <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                            <p className="font-bold text-accent text-lg">{item.year}</p>
                            <p className="text-muted-foreground">{item.event}</p>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-card border-2 border-accent rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-accent rounded-full glow-gold"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
