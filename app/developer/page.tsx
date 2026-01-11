'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Code, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { DEVELOPER_INFO } from '@/lib/constants';

export default function DeveloperPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                {t({ en: 'Developer Information', ne: 'विकासकर्ता जानकारी' })}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'About the developer of this website',
                  ne: 'यो वेबसाइटको विकासकर्ताको बारेमा',
                })}
              </p>
            </div>

            <Card className="max-w-3xl mx-auto border-2 border-primary">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-border">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {t({ en: 'Website Developer', ne: 'वेबसाइट विकासकर्ता' })}
                      </h2>
                      <p className="text-muted-foreground">
                        {t({ en: 'Professional Web Development', ne: 'व्यावसायिक वेब विकास' })}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {t({ en: 'Developer Name', ne: 'विकासकर्ताको नाम' })}
                        </h3>
                        <p className="text-lg text-muted-foreground">{DEVELOPER_INFO.name}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {t({ en: 'Development Date', ne: 'विकास मिति' })}
                        </h3>
                        <p className="text-lg text-muted-foreground">{DEVELOPER_INFO.developedDate}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Code className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {t({ en: 'Description', ne: 'विवरण' })}
                        </h3>
                        <p className="text-muted-foreground">{t(DEVELOPER_INFO.description)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Link href={DEVELOPER_INFO.portfolioUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        {t({ en: 'Visit Portfolio Website', ne: 'पोर्टफोलियो वेबसाइट हेर्नुहोस्' })}
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {t({
                        en: 'This website was built with modern web technologies including Next.js, React, Tailwind CSS, and Supabase for optimal performance and user experience.',
                        ne: 'यो वेबसाइट Next.js, React, Tailwind CSS, र Supabase सहितका आधुनिक वेब प्रविधिहरूको साथ इष्टतम प्रदर्शन र प्रयोगकर्ता अनुभवको लागि निर्माण गरिएको थियो।',
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
