import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Aura Nails",
  description: "Get in touch with Aura Nails for inquiries, group bookings, or special requests.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to book a private event? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10 bg-secondary/30 p-10 rounded-3xl h-fit">
            <h3 className="font-heading text-2xl mb-6">Salon Information</h3>
            
            <div className="flex gap-4">
              <MapPin className="text-primary mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-lg mb-1">Location</h5>
                <p className="text-muted-foreground">123 Luxury Avenue<br/>Beverly Hills, CA 90210</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-primary mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-lg mb-1">Phone</h5>
                <p className="text-muted-foreground">(310) 555-0198</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-primary mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-lg mb-1">Email</h5>
                <p className="text-muted-foreground">hello@auranails.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary mt-1 shrink-0" />
              <div>
                <h5 className="font-medium text-lg mb-1">Hours</h5>
                <div className="text-muted-foreground space-y-1">
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-10 rounded-3xl shadow-sm">
            <h3 className="font-heading text-2xl mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Jane" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="jane@example.com" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-background" />
              </div>
              <Button type="button" size="lg" className="w-full rounded-full uppercase tracking-widest mt-4">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
