"use client";

import { NAME, ROLE, CONTACT } from "@/lib/constants";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 md:pt-48 flex flex-col justify-center">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="block text-muted-foreground mb-1">Hello, I&apos;m</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-2 dark:from-chart-1 dark:to-chart-2">
              {NAME}
            </span>
          </h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
          >
            {ROLE} specialized in building exceptional digital experiences
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            I&apos;m passionate about crafting responsive, user-friendly web applications using modern technologies. 
            With expertise in React, TypeScript, and full-stack development, I create scalable solutions that solve real problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button asChild className="gap-2">
              <Link href={`mailto:${CONTACT.email}`}>
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <Link href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="animate-bounce rounded-full"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-chart-1/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-chart-2/5 rounded-full filter blur-3xl -z-10" />
    </section>
  );
}