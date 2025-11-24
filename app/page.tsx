import HeroSection from '@/components/sections/HeroSection';
import MeaningNumbers from '@/components/sections/MeaningNumbers';
import FAQSection from '@/components/sections/FAQSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <main className="grow">
      <HeroSection />
      <MeaningNumbers />
      <FAQSection />
      <AboutSection />
    </main>
  );
}
