'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  const { t } = useLanguage();

  const handleCall = () => {
    window.location.href = `tel:${SITE_CONFIG.contact.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const handleInquire = () => {
    window.location.href = `mailto:${SITE_CONFIG.contact.email}`;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fbbf2420_1px,transparent_1px),linear-gradient(to_bottom,#fbbf2420_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm md:text-base px-4 py-2 bg-primary/10 rounded-full">
                {t({ en: '19+ Years of Excellence', ne: '१९+ वर्षको उत्कृष्टता' })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {SITE_CONFIG.name}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              {t(SITE_CONFIG.tagline)}
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(SITE_CONFIG.description)}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t({ en: 'Call Now', ne: 'अहिले फोन गर्नुहोस्' })}
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsApp}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t({ en: 'WhatsApp', ne: 'व्हाट्सएप' })}
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleInquire}
              >
                <Mail className="mr-2 h-5 w-5" />
                {t({ en: 'Inquire', ne: 'सोधपुछ' })}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">
                  {t({ en: 'Repairs Done', ne: 'मर्मत सम्पन्न' })}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">19+</div>
                <div className="text-sm text-muted-foreground">
                  {t({ en: 'Years Experience', ne: 'वर्ष अनुभव' })}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  {t({ en: 'Satisfaction', ne: 'सन्तुष्टि' })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative animate-float">
              <Image
                src="/shop.jpg"
                alt="Mobile Repair Shop"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {t({ en: 'Same Day Service', ne: 'सोही दिन सेवा' })}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t({ en: 'Fast & Reliable', ne: 'छिटो र भरपर्दो' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
