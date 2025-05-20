import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Nav";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import { Sustainability } from "@/components/Sustain";
import { Footer } from "@/components/Footer";
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Benefits />
      <Sustainability />
      <Testimonials />
      <Contact />

      <Footer />
    </div>
  );
};

export default HomePage;
