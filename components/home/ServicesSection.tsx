'use client';

import React from 'react';
import {
  Smartphone,
  BatteryCharging,
  Signal,
  Power,
  Cpu,
  Wrench,
  Phone,
  PhoneOff,
  BadgePercent,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CardFooter } from '@/components/ui/card';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES, SERVICES2, SERVICES3, SITE_CONFIG } from '@/lib/constants';
import { features } from 'process';
import { useLanguage2 } from '@/contexts/LanguageContext2';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  BatteryCharging,
  Signal,
  PhoneOff,
  Cpu,
  Wrench,
};

export function ServicesSection() {
  const { t } = useLanguage();
  const { t2 } = useLanguage2();

  const handleInquire = () => {
    window.location.href = `tel:${SITE_CONFIG.contact.phone}`;
  };


    // return (
  //   <section id="services" className="py-16 md:py-24 bg-card">
  //     <div className="container mx-auto px-4">
  //       <div className="text-center mb-12">
  //         <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
  //           {t({ en: 'Our Services', ne: 'हाम्रा सेवाहरू' })}
  //         </h2>
  //         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  //           {t({
  //             en: 'Professional mobile repair services for all types of issues. Fast, reliable, and affordable.',
  //             ne: 'सबै प्रकारका समस्याहरूको लागि व्यावसायिक मोबाइल मर्मत सेवाहरू। छिटो, भरपर्दो, र सस्तो।',
  //           })}
  //         </p>
  //         <div className="mt-6 inline-block">
  //           <div className="bg-accent/20 border-2 border-accent rounded-2xl px-6 py-3">
  //             <p className="text-lg font-bold text-accent-foreground">
  //               {t({
  //                 en: '⚡ Fast On-The-Spot Mobile Repair Service',
  //                 ne: '⚡ छिटो तत्काल मोबाइल मर्मत सेवा',
  //               })}
  //             </p>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {SERVICES.map((service) => {
  //           const IconComponent = iconMap[service.icon] || Phone;
  //           return (
  //             <Card
  //               key={service.id}
  //               className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary"
  //             >
  //               <CardHeader>
  //                 <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
  //                   <IconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
  //                 </div>
  //                 <CardTitle className="text-xl">{t(service.title)}</CardTitle>
  //                 <CardDescription className="text-base">{t(service.description)}</CardDescription>
  //               </CardHeader>
  //               <CardContent>
  //                 <Button
  //                   onClick={handleInquire}
  //                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
  //                 >
  //                   <Phone className="mr-2 h-4 w-4" />
  //                   {t({ en: 'Inquire Now', ne: 'अहिले सोधपुछ' })}
  //                 </Button>
  //               </CardContent>
  //             </Card>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </section>
  // );


return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/50 px-4 py-1">
            {t2.services.title}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t2.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t2.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES3.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    {service.offer && (
                      <Badge className="bg-accent text-accent-foreground">
                        <BadgePercent className="h-3 w-3 mr-1" />
                        {service.offer}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleInquire}
                    className="w-full group"
                    size="lg"
                  >
                    <Phone className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    {t2.services.inquire}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Call us now</p>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="text-2xl font-bold text-primary hover:underline"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

}
