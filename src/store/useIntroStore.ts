import { create } from 'zustand';

interface MenuItem {
  name: string;
  price: string;
  image: string;
}

interface IntroState {
  title: string;
  subtitle: string;
  description: string;
  menu: MenuItem[];
  openingHours: string[];
  address: string;
  phone: string;
  isMenuOpen: boolean;
  setTitle: (title: string) => void;
  setSubtitle: (subtitle: string) => void;
  setDescription: (description: string) => void;
  setOpeningHours: (hours: string[]) => void;
  setAddress: (address: string) => void;
  setPhone: (phone: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const useIntroStore = create<IntroState>((set) => ({
  title: 'Caffe Latte',
  subtitle: 'The Best Hand Drip Coffee in Town',
  description: 'Enjoy freshly brewed coffee and delicious pastries.',
  menu: [
    { name: 'Americano', price: '4,000원', image: '/images/americano.jpg' },
    { name: 'Cafe Latte', price: '5,000원', image: '/images/latte.jpg' },
    { name: 'Vanilla Latte', price: '5,500원', image: '/images/vanilla-latte.jpg' },
    { name: 'Croissant', price: '3,500원', image: '/images/croissant.jpg' },
  ],
  openingHours: [
    'Mon-Fri: 08:00 - 22:00',
    'Sat-Sun: 09:00 - 21:00',
  ],
  address: '서울 강남구 강남대로 123번길 45',
  phone: '+82-10-1234-5678',
  isMenuOpen: false, // ✅ 메뉴 상태 추가
  setTitle: (title) => set({ title }),
  setSubtitle: (subtitle) => set({ subtitle }),
  setDescription: (description) => set({ description }),
  setOpeningHours: (hours) => set({ openingHours: hours }),
  setAddress: (address) => set({ address }),
  setPhone: (phone) => set({ phone }),
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }), // ✅ 메뉴 상태 관리 함수 추가
}));
