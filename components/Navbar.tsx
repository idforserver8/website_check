'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/contexts/LanguageContext';
import { Moon, Sun, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { useLanguage2 } from '@/contexts/LanguageContext2';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();


  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {t(link.label)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
  variant="outline"
  size="sm"
  onClick={() => toggleLanguage()}
  className="font-semibold"
>
  {language === 'en' ? 'नेपाली' : 'English'}
</Button>


            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
