import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Aura Nails",
  description: "Learn about the craftsmanship, hygiene standards, and story behind Aura Nails.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image 
              src="/images/hero.png" 
              alt="Salon Interior" 
              fill 
              className="object-cover" 
            />
          </div>
          
          <div>
            <h1 className="font-heading text-4xl md:text-6xl mb-8">Our Story</h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Aura Nails was founded with a singular vision: to redefine the nail salon experience in Beverly Hills. We merge traditional Vietnamese craftsmanship with modern American luxury beauty standards.
              </p>
              <p>
                We believe that a manicure is not just a routine—it is a ritual. From our carefully curated interior to our selection of premium, non-toxic products, every detail is designed to provide an unparalleled sanctuary of relaxation.
              </p>
              <p>
                Hygiene is our highest priority. We utilize medical-grade autoclaves for our tools, and all files and buffers are strictly single-use. At Aura, you can indulge with complete peace of mind.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h4 className="font-heading text-3xl text-primary mb-2">10+</h4>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="font-heading text-3xl text-primary mb-2">5k+</h4>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
