interface HeroSectionProps {
    title: string;
    subtitle: string;
  }
  
  export default function HeroSection({ title, subtitle }: HeroSectionProps) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600 mt-4">
          {subtitle}
        </p>
      </div>
    );
  }
  