import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Emergency from './components/Emergency';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Team />
        <Marquee />
        <Pricing />
        <Reviews />
        <Emergency />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
