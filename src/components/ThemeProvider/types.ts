import type { Theme } from '@/types';

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
