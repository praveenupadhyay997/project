"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-semibold mb-4 text-chart-1 dark:text-chart-1">My Background</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I&apos;m a Senior Software Engineer with a passion for building efficient, 
              user-friendly applications. With a Bachelor&apos;s degree from the National 
              Institute of Technology, Kurukshetra, I&apos;ve developed a strong foundation 
              in software engineering principles.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              My journey in tech began during my university years, where I worked on 
              projects like an Automatic G-Code Generator and collaborated on a research 
              project on Biomedical Science Materials at IIT Kanpur. These early 
              experiences ignited my passion for solving complex problems with technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Throughout my career at Talentica Software, ZS Associate, and Capgemini, 
              I&apos;ve refined my skills in frontend and backend development, focusing 
              on creating scalable, maintainable, and user-centered solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-semibold mb-4 text-chart-2 dark:text-chart-2">My Philosophy</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I believe that the best software solutions are those that seamlessly blend 
              technical excellence with an intuitive user experience. My approach combines 
              a deep understanding of technology with a user-centered mindset.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I&apos;m passionate about clean, maintainable code and following SOLID principles.
              I value efficient solutions that optimize performance, as demonstrated in my work
              implementing Redis and Memcached to reduce API response times from 4s to 0.9s.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m also committed to continuous learning and staying on top of emerging 
              technologies. The tech landscape is constantly evolving, and I enjoy exploring new 
              tools and frameworks that can enhance the solutions I build.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}