import { useIntroStore } from "@/store/useIntroStore";
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  const { setIsMenuOpen } = useIntroStore();

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      {/* 배경 이미지 */}
      <Image
        src="/images/cafe-hero.jpg"
        alt="Cafe Image"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      {/* 오버레이 및 텍스트 */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-2 drop-shadow-md">
          {subtitle}
        </p>
        <p className="text-base sm:text-lg text-gray-400 mt-4 drop-shadow-md">
          {description}
        </p>
        <button
          onClick={() => setIsMenuOpen(true)} // ✅ 메뉴 상태 열기
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          View Menu
        </button>
      </div>
    </div>
  );
}
