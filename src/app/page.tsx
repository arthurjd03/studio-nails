import { Menu } from "@/components/Menu";
import Container from "@/components/Container";
import { Hero } from "@/components/Hero";
import AboutMe from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import { OrderSummary } from "@/components/OrderSummary";
import Contact from "@/components/Contact";
import PaymentMethods from "@/components/PaymentMethods";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function HomePage() {

  return (
    <CartProvider>
      <Container>
        <Menu />
        <Hero />
        <AboutMe />
        <Gallery />
        <Services />
        <Contact />
        <PaymentMethods />
      </Container>
      <Footer />
      <OrderSummary />
    </CartProvider>
  );
}
