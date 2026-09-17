import { Menu } from "@/components/Menu";
import PageWrapper from "@/components/PageWrapper";
import { Hero } from "@/components/Hero";
import AboutMe from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import { OrderSummary } from "@/components/OrderSummary";
import Contact from "@/components/Contact";
import PaymentMethods from "@/components/PaymentMethods";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <PageWrapper>
        <Menu />
        <Hero />
        <AboutMe />
        <Gallery />
        <Services />
        <Contact />
        <PaymentMethods />
      </PageWrapper>
      <Footer />
      <OrderSummary />
    </>
  );
}
