import FeatureSection from './components/FeatureSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkFlow from './components/WorkFlow';


const App = () => {
  return (
    <>
      <Header />
      <main className='overflow-hidden'>
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
      </main>
    </>
  );
};

export default App;