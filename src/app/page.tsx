"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Sparkles, MapPin, Clock, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Luxury Nail Salon Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6 drop-shadow-sm">
              Luxury Nail Experience <br />
              <span className="font-light italic text-foreground/90">in Beverly Hills</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light tracking-wide">
              Modern beauty, flawless care, premium artistry. Step into a world where elegance meets perfection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="w-full sm:w-auto">
                <Button size="lg" className="rounded-full w-full sm:w-auto text-base uppercase tracking-wider px-8 py-6">Book Appointment</Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto text-base uppercase tracking-wider px-8 py-6 bg-background/50 backdrop-blur-md border-foreground/20 hover:bg-background/80">Explore Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-background py-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
            <div className="flex flex-col items-center text-center px-4">
              <div className="flex gap-1 text-primary mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">500+ Reviews</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <ShieldCheck className="text-primary mb-2" size={24} />
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Medical Grade Hygiene</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Sparkles className="text-primary mb-2" size={24} />
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Premium Products</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Star className="text-primary mb-2" size={24} />
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Expert Technicians</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tailored treatments for the ultimate relaxation and beauty enhancement.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Signature Manicure", image: "/images/manicure.png", desc: "Detailed cuticle care, shaping, massage, and flawless polish." },
              { title: "Luxury Spa Pedicure", image: "/images/pedicure.png", desc: "Exfoliation, deep hydration mask, hot stones, and perfect polish." },
              { title: "Bespoke Nail Art", image: "/images/nail-art.png", desc: "Custom designs, French tips, Chrome, and delicate hand-painted art." }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="group cursor-pointer">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-6">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <h3 className="font-heading text-2xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <span className="text-primary text-sm uppercase tracking-widest font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Discover <ChevronRight size={16} />
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full uppercase tracking-widest">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden"
            >
              <Image src="/images/hero.png" alt="Salon Experience" fill className="object-cover" />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeIn} className="font-heading text-4xl md:text-5xl mb-8 leading-tight">
                Craftsmanship Meets <br/><span className="italic text-primary font-light">American Luxury</span>
              </motion.h2>
              
              <div className="space-y-8">
                {[
                  { title: "Uncompromising Cleanliness", desc: "We utilize hospital-grade sterilization for all tools and single-use buffers and files." },
                  { title: "Premium Products", desc: "We exclusively use top-tier, non-toxic polishes and gels that protect your natural nails." },
                  { title: "Exceptional Artistry", desc: "Our technicians undergo rigorous training to deliver flawless shaping and intricate designs." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn}>
                    <h4 className="text-xl font-heading mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promotions / CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl mb-6 text-white">First Visit Exclusive</h2>
            <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto text-white/90">
              Experience the Aura difference. Receive 15% off any signature service on your first visit.
            </p>
            <Link href="/book">
              <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 uppercase tracking-widest px-10 py-6 text-lg">Claim Offer</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/50 rounded-3xl p-10 md:p-16 flex flex-col justify-center"
            >
              <h3 className="font-heading text-3xl mb-8">Visit Aura Nails</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-primary mt-1 shrink-0" />
                  <div>
                    <h5 className="font-medium uppercase tracking-widest text-sm mb-1">Address</h5>
                    <p className="text-muted-foreground">123 Luxury Avenue<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <Clock className="text-primary mt-1 shrink-0" />
                  <div>
                    <h5 className="font-medium uppercase tracking-widest text-sm mb-1">Hours</h5>
                    <div className="text-muted-foreground flex justify-between w-48">
                      <span>Mon - Sat</span>
                      <span>9AM - 7PM</span>
                    </div>
                    <div className="text-muted-foreground flex justify-between w-48">
                      <span>Sunday</span>
                      <span>10AM - 5PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="text-primary mt-1 shrink-0" />
                  <div>
                    <h5 className="font-medium uppercase tracking-widest text-sm mb-1">Contact</h5>
                    <p className="text-muted-foreground">(310) 555-0198<br/>hello@auranails.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px] rounded-3xl overflow-hidden bg-muted relative"
            >
              {/* Google Maps Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground">
                <MapPin size={48} className="mb-4 opacity-50" />
                <p>Interactive Map Component</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
