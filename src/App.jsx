import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import WorkFlow from './components/WorkFlow';


const App = () => {
  return (
    <>
      <Header />
      <main className='overflow-hidden'>
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <PricingSection />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default App;