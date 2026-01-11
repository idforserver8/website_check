import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TechnicianSection } from '@/components/home/TechnicianSection';
import { GallerySection } from '@/components/home/GallerySection';
import { ReviewsPreview } from '@/components/home/ReviewsPreview';
import { ContactSection } from '@/components/home/ContactSection';
import { Footer } from '@/components/Footer';
import { TechnicianInfo } from '@/components/home/TechnicianInfo';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* <TechnicianSection /> */}
      <TechnicianInfo/>
      <GallerySection />
      <ReviewsPreview />
      <ContactSection />
      <Footer />
    </>
  );
}
