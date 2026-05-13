import AboutMe from "@/components/About";
import ContactMe from "@/components/Contact";
import Container from "@/components/Container";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ServiceSelector from "@/components/ServiceSelector";

export default function HomePage() {
  return (
    <Container>
      <Menu />
      <Hero />
      <AboutMe />
      <Gallery />
      <ServiceSelector />
      <ContactMe />
    </Container>
  );
}
