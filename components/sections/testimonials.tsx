import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Logistics Manager",
    company: "Global Traders Inc.",
    content: "Zcargo has transformed our shipping operations. Their efficient service and global network have helped us expand internationally.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Michael Chen",
    role: "Supply Chain Director",
    company: "Tech Solutions Ltd.",
    content: "Outstanding customer service and reliable delivery times. Zcargo has been crucial in maintaining our supply chain efficiency.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Emma Davis",
    role: "Operations Head",
    company: "Retail Dynamics",
    content: "The customs clearance expertise provided by Zcargo has made international shipping seamless for our business.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-accent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Trusted by businesses worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm font-medium">{testimonial.company}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}