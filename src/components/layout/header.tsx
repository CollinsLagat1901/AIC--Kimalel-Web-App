'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Events', href: '/events' },
  { name: 'Support Us', href: '/support' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (isHomePage) {
      handleScroll(); // Check on initial render
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const headerClasses = cn(
    'sticky top-0 z-50 w-full transition-all duration-300',
    isHomePage && !isScrolled
      ? 'bg-transparent'
      : 'bg-primary/80 backdrop-blur-sm shadow-md'
  );

  const defaultLinkColor =
    isHomePage && !isScrolled ? 'text-primary' : 'text-primary-foreground';
  const logoColor =
    isHomePage && !isScrolled ? 'text-primary' : 'text-primary-foreground';
  const mobileMenuButtonColor = isHomePage && !isScrolled ? 'text-primary' : 'text-primary-foreground';

  return (
    <header className={headerClasses} id="home">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo className={logoColor} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  pathname === link.href ? 'text-accent' : defaultLinkColor
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent hover:border-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold"
              asChild
            >
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(mobileMenuButtonColor, "hover:bg-white/10")}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-primary text-primary-foreground p-0 w-3/4">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-white/20">
                        <Logo className="text-primary-foreground" />
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetTrigger>
                    </div>
                  <nav className="flex-1 flex flex-col items-start p-4 space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-accent',
                          pathname === link.href ? 'text-accent' : 'text-primary-foreground'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <Button
                        variant="outline"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent hover:border-accent/90 w-full mt-auto rounded-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                        asChild
                    >
                      <Link href="/contact">Plan Your Visit</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
