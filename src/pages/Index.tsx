import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Staff from "@/components/Staff";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Programs />
        <Gallery />
        <Events />
        <Staff />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
