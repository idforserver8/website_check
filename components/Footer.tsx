'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t({
                en: 'Professional mobile repair services with 19+ years of experience.',
                ne: '१९+ वर्षको अनुभवको साथ व्यावसायिक मोबाइल मर्मत सेवाहरू।',
              })}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              {t({ en: 'Contact Info', ne: 'सम्पर्क जानकारी' })}
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.contact.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                {SITE_CONFIG.contact.email}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{t(SITE_CONFIG.contact.location)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              {t({ en: 'Quick Links', ne: 'द्रुत लिङ्कहरू' })}
            </h3>
            <div className="space-y-2">
              <Link
                href="/#services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t({ en: 'Services', ne: 'सेवाहरू' })}
              </Link>
              <Link
                href="/#technician"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t({ en: 'Our Expert', ne: 'हाम्रो विशेषज्ञ' })}
              </Link>
              <Link
                href="/#gallery"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t({ en: 'Gallery', ne: 'ग्यालरी' })}
              </Link>
              <Link
                href="/reviews"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t({ en: 'Reviews', ne: 'समीक्षाहरू' })}
              </Link>
              <Link
                href="/developer"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {t({ en: 'Developer', ne: 'विकासकर्ता' })}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              {t({ en: 'Connect With Us', ne: 'हामीसँग जडान गर्नुहोस्' })}
            </h3>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.name}.{' '}
            {t({ en: 'All rights reserved.', ne: 'सबै अधिकार सुरक्षित।' })}
          </p>
          <Button
            onClick={scrollToTop}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            {t({ en: 'Back to Top', ne: 'माथि जानुहोस्' })}
          </Button>
        </div>
      </div>
    </footer>
  );
}
