import { useIntroStore } from "@/store/useIntroStore";

export default function Footer() {
  const { address, phone } = useIntroStore();

  return (
    <footer className="p-6 bg-gray-800 text-white text-center">
      <p>&copy; 2025 Caffe Latte. All rights reserved.</p>
      <p>{address}</p>
      <p>{phone}</p>
      <div className="mt-4 flex justify-center gap-6">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
