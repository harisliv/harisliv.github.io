import { ThemeProvider } from '@/components/ThemeProvider';
import WavyBackground from '@/components/WavyBackground';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { EmploymentTimeline } from './components/EmploymentTimeline';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WavyBackground />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <EmploymentTimeline />
        {children}
      </main>
    </ThemeProvider>
  );
}

export default App;
