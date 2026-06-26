import Navbar from "@/src/components/layout/navbar";
import Footer from "@/src/components/layout/footer";
import Hero from "@/src/components/sections/hero";
import TrustBar from "@/src/components/sections/trust-bar";
import WhyChoose from "@/src/components/sections/why-choose";
import AcademicJourney from "@/src/components/sections/academic-journey";
import StudentLife from "@/src/components/sections/student-life";
import Achievements from "@/src/components/sections/achievements";
import Testimonials from "@/src/components/sections/testimonials";
import NewsEvents from "@/src/components/sections/news-events";
import VirtualTour from "@/src/components/sections/virtual-tour";
import AdmissionsCta from "@/src/components/sections/admissions-cta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyChoose />
      <AcademicJourney />
      <StudentLife />
      <Achievements />
      <Testimonials />
      <NewsEvents />
      <VirtualTour />
      <AdmissionsCta />
      <Footer />
    </main>
  );
}
