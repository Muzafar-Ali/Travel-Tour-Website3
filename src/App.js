
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Recommendation from './components/Recommendation';
import ScrollToTp from './components/ScrollToTp';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {
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
