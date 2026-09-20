import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import JsonLd from "@/components/JsonLd";
import { HREFLANG, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { localePath } from "@/lib/i18n/routes";
import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

function structuredData(locale: Locale) {
  const t = getDictionary(locale);
  const home = `${SITE_URL}${localePath(locale, "/")}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        inLanguage: ["pt-BR", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/assets/logotype/icon-512.png`,
        image: `${SITE_URL}/og/${locale}/home`,
        description: t.seo.siteDescription,
        sameAs: SOCIAL_LINKS,
        founder: { "@id": `${SITE_URL}/#person` },
        knowsAbout: t.seo.knowsAbout,
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Alison Almeida",
        jobTitle: "Brand Product Designer",
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/pic_portfolio_about_me.jpg`,
        sameAs: SOCIAL_LINKS,
        worksFor: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${home}#faq`,
        inLanguage: HREFLANG[locale],
        mainEntity: t.faq.items.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd data={structuredData(locale)} />
      <Nav />
      <main>
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
      </main>
      <Footer />
      <PageEffects />
    </>
  );
}
