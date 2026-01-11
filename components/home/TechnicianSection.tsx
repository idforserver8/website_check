'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TECHNICIAN } from '@/lib/constants';

export function TechnicianSection() {
  const { t, language } = useLanguage();

  return (
    <section id="technician" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t({ en: 'Meet Our Expert', ne: 'हाम्रो विशेषज्ञलाई भेट्नुहोस्' })}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t({
              en: 'Trusted by thousands of customers',
              ne: 'हजारौं ग्राहकहरूले विश्वास गरेका',
            })}
          </p>
        </div>

        <Card className="max-w-5xl mx-auto border-2">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={TECHNICIAN.photoUrl}
                  alt={TECHNICIAN.name}
                  fill
                  className="object-cover rounded-l-lg"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  {t(TECHNICIAN.experience)}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{TECHNICIAN.name}</h3>
                  <p className="text-lg text-primary font-semibold">{t(TECHNICIAN.experience)}</p>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed">
                  {t(TECHNICIAN.expertise)}
                </p>

                <div className="space-y-3">
                  <p className="font-semibold text-foreground">
                    {t({ en: 'Certifications & Expertise', ne: 'प्रमाणपत्र र विशेषज्ञता' })}
                  </p>
                  {TECHNICIAN.certifications[language].map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground italic">
                    {t({
                      en: '"Quality service and customer satisfaction are my top priorities. Every phone is treated with utmost care and expertise."',
                      ne: '"गुणस्तरीय सेवा र ग्राहक सन्तुष्टि मेरो शीर्ष प्राथमिकता हो। प्रत्येक फोनलाई अत्यन्त हेरचाह र विशेषज्ञताका साथ व्यवहार गरिन्छ।"',
                    })}
                  </p>
                  <p className="font-semibold text-foreground mt-2">- {TECHNICIAN.name}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
