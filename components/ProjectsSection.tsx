"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-chart-1 dark:group-hover:text-chart-1 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="relative h-52 sm:h-64 w-full my-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <DialogDescription className="text-muted-foreground">
                    {project.description}
                  </DialogDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Visit Project
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}