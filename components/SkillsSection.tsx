"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Code, Database, Server, Pickaxe } from "lucide-react";

export default function SkillsSection() {
  const categoryIcons = {
    languages: <Code className="h-5 w-5" />,
    frameworks: <Server className="h-5 w-5" />,
    databases: <Database className="h-5 w-5" />,
    tools: <Pickaxe className="h-5 w-5" />,
  };

  const skillCategories = [
    { title: "Languages", data: SKILLS.languages, icon: categoryIcons.languages },
    { title: "Frameworks", data: SKILLS.frameworks, icon: categoryIcons.frameworks },
    { title: "Databases", data: SKILLS.databases, icon: categoryIcons.databases },
    { title: "Tools", data: SKILLS.tools, icon: categoryIcons.tools },
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills & Technologies" />
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center">
                    <div className="mr-3 rounded-full p-2 bg-secondary">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.data.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="transition-transform hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Key Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.keySkills.map((skill, index) => (
              <Card key={index} className="border-l-4 border-l-chart-1 dark:border-l-chart-1">
                <CardContent className="p-4">
                  <div className="flex">
                    <Check className="h-5 w-5 text-chart-1 dark:text-chart-1 mr-3 mt-0.5" />
                    <p className="text-muted-foreground">{skill}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}