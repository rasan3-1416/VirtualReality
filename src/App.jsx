import Header from './components/Header';
import Hero from './components/Hero';


const App = () => {
  return (
    <>
      <Header />
      <main className='overflow-hidden'>
        <Hero />
      </main>
    </>
  );
};

export default App;