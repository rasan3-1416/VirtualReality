import FeatureSection from './components/FeatureSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';


const App = () => {
  return (
    <>
      <Header />
      <main className='overflow-hidden'>
        <HeroSection />
        <FeatureSection />
      </main>
    </>
  );
};

export default App;