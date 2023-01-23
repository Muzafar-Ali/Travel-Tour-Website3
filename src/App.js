
import { useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommendation from './components/Recommendation';
import ScrollToTp from './components/ScrollToTp';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
      const scrollAnimations = ScrollReveal({
        origin:'top',
        distance:'80px',
        duration:'2000',
        reset:true
      });

      scrollAnimations.reveal(`
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
      `, {
        opacity: 0,
        interval:300,
      }
      );
    }, [])
  
  return (
    <>
      <ScrollToTp/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Recommendation/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
