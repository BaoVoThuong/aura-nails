import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Aura Nails",
  description: "View our portfolio of luxury nail art and premium salon experiences.",
};

const images = [
  "/images/hero.png",
  "/images/manicure.png",
  "/images/pedicure.png",
  "/images/nail-art.png",
  "/images/hero.png",
  "/images/manicure.png",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl mb-6">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the exquisite craftsmanship and luxurious atmosphere at Aura Nails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer">
              <Image 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
