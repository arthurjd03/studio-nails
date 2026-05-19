import Menu from "@/components/Menu";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import GallerySlide from "@/components/Gallery";
import Services from "@/components/Services";
import OrderSummary from "@/components/OrderSummary";
import ContactMe from "@/components/Contact";
import PaymentMethods from "@/components/PaymentMethods";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Menu />
      <Container>
        <Hero />
        <AboutMe />
        <GallerySlide />
        <Services />
        <ContactMe />
        <PaymentMethods />
      </Container>
        <Footer/>
        <OrderSummary />
    </>
  );
}
