// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Entension from "@/components/Extension";
import Customize from "@/components/Customize";
import Taskey from "@/components/taskey";
import OurSponsor from "@/components/OurSponsor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Entension />
      <Customize />
      <Taskey />
      <OurSponsor />
      <Footer />
    </div>
  );
}
