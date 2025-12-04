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
        <section className="min-h-screen flex items-center justify-center py-24">
          <EmploymentTimeline />
        </section>
        {children}
      </main>
    </ThemeProvider>
  );
}

export default App;
