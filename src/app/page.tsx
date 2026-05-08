import AboutMe from "@/components/About";
import ContactMe from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ServiceSelector from "@/components/ServiceSelector";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ContactMe />
      <Gallery />
      <ServiceSelector />
    </>
  );
}
