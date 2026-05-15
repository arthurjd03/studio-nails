import Menu from "@/components/Menu";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import GallerySlide from "@/components/Gallery";
import ServiceSelector from "@/components/ServiceSelector";
import ContactMe from "@/components/Contact";
import PaymentMethods from "@/components/PaymentMethods";

export default function HomePage() {
  return (
    <>
      <Menu />
      <Container>
        <Hero />
        <AboutMe />
        <GallerySlide />
        <ServiceSelector />
        <ContactMe />
        <PaymentMethods />
      </Container>
    </>
  );
}
