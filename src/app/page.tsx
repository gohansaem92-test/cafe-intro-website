"use client";

import { useIntroStore } from "@/store/useIntroStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MenuModal from "@/components/MenuModal";

export default function Home() {
  const { 
    title, 
    subtitle, 
    description,
    menu,
    openingHours,
    address,
    phone,
    isMenuOpen,
    setIsMenuOpen
  } = useIntroStore();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 상단 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 */}
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
        <HeroSection 
          title={title} 
          subtitle={subtitle} 
          description={description}
        />
      </main>

      {/* 메뉴 모달 */}
      {isMenuOpen && (
        <MenuModal 
          menu={menu} 
          openingHours={openingHours} 
          address={address} 
          phone={phone} 
          onClose={() => setIsMenuOpen(false)} 
        />
      )}

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
}
