'use client';

import React from 'react';
import { Award, Star, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TECHNICIAN_INFO2 } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage2 } from '@/contexts/LanguageContext2';

export function TechnicianInfo() {
  const { t2 } = useLanguage2();

  const achievements = [
    'Certified Mobile Technician',
    'Chip-Level Repair Expert',
    'Board Level Repair Specialist',
    '5000+ Successful Repairs',
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/50 px-4 py-1">
            {t2.about.title}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t2.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t2.about.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
            <CardContent className="p-0">
              <div className="relative h-[500px] bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80 rounded-full border-8 border-primary/20 overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                    <div className="text-center">
                      <img src="./raju_sir.jpg" alt="Lead Technician" />
                      {/* <div className="text-8xl font-bold text-white mb-4">
                        {TECHNICIAN_INFO2.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-white text-2xl font-semibold">
                        {TECHNICIAN_INFO2.name}
                      </p> */}
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-6 w-6" />
                    <span className="text-sm font-medium">Experience</span>
                  </div>
                  <p className="text-4xl font-bold">{TECHNICIAN_INFO2.experience}</p>
                  <p className="text-sm opacity-90">{t2.about.experienceLabel}</p>
                </div>

                <div className="absolute bottom-8 left-8 bg-accent/90 backdrop-blur-sm text-accent-foreground rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="text-sm mt-2 font-medium">5.0 Expert Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">{TECHNICIAN_INFO2.name}</h3>
              <p className="text-xl text-primary font-semibold mb-4">
                Lead Mobile Repair Technician
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {TECHNICIAN_INFO2.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Expertise & Achievements
              </h4>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Specialized Skills</h5>
                    <p className="text-sm text-muted-foreground">
                      Advanced chip-level repair, motherboard diagnostics, EMMC/UFS
                      programming, water damage recovery, and all types of mobile repairs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
