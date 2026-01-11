import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LiveUpdate {
  id: string;
  message_en: string;
  message_ne: string;
  is_active: boolean;
  priority: number;
  created_at: string;
  updated_at: string;
}
