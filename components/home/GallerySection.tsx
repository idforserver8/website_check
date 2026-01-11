'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { REPAIRED_PHONES_PHOTOS } from '@/lib/constants';

export function GallerySection() {
  const { t } = useLanguage();
  const [loadCount, setLoadCount] = useState(10);

  const visiblePhotos = REPAIRED_PHONES_PHOTOS.slice(0, loadCount);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t({ en: 'Our Work Gallery', ne: 'हाम्रो काम ग्यालरी' })}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t({
              en: 'See the quality of our repairs',
              ne: 'हाम्रो मर्मतको गुणस्तर हेर्नुहोस्',
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {visiblePhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square group overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-300"
            >
              <Image
                src={photo}
                alt={`Repaired phone ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">
                  {t({ en: `Repair #${index + 1}`, ne: `मर्मत #${index + 1}` })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {loadCount < REPAIRED_PHONES_PHOTOS.length && (
          <div className="flex justify-center gap-4 mt-8">
            {loadCount < 20 && (
              <Button
                onClick={() => setLoadCount(20)}
                variant="outline"
                size="lg"
              >
                {t({ en: 'Load 20 Photos', ne: '२० तस्बिरहरू लोड गर्नुहोस्' })}
              </Button>
            )}
            {loadCount >= 20 && loadCount < 30 && (
              <Button
                onClick={() => setLoadCount(30)}
                variant="outline"
                size="lg"
              >
                {t({ en: 'Load 30 Photos', ne: '३० तस्बिरहरू लोड गर्नुहोस्' })}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
