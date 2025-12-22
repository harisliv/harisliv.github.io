import { ThemeProvider } from '@/components/ThemeProvider';
import WavyBackground from '@/components/WavyBackground';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechCarousel, TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { EmploymentTimeline } from './components/EmploymentTimeline';
import Contact from '@/components/Contact/Contact';
import TechCloud from './components/TechCloud';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WavyBackground />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <EmploymentTimeline />
        <Projects />
        <Contact />
        <TechCloud />
        {children}
      </main>
    </ThemeProvider>
  );
}

export default App;
