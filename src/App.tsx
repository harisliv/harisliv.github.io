import { ThemeProvider } from '@/components/ThemeProvider';
import WavyBackground from '@/components/WavyBackground';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { EmploymentTimeline } from './components/EmploymentTimeline';
import Contact from '@/components/Contact/Contact';
import TechCloud from './components/TechCloud';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WavyBackground />
      <Navbar />
      <div className="fixed inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <TechCloud />
      </div>
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <EmploymentTimeline />
        <Projects />
        <Contact />
        {children}
      </main>
    </ThemeProvider>
  );
}

export default App;
