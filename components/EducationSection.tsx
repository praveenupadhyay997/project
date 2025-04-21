"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap, School, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="rounded-full bg-secondary p-3">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl mb-1">{EDUCATION.degree}</CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground gap-1 sm:gap-4">
                  <div className="flex items-center">
                    <School className="h-4 w-4 mr-2" />
                    {EDUCATION.institution}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {EDUCATION.period}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {EDUCATION.details.map((detail, index) => (
                  <li key={index} className="flex">
                    <Award className="h-5 w-5 text-chart-2 dark:text-chart-2 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}