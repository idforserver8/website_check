/*
  # Create Live Updates Table

  ## Overview
  This migration creates a table to store live updates/announcements for the mobile repair center website.
  These updates will be displayed prominently below the navbar to inform customers of important news,
  offers, or service updates.

  ## New Tables
  - `live_updates`
    - `id` (uuid, primary key) - Unique identifier for each update
    - `message_en` (text) - Update message in English
    - `message_ne` (text) - Update message in Nepali
    - `is_active` (boolean) - Whether the update should be displayed
    - `priority` (integer) - Display priority (higher number = higher priority)
    - `created_at` (timestamptz) - Timestamp when the update was created
    - `updated_at` (timestamptz) - Timestamp when the update was last modified

  ## Security
  - Enable RLS on `live_updates` table
  - Add policy for public read access (unauthenticated users can view active updates)
  - Only authenticated users can create/update/delete (for admin purposes)

  ## Notes
  - Updates are sorted by priority (descending) and then by created_at (descending)
  - Only active updates (is_active = true) should be displayed on the frontend
*/

CREATE TABLE IF NOT EXISTS live_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message_en text NOT NULL,
  message_ne text NOT NULL,
  is_active boolean DEFAULT true,
  priority integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE live_updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active live updates"
  ON live_updates
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert live updates"
  ON live_updates
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update live updates"
  ON live_updates
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete live updates"
  ON live_updates
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_live_updates_active_priority 
  ON live_updates(is_active, priority DESC, created_at DESC);

INSERT INTO live_updates (message_en, message_ne, is_active, priority) VALUES
  ('Grand Opening Special: 10% off on all repairs this week!', 'भव्य उद्घाटन विशेष: यस हप्ता सबै मर्मतमा १०% छुट!', true, 10),
  ('Fast mobile repair services - Most repairs completed same day!', 'छिटो मोबाइल मर्मत सेवा - अधिकांश मर्मत सोही दिन पूरा!', true, 5);
