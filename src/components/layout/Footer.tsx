import Link from "next/link";
import { Link2, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 mt-auto border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading text-3xl font-bold tracking-tighter uppercase">
                Aura <span className="text-primary font-light">Nails</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Experience the pinnacle of luxury nail care. Where artistry meets perfection in every detail.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors hover:-translate-y-1 duration-300">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors hover:-translate-y-1 duration-300">
                <Link2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-widest">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>123 Luxury Avenue,<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(310) 555-0198</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-primary shrink-0" />
                <span>hello@auranails.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-heading text-lg mb-6 uppercase tracking-widest">Book Now</h4>
            <p className="text-muted-foreground mb-6">
              Ready for your luxury experience? Secure your appointment today.
            </p>
            <Link href="/book" className="w-full block">
              <Button size="lg" className="w-full rounded-full uppercase tracking-wider">Reserve Time</Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aura Nails Luxury Salon. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
