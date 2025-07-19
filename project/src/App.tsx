import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Collections from '@/components/Collections';
import ProductGallery from '@/components/ProductGallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import './App.css';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
    >
      <Header />
      <div>
        <Hero />
        <About />
        <Collections />
        <ProductGallery />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </motion.div>
  );
}

export default App;