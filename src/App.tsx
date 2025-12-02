import { ThemeProvider } from '@/components/ThemeProvider';
import WavyBackground from '@/components/WavyBackground';

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WavyBackground />
      {children}
    </ThemeProvider>
  );
}

export default App;
