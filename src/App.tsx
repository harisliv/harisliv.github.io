import { ThemeProvider } from '@/components/ThemeProvider';
import WavyBackground from '@/components/WavyBackground';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/Hero';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WavyBackground />
      <Navbar />
      <main>
        <Hero />
        {children}
      </main>
    </ThemeProvider>
  );
}

export default App;
