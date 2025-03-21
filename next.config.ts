import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // React strict mode 활성화
  images: {
    domains: ["localhost"], // 로컬 도메인에서 이미지 사용 가능
    unoptimized: true, // 로컬에서 next/image의 최적화 비활성화
  },
};

export default nextConfig;
