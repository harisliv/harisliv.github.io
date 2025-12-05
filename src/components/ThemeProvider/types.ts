import type { TTheme } from '@/types';

export type ThemeProviderState = {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
};
