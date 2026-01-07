import Hero from '@/components/Hero';
import SearchCard from '@/components/SearchCard';
import Features from '@/components/Features';
import EscapeGallery from '@/components/EscapeGallery';
import PlanHoliday from '@/components/PlanHoliday';
import TravelGuides from '@/components/TravelGuides';
import Footer from '@/components/Footer';
import ConfigPanel from '@/components/ConfigPanel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ConfigPanel />
      <Hero />
      <SearchCard />
      <Features />
      <EscapeGallery />
      <PlanHoliday />
      <TravelGuides />
      <Footer />
    </main>
  );
}
