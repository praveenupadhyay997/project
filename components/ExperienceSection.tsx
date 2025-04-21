"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  // State to track expanded experience items
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    EXPERIENCES.reduce((acc, _, index) => {
      acc[index] = index === 0; // Only expand the first item initially
      return acc;
    }, {} as Record<number, boolean>)
  );

  // Toggle expanded state for an item
  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Generate technology badges from tech stack string
  const generateTechBadges = (techStack: string) => {
    return techStack.split(", ").map((tech, index) => (
      <Badge key={index} variant="secondary" className="mr-2 mb-2">
        {tech}
      </Badge>
    ));
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Work Experience" />
        
        <div className="mt-12 space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {exp.company} | {exp.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 md:ml-4 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className={`space-y-4 ${expandedItems[index] ? "" : "max-h-32 overflow-hidden relative"}`}>
                    {!expandedItems[index] && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
                    )}
                    
                    <ul className="space-y-3">
                      {exp.description.slice(0, expandedItems[index] ? undefined : 2).map((item, i) => (
                        <li key={i} className="flex">
                          <Check className="h-5 w-5 text-chart-1 dark:text-chart-1 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {expandedItems[index] && (
                      <>
                        <Separator className="my-4" />
                        <div>
                          <h4 className="text-sm font-medium mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap">
                            {generateTechBadges(exp.technologies)}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="mt-4 w-full flex items-center justify-center"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedItems[index] ? "Show Less" : "Show More"}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${expandedItems[index] ? "rotate-180" : ""}`} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}