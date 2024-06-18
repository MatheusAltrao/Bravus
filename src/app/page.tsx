import Divider from '@/components/divider/Divider';
import About from '@/components/sections/About';
import App from '@/components/sections/App';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Timeline from '@/components/sections/Timeline';

export default function Home() {
  return (
    <div className="min-h-screen w-screen  ">
      <Header />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Timeline />
      <Divider />
      <App />
      <Divider />
      {/* <Plans /> */}
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </div>
  );
}
