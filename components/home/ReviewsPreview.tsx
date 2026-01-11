'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { REVIEWS } from '@/lib/constants';

export function ReviewsPreview() {
  const { t } = useLanguage();

  const previewReviews = REVIEWS.slice(0, 3);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t({ en: 'Customer Reviews', ne: 'ग्राहक समीक्षाहरू' })}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t({
              en: 'See what our customers say about us',
              ne: 'हाम्रा ग्राहकहरूले हाम्रो बारेमा के भन्छन् हेर्नुहोस्',
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {previewReviews.map((review) => (
            <Card key={review.id} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-4">"{t(review.comment)}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t({ en: 'View All Reviews', ne: 'सबै समीक्षाहरू हेर्नुहोस्' })}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
