'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, MessageCircle, Clock, Badge } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO2, SITE_CONFIG } from '@/lib/constants';
import { useLanguage2 } from '@/contexts/LanguageContext2';

// export function ContactSection() {
//   const { t } = useLanguage();

//   // return (
//   //   <section id="contact" className="py-16 md:py-24 bg-card">
//   //     <div className="container mx-auto px-4">
//   //       <div className="text-center mb-12">
//   //         <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
//   //           {t({ en: 'Contact Us', ne: 'हामीलाई सम्पर्क गर्नुहोस्' })}
//   //         </h2>
//   //         <p className="text-lg text-muted-foreground">
//   //           {t({
//   //             en: 'Get in touch for fast mobile repair services',
//   //             ne: 'छिटो मोबाइल मर्मत सेवाहरूको लागि सम्पर्कमा रहनुहोस्',
//   //           })}
//   //         </p>
//   //       </div>

//   //       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//   //         <div className="space-y-6">

//   //           <Card className="border-2">
//   //             <CardContent className="p-6">
//   //               <div className="flex items-start gap-4">
//   //                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//   //                   <MapPin className="h-6 w-6 text-primary" />
//   //                 </div>
//   //                 <div className="flex-1">
//   //                   <h3 className="font-semibold text-foreground mb-2">
//   //                     {t({ en: 'Location', ne: 'स्थान' })}
//   //                   </h3>
//   //                   <p className="text-muted-foreground">{t(SITE_CONFIG.contact.location)}</p>
//   //                 </div>
//   //               </div>
//   //             </CardContent>
//   //           </Card>
//   //           <Card className="border-2 hover:border-primary transition-colors">
//   //             <CardContent className="p-6">
//   //               <div className="flex items-start gap-4">
//   //                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//   //                   <Phone className="h-6 w-6 text-primary" />
//   //                 </div>
//   //                 <div className="flex-1">
//   //                   <h3 className="font-semibold text-foreground mb-2">
//   //                     {t({ en: 'Phone', ne: 'फोन' })}
//   //                   </h3>
//   //                   <a
//   //                     href={`tel:${SITE_CONFIG.contact.phone}`}
//   //                     className="text-primary hover:underline text-lg"
//   //                   >
//   //                     {SITE_CONFIG.contact.phone}
//   //                   </a>
//   //                 </div>
//   //               </div>
//   //             </CardContent>
//   //           </Card>

//   //           <Card className="border-2 hover:border-primary transition-colors">
//   //             <CardContent className="p-6">
//   //               <div className="flex items-start gap-4">
//   //                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//   //                   <MessageCircle className="h-6 w-6 text-primary" />
//   //                 </div>
//   //                 <div className="flex-1">
//   //                   <h3 className="font-semibold text-foreground mb-2">
//   //                     {t({ en: 'WhatsApp', ne: 'व्हाट्सएप' })}
//   //                   </h3>
//   //                   <a
//   //                     href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
//   //                     target="_blank"
//   //                     rel="noopener noreferrer"
//   //                     className="text-primary hover:underline text-lg"
//   //                   >
//   //                     {SITE_CONFIG.contact.whatsapp}
//   //                   </a>
//   //                 </div>
//   //               </div>
//   //             </CardContent>
//   //           </Card>

//   //           <Card className="border-2 hover:border-primary transition-colors">
//   //             <CardContent className="p-6">
//   //               <div className="flex items-start gap-4">
//   //                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//   //                   <Mail className="h-6 w-6 text-primary" />
//   //                 </div>
//   //                 <div className="flex-1">
//   //                   <h3 className="font-semibold text-foreground mb-2">
//   //                     {t({ en: 'Email', ne: 'इमेल' })}
//   //                   </h3>
//   //                   <a
//   //                     href={`mailto:${SITE_CONFIG.contact.email}`}
//   //                     className="text-primary hover:underline break-all"
//   //                   >
//   //                     {SITE_CONFIG.contact.email}
//   //                   </a>
//   //                 </div>
//   //               </div>
//   //             </CardContent>
//   //           </Card>

//   //           <Card className="border-2 hover:border-primary transition-colors">
//   //             <CardContent className="p-6">
//   //               <div className="flex items-start gap-4">
//   //                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//   //                   <Facebook className="h-6 w-6 text-primary" />
//   //                 </div>
//   //                 <div className="flex-1">
//   //                   <h3 className="font-semibold text-foreground mb-2">
//   //                     {t({ en: 'Facebook', ne: 'फेसबुक' })}
//   //                   </h3>
//   //                   <a
//   //                     href={SITE_CONFIG.contact.facebook}
//   //                     target="_blank"
//   //                     rel="noopener noreferrer"
//   //                     className="text-primary hover:underline"
//   //                   >
//   //                     {t({ en: 'Visit our page', ne: 'हाम्रो पृष्ठ हेर्नुहोस्' })}
//   //                   </a>
//   //                 </div>
//   //               </div>
//   //             </CardContent>
//   //           </Card>

            
//   //         </div>

//   //         <div className="h-[600px] rounded-lg overflow-hidden border-2 border-border">
//   //           <iframe
//   //             src={SITE_CONFIG.contact.mapEmbed}
//   //             width="100%"
//   //             height="100%"
//   //             style={{ border: 0 }}
//   //             allowFullScreen
//   //             loading="lazy"
//   //             referrerPolicy="no-referrer-when-downgrade"
//   //           />
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </section>
//   // );


// }


export function ContactSection() {
  const { t2 } = useLanguage2();

  const contactMethods = [
    {
      icon: Phone,
      label: t2.contact.phone,
      value: CONTACT_INFO2.phone,
      href: `tel:${CONTACT_INFO2.phone}`,
      color: 'text-primary',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: CONTACT_INFO2.whatsapp,
      href: `https://wa.me/${CONTACT_INFO2.whatsapp.replace(/[^0-9]/g, '')}`,
      color: 'text-green-600',
    },
    {
      icon: Mail,
      label: t2.contact.email,
      value: CONTACT_INFO2.email,
      href: `mailto:${CONTACT_INFO2.email}`,
      color: 'text-blue-600',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Visit our page',
      href: CONTACT_INFO2.facebook,
      color: 'text-blue-700',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/50 px-4 py-1">
            {t2.contact.title}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t2.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t2.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t2.contact.location}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {CONTACT_INFO2.location}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  {t2.contact.openHours}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">{t2.contact.mondayToFriday}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">{t2.contact.saturday}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">{t2.contact.sunday}</span>
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <CardContent className="pt-6">
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`h-5 w-5 ${method.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-muted-foreground mb-1">
                              {method.label}
                            </p>
                            <p className="font-semibold text-sm truncate">
                              {method.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-[600px]">
                <iframe
                  src={CONTACT_INFO2.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Fix Your Mobile?</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Contact us now for a free diagnosis and expert repair service. We're here to help!
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                >
                  <a href={`tel:${CONTACT_INFO2.phone}`}>
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                >
                  <a
                    href={`https://wa.me/${CONTACT_INFO2.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}