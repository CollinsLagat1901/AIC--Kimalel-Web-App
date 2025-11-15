
import Link from 'next/link';
import { Facebook, Youtube, Phone, Mail, MapPin, KeyRound } from 'lucide-react';
import { Logo } from '@/components/logo';
import { TheeEntityLogo } from '../thee-entity-logo';
import { Button } from '../ui/button';

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Events', href: '/events' },
  { name: 'Support Us', href: '/support' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/20">
      <div className="relative py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Logo className="text-primary-foreground" />
              <p className="text-sm text-gray-300">
                Rooted in Christ, Growing in Faith, Serving the World.
              </p>
            </div>

            {/* Middle Column */}
            <div className="md:mx-auto">
              <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-accent transition-colors text-gray-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-bold text-lg text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+254 705 226196</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:info@aickimalel.org" className="hover:text-accent transition-colors text-gray-300">info@aickimalel.org</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Racecourse, Eldoret, Uasin Gishu County</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} aria-label={social.name} className="text-gray-400 hover:text-accent transition-colors">
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AIC Kimalel Saramek Church. All Rights Reserved.
            </p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <span>Powered by</span>
              <TheeEntityLogo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
