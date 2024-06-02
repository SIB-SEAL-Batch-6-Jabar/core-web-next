import Benefits from "@/components/benefits";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/section-title";
import { benefitOne, benefitThree, benefitTwo } from "./_data";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle pretitle="Understanding Diabetes" title="What is Diabetes?">
        Diabetes is a chronic condition that affects millions of people
        worldwide. It occurs when your body is unable to properly process sugar,
        leading to high blood sugar levels. Understanding your risk can help you
        take proactive steps to manage your health.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Explore Common Questions About This Test and Diabetes
      </SectionTitle>
      <Faq />

      <Cta />

      <Footer />
    </>
  );
}
