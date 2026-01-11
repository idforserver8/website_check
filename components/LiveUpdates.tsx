'use client';

import React, { useEffect, useState } from 'react';
import { supabase, LiveUpdate } from '@/lib/supabase';
import { useLanguage } from '@/contexts/LanguageContext';
import { Megaphone, X } from 'lucide-react';

export function LiveUpdates() {
  const [updates, setUpdates] = useState<LiveUpdate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchUpdates() {
      const { data, error } = await supabase 
        .from('live_updates')
        .select('*')
        .eq('is_active', true)
        .order('priority', { ascending: false })
        .order('created_at', { ascending: false });

      if (data && !error) {
        setUpdates(data);
      }
    }

    fetchUpdates();

    const channel = supabase
      .channel('live_updates_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'live_updates' },
        () => {
          fetchUpdates();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (updates.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [updates.length]);

  if (!isVisible || updates.length === 0) return null;

  const currentUpdate = updates[currentIndex];

  return (
    <div className="bg-gradient-to-r from-accent via-primary to-accent text-accent-foreground py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-glow" />
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3 flex-1">
          <Megaphone className="h-5 w-5 flex-shrink-0 animate-pulse" />
          <div className="flex-1 overflow-hidden">
            <p className="text-sm md:text-base font-semibold truncate">
              {language === 'en' ? currentUpdate.message_en : currentUpdate.message_ne}
            </p>
          </div>
        </div>
        {updates.length > 1 && (
          <div className="flex items-center gap-2 ml-4">
            {updates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-accent-foreground w-4' : 'bg-accent-foreground/50'
                }`}
                aria-label={`Go to update ${index + 1}`}
              />
            ))}
          </div>
        )}
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-accent-foreground/10 rounded-full transition-colors"
          aria-label="Close updates"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
