import { Truck, Globe2, Clock, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    name: "Global Network",
    description: "Access to worldwide shipping routes and trusted partners",
    icon: Globe2,
  },
  {
    name: "Fast Delivery",
    description: "Optimized logistics for quick and efficient delivery",
    icon: Truck,
  },
  {
    name: "24/7 Support",
    description: "Round-the-clock customer service and shipment tracking",
    icon: Clock,
  },
  {
    name: "Secure Handling",
    description: "Advanced cargo protection and insurance coverage",
    icon: Shield,
  },
];

export function Features() {
  return (
    <div className="py-24 bg-accent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Zcargo?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We provide comprehensive logistics solutions tailored to your needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.name} className="bg-card">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{feature.name}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}