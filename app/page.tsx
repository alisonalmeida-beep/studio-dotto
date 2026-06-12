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
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Process />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Contact />
      <div className="section-divider"></div>
      <FAQ />
      <Footer />
      <PageEffects />
    </>
  );
}
