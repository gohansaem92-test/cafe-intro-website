"use client";
import { useIntroStore } from "@/store/useIntroStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const { title, subtitle } = useIntroStore();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <HeroSection title={title} subtitle={subtitle} />
      </main>
      <Footer />
    </div>
  );
}
