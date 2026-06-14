import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="section-divider reveal"></div>
      <About />
      <div className="section-divider reveal"></div>
      <Process />
      <div className="section-divider reveal"></div>
      <Projects />
      <div className="section-divider reveal"></div>
      <Contact />
      <div className="section-divider reveal"></div>
      <FAQ />
      <Footer />
      <PageEffects />
    </>
  );
}
