import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Plane, Truck as TruckIcon, PackageSearch } from "lucide-react";

const services = [
  {
    title: "Ocean Freight",
    description: "Reliable sea shipping solutions for your cargo",
    icon: Ship,
    features: ["FCL Shipping", "LCL Shipping", "Special Equipment"],
  },
  {
    title: "Air Freight",
    description: "Fast and efficient air cargo services",
    icon: Plane,
    features: ["Express Delivery", "Charter Services", "Dangerous Goods"],
  },
  {
    title: "Land Transport",
    description: "Comprehensive ground transportation",
    icon: TruckIcon,
    features: ["FTL Services", "LTL Services", "Cross-border"],
  },
  {
    title: "Customs Clearance",
    description: "Expert customs brokerage services",
    icon: PackageSearch,
    features: ["Documentation", "Compliance", "Consulting"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive logistics solutions for your business needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="relative overflow-hidden">
              <CardHeader>
                <service.icon className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}