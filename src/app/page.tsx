import Navbar from './components/Navbar';
import ScrollHero from './components/ScrollHero';
import UsedBikeSearch from './components/UsedBikeSearch';
import FeaturedBikes from './components/FeaturedBikes';
import InspectionSection from './components/InspectionSection';
import WorkshopServices from './components/WorkshopServices';
import SellBikeForm from './components/SellBikeForm';
import FinancingCalculator from './components/FinancingCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BrandFilter from './components/BrandFilter';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow bg-white">
        {/* HERO SECTION IS LOCKED & UNTOUCHED */}
        <ScrollHero />

        {/* REDESIGNED HOMEPAGE SECTIONS AFTER THE HERO */}
        <UsedBikeSearch />
        <FeaturedBikes />
        <InspectionSection />
        <WorkshopServices />
        <SellBikeForm />
        <FinancingCalculator />
        <WhyChooseUs />
        <Testimonials />
        <BrandFilter />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
