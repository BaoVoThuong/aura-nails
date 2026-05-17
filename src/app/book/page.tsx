"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, CheckCircle2, CalendarDays, Clock, User, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const services = [
  { id: "manicure", name: "Signature Manicure", duration: "45 min", price: "$45" },
  { id: "pedicure", name: "Luxury Spa Pedicure", duration: "60 min", price: "$65" },
  { id: "gel-x", name: "Gel X Extension", duration: "90 min", price: "$85" },
  { id: "acrylic", name: "Acrylic Full Set", duration: "90 min", price: "$75" },
  { id: "nail-art", name: "Bespoke Nail Art", duration: "30 min", price: "from $20" },
];

const technicians = [
  { id: "any", name: "Anyone Available" },
  { id: "mia", name: "Mia Nguyen - Master Tech" },
  { id: "chloe", name: "Chloe Tran - Nail Artist" },
  { id: "sophia", name: "Sophia Le - Pedicure Specialist" },
];

const dates = [
  { day: "Today", date: "May 17" },
  { day: "Tomorrow", date: "May 18" },
  { day: "Thursday", date: "May 19" },
  { day: "Friday", date: "May 20" },
  { day: "Saturday", date: "May 21" },
];

const times = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM", "5:00 PM"];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    technician: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const updateData = (key: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [key]: value }));
  };

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Reserve Your Time</h1>
          <p className="text-muted-foreground">Experience the ultimate in luxury nail care.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-border z-0"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 5) * 100}%` }}
          ></div>
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div 
              key={s} 
              className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-500
                ${step >= s ? "bg-primary text-primary-foreground" : "bg-background border-2 border-border text-muted-foreground"}
              `}
            >
              {step > s ? <CheckCircle2 size={16} /> : s}
            </div>
          ))}
        </div>

        <Card className="bg-card shadow-sm border-border">
          <CardContent className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* STEP 1: SERVICE */}
              {step === 1 && (
                <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
                  <h2 className="text-2xl font-heading mb-6 flex items-center gap-3"><Scissors className="text-primary"/> Select a Service</h2>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div 
                        key={service.id}
                        onClick={() => updateData("service", service.id)}
                        className={`p-5 rounded-xl border transition-all cursor-pointer flex justify-between items-center hover:border-primary
                          ${bookingData.service === service.id ? "border-primary bg-primary/5" : "border-border"}
                        `}
                      >
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{service.duration}</p>
                        </div>
                        <span className="font-heading">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: TECHNICIAN */}
              {step === 2 && (
                <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
                  <h2 className="text-2xl font-heading mb-6 flex items-center gap-3"><User className="text-primary"/> Choose a Technician</h2>
                  <div className="space-y-4">
                    {technicians.map((tech) => (
                      <div 
                        key={tech.id}
                        onClick={() => updateData("technician", tech.id)}
                        className={`p-5 rounded-xl border transition-all cursor-pointer hover:border-primary
                          ${bookingData.technician === tech.id ? "border-primary bg-primary/5" : "border-border"}
                        `}
                      >
                        <h4 className="font-medium">{tech.name}</h4>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: DATE */}
              {step === 3 && (
                <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
                  <h2 className="text-2xl font-heading mb-6 flex items-center gap-3"><CalendarDays className="text-primary"/> Select Date</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {dates.map((date) => (
                      <div 
                        key={date.date}
                        onClick={() => updateData("date", date.date)}
                        className={`p-4 rounded-xl border text-center transition-all cursor-pointer hover:border-primary
                          ${bookingData.date === date.date ? "border-primary bg-primary/5" : "border-border"}
                        `}
                      >
                        <p className="text-sm text-muted-foreground mb-1">{date.day}</p>
                        <p className="font-medium">{date.date}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: TIME */}
              {step === 4 && (
                <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
                  <h2 className="text-2xl font-heading mb-6 flex items-center gap-3"><Clock className="text-primary"/> Select Time</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {times.map((time) => (
                      <div 
                        key={time}
                        onClick={() => updateData("time", time)}
                        className={`p-4 rounded-xl border text-center transition-all cursor-pointer hover:border-primary
                          ${bookingData.time === time ? "border-primary bg-primary/5" : "border-border"}
                        `}
                      >
                        <p className="font-medium">{time}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 5: DETAILS */}
              {step === 5 && (
                <motion.div key="step5" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-6">
                  <h2 className="text-2xl font-heading mb-6">Your Details</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="e.g. Jane Doe" 
                        value={bookingData.name}
                        onChange={(e) => updateData("name", e.target.value)}
                        className="h-12 bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="e.g. jane@example.com" 
                        value={bookingData.email}
                        onChange={(e) => updateData("email", e.target.value)}
                        className="h-12 bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(555) 000-0000" 
                        value={bookingData.phone}
                        onChange={(e) => updateData("phone", e.target.value)}
                        className="h-12 bg-background"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 6: CONFIRMATION */}
              {step === 6 && (
                <motion.div key="step6" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-heading">Booking Confirmed!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you, {bookingData.name}. Your appointment for a {services.find(s => s.id === bookingData.service)?.name} with {technicians.find(t => t.id === bookingData.technician)?.name} is confirmed for {bookingData.date} at {bookingData.time}.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We've sent a confirmation email to {bookingData.email} and an SMS reminder to {bookingData.phone}.
                  </p>
                  <div className="pt-8 border-t border-border mt-8">
                    <Link href="/" className="w-full block">
                      <Button variant="outline" className="rounded-full w-full">Return to Home</Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 6 && (
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                {step > 1 ? (
                  <Button variant="ghost" onClick={prevStep} className="flex gap-2">
                    <ChevronLeft size={16} /> Back
                  </Button>
                ) : <div></div>}
                
                <Button 
                  onClick={nextStep} 
                  disabled={
                    (step === 1 && !bookingData.service) ||
                    (step === 2 && !bookingData.technician) ||
                    (step === 3 && !bookingData.date) ||
                    (step === 4 && !bookingData.time) ||
                    (step === 5 && (!bookingData.name || !bookingData.email || !bookingData.phone))
                  }
                  className="rounded-full px-8"
                >
                  {step === 5 ? "Confirm Booking" : "Continue"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
