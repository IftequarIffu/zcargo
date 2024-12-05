"use client";

import { Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center items-center mb-8">
            <Ship className="h-12 w-12 text-primary" />
            <h1 className="ml-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Zcargo
            </h1>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            Your trusted partner in global trade. We simplify import and export logistics
            with expertise, reliability, and cutting-edge solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}