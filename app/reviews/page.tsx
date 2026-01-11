'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { REVIEWS, OFFERS } from '@/lib/constants';

export default function ReviewsPage() {
  const { t } = useLanguage();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentReviewIndex];

  const handleContactNow = () => {
    window.location.href = 'tel:+977 9841234567';
  };

  return (
    <>
      <div className="min-h-screen">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                {t({ en: 'Customer Reviews', ne: 'ग्राहक समीक्षाहरू' })}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'See what our satisfied customers say about our services',
                  ne: 'हाम्रा सन्तुष्ट ग्राहकहरूले हाम्रो सेवाहरूको बारेमा के भन्छन् हेर्नुहोस्',
                })}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card
                className="border-2 border-primary relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-6 justify-center">
                    {Array.from({ length: currentReview.rating }).map((_, i) => (
                      <Star key={i} className="h-8 w-8 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-center text-foreground leading-relaxed mb-8">
                    "{t(currentReview.comment)}"
                  </blockquote>

                  <div className="border-t border-border pt-6 text-center">
                    <p className="font-bold text-xl text-foreground">{currentReview.name}</p>
                    <p className="text-muted-foreground">
                      {new Date(currentReview.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </CardContent>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </Card>

              <div className="flex justify-center gap-2 mt-6">
                {REVIEWS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentReviewIndex ? 'bg-primary w-8' : 'bg-border'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <p className="text-center text-muted-foreground mt-4 text-sm">
                {t({
                  en: 'Auto-sliding every 2 seconds. Hover or touch to pause.',
                  ne: 'प्रत्येक २ सेकेन्डमा स्वत: स्लाइड हुन्छ। रोक्न होभर गर्नुहोस् वा छुनुहोस्।',
                })}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {t({ en: 'Special Offers', ne: 'विशेष प्रस्तावहरू' })}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t({
                  en: 'Take advantage of our exclusive offers',
                  ne: 'हाम्रो विशेष प्रस्तावहरूको फाइदा लिनुहोस्',
                })}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {OFFERS.map((offer) => (
                <Card key={offer.id} className="border-2 border-accent hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl">🎁</span>
                    </div>
                    <h3 className="text-xl font-bold text-accent text-center mb-3">
                      {t(offer.title)}
                    </h3>
                    <p className="text-foreground text-center mb-4">{t(offer.description)}</p>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      <strong>{t({ en: 'Available:', ne: 'उपलब्ध:' })}</strong> {t(offer.areas)}
                    </p>
                    <Button
                      onClick={handleContactNow}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      {t({ en: 'Contact Now', ne: 'अहिले सम्पर्क गर्नुहोस्' })}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
