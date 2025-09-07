import AboutUs from "./components/AboutUs";
import AppNavbar from "./components/AppNavbar";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import DealsCountdown from "./components/DealsCountdown";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NewsletterSection from "./components/NewsletterSection";
import Services from "./components/Services";
import TopProducts from "./components/TopProducts";

function App() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <TopProducts />
      <AboutUs />
      <Services />
      <DealsCountdown />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
