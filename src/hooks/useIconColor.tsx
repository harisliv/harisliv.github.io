import { useTheme } from '@/components/ThemeProvider';

export function useIconColor(color: string, multicolor: boolean) {
  const { theme } = useTheme();
  let iconColor = color;
  if (!multicolor) {
    iconColor = theme === 'dark' ? '#c9c9c9' : '#111519';
  }
  return iconColor;
}
