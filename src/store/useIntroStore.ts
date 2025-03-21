import { create } from 'zustand';

interface IntroState {
  title: string;
  subtitle: string;
  setTitle: (title: string) => void;
  setSubtitle: (subtitle: string) => void;
}

export const useIntroStore = create<IntroState>((set) => ({
  title: 'Welcome to My Business',
  subtitle: 'Grow your business with confidence.',
  setTitle: (title) => set({ title }),
  setSubtitle: (subtitle) => set({ subtitle }),
}));
