"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    className: "bg-chart-1/10 hover:bg-chart-1/20",
    iconClassName: "text-chart-1",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    className: "bg-chart-2/10 hover:bg-chart-2/20",
    iconClassName: "text-chart-2",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    value: CONTACT.location,
    href: `https://www.google.com/maps/place/${encodeURIComponent(CONTACT.location)}`,
    className: "bg-chart-3/10 hover:bg-chart-3/20",
    iconClassName: "text-chart-3",
  },
  {
    icon: <LinkedinIcon className="h-6 w-6" />,
    label: "LinkedIn",
    value: "linkedin.com/in/praveen-upadhyay",
    href: CONTACT.linkedin,
    className: "bg-chart-4/10 hover:bg-chart-4/20",
    iconClassName: "text-chart-4",
  },
  {
    icon: <GithubIcon className="h-6 w-6" />,
    label: "GitHub",
    value: "github.com/praveenupadhyay997",
    href: CONTACT.github,
    className: "bg-chart-5/10 hover:bg-chart-5/20",
    iconClassName: "text-chart-5",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-12 mt-6"
        >
          <p className="text-muted-foreground">
            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <Card className={cn(
                  "h-full transition-all duration-300 hover:shadow-md border-none", 
                  item.className
                )}>
                  <CardContent className="flex items-center p-6">
                    <div className={cn("p-3 rounded-full mr-4", item.iconClassName)}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.label}</h3>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}