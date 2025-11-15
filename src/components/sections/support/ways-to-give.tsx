
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Building, CreditCard, Smartphone } from "lucide-react";
import { PaypalIcon } from "@/components/paypal-icon";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const givingMethods = [
    {
        title: "Direct Bank Transfer",
        icon: Banknote,
        details: [
            { label: "Bank Name", value: "Equity Bank" },
            { label: "Account Number", value: "0123456789" },
        ]
    },
    {
        title: "Lipa na M-Pesa",
        icon: Smartphone,
        details: [
            { label: "Paybill Number", value: "159210" },
            { label: "Account Number", value: "Donation/Tithe" },
        ]
    },
    {
        title: "In-Person Giving",
        icon: Building,
        details: [
            { label: "You can bring your contribution to the church office during the week or give during our Sunday services." },
        ]
    },
]

export default function WaysToGive() {
  return (
    <TooltipProvider>
      <section className="py-20 bg-secondary">
          <div className="section-divider mb-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Ways to Give</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card border-accent/20 border backdrop-blur-sm text-foreground transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20 col-span-1 lg:col-span-2">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                      <CreditCard className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-accent text-2xl font-headline">Online Giving</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button disabled size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
                          <CreditCard className="mr-2 h-5 w-5" />
                          Donate with Card
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Online card payments coming soon!</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button disabled size="lg" className="w-full bg-[#00457C] text-white hover:bg-[#003057] rounded-full transition-shadow hover:shadow-lg">
                          <PaypalIcon className="mr-2 h-5 w-5" />
                          Donate with PayPal
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>PayPal donations coming soon!</p>
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>

            {givingMethods.map((method) => (
              <Card key={method.title} className="bg-card border-accent/20 border backdrop-blur-sm text-foreground transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                      <method.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-accent text-2xl font-headline">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                      {method.details.map((detail, index) => (
                          <li key={index} className="flex justify-between">
                              <span className="text-muted-foreground">{detail.label}</span>
                              {detail.value && <strong className="text-foreground">{detail.value}</strong>}
                          </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
