"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const menu = [
  {
    category: "Signature Manicures",
    image: "/images/manicure.png",
    description: "Immaculate grooming and precision shaping for hands that speak volumes.",
    items: [
      { name: "Classic Aura Manicure", price: "$35", desc: "Nail shaping, precision cuticle care, light massage, and high-shine polish." },
      { name: "The Gel Experience", price: "$55", desc: "Long-lasting, chip-resistant gel polish with detailed cuticle refinement." },
      { name: "Beverly Hills Spa Manicure", price: "$75", desc: "Includes rose-infused exfoliation, deep hydrating mask, and extended 15-minute massage." },
    ]
  },
  {
    category: "Luxury Pedicures",
    image: "/images/pedicure.png",
    description: "A sanctuary for your feet. Sink into relaxation and emerge rejuvenated.",
    items: [
      { name: "Classic Essential Pedicure", price: "$45", desc: "Soaking ritual, shaping, cuticle care, gentle scrub, and perfect polish." },
      { name: "Signature Gel Pedicure", price: "$65", desc: "Our classic pedicure finished with ultra-durable, glossy gel polish." },
      { name: "Ultimate Spa Pedicure", price: "$85", desc: "Includes callus treatment, hot stone massage, and deep hydration paraffin wax." },
    ]
  },
  {
    category: "Artistry & Enhancements",
    image: "/images/nail-art.png",
    description: "Bespoke creations and flawless extensions tailored to your personal aesthetic.",
    items: [
      { name: "Gel X Extensions", price: "$85+", desc: "Premium soft gel extensions for a flawless, lightweight, and natural look." },
      { name: "Sculpted Acrylics", price: "$75+", desc: "Custom sculpted acrylic full set, meticulously crafted for strength and style." },
      { name: "Dipping Powder (SNS)", price: "$60", desc: "Durable, lightweight color powder application enriched with vitamins." },
      { name: "Bespoke Nail Art", price: "from $20", desc: "Custom designs, French tips, Chrome powder, and delicate hand-painted artistry." },
    ]
  }
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Luxury Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl mb-6 tracking-tight">Our Services</h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-light tracking-wide">
              An exclusive collection of treatments designed to elevate your natural beauty and provide ultimate relaxation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-32">
            {menu.map((section, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className={`flex flex-col gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-5/12 relative">
                  <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src={section.image} 
                      alt={section.category} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12 lg:px-10">
                  <div className="mb-10 text-center lg:text-left">
                    <h2 className="font-heading text-4xl mb-4 text-foreground">{section.category}</h2>
                    <p className="text-muted-foreground font-light text-lg">{section.description}</p>
                  </div>

                  <div className="space-y-8">
                    {section.items.map((item, i) => (
                      <div key={i} className="group">
                        <div className="flex items-baseline justify-between mb-2">
                          <h4 className="text-xl font-medium font-heading group-hover:text-primary transition-colors">{item.name}</h4>
                          <div className="flex-1 border-b border-dotted border-border mx-4 opacity-50 relative top-[-6px]"></div>
                          <span className="font-heading text-xl text-primary shrink-0">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-[85%]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-secondary/30 border-t border-border mt-auto">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-4xl mb-6">Experience the Aura Difference</h3>
            <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto font-light">
              Secure your appointment today and let our master technicians transform your nails into a work of art.
            </p>
            <Link href="/book">
              <Button size="lg" className="rounded-full uppercase tracking-widest px-10 py-6 text-base group">
                Reserve Your Time
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
