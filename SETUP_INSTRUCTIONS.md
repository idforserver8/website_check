# Best Mobile Care - Setup Instructions

This mobile repairing center website is now ready to use! Here's what you need to know:

## Features Implemented

- **Full Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with a button in the navbar
- **English & Nepali Translation**: Switch languages instantly
- **Pastel Yellow & Golden Color Theme**: Beautiful, professional design
- **Live Updates System**: Managed through Supabase database
- **Fast Performance**: Optimized for speed and SEO

## Pages

1. **Home Page** (`/`):
   - Hero section with call-to-action buttons
   - Services section with all repair services
   - Technician profile (Raju Yadav - 19+ years experience)
   - Photo gallery (repaired phones)
   - Reviews preview
   - Contact information with Google Maps

2. **Reviews Page** (`/reviews`):
   - Auto-sliding carousel (2 seconds per review)
   - Pause on hover/touch
   - Special offers section

3. **Developer Page** (`/developer`):
   - Developer information
   - Link to portfolio

## Adding Images

To add images to your website, place them in the `public` folder:

1. **Shop Photos**:
   - `public/shop-1.jpg`
   - `public/shop-2.jpg`
   - `public/shop-3.jpg`

2. **Technician Photo**:
   - `public/technician.jpg`

3. **Repaired Phones Gallery** (30 images):
   - `public/repaired-1.jpg` through `public/repaired-30.jpg`

4. **OG Image for SEO**:
   - `public/og-image.jpg`

## Configuring Site Content

All site content is in `lib/constants.ts`. Update this file to change:

- Business name
- Contact information
- Services
- Reviews
- Offers
- Technician details
- Developer information

## Managing Live Updates

Live updates are stored in Supabase. To add/edit updates:

1. Go to your Supabase dashboard
2. Navigate to Table Editor
3. Find the `live_updates` table
4. Add new rows with:
   - `message_en`: Message in English
   - `message_ne`: Message in Nepali
   - `is_active`: Set to `true` to display
   - `priority`: Higher number = shown first

Updates automatically sync to the website in real-time!

## Environment Variables

The `.env` file already contains your Supabase credentials. No changes needed.

## Color Customization

The pastel yellow/golden theme is configured in:
- `app/globals.css` - CSS variables
- `tailwind.config.ts` - Tailwind configuration

## SEO Features

The website is optimized for search engines with:
- Fast loading times
- Semantic HTML
- Meta tags for social sharing
- Keywords focused on "fast mobile repair" and "on-the-spot service"
- Mobile-first responsive design

## Contact Information

Update your contact details in `lib/constants.ts`:
- Phone number (click-to-call enabled)
- WhatsApp number
- Email address
- Facebook page URL
- Physical location
- Google Maps embed URL

## Running the Website

The website builds successfully and is ready for deployment!

```bash
npm run build
```

## Browser Support

Works on all modern browsers with automatic theme detection based on user preferences.
