import { ThemeProvider } from '@/components/ThemeProvider';
import WavyBackground from '@/components/WavyBackground';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import {
  EmploymentTimeline,
  employmentHistory
} from './components/EmploymentTimeline';
import { PDFViewer } from '@react-pdf/renderer';
import ResumeDocument from '@/components/ResumePDF/ResumeDocument';

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
        <section className="min-h-screen py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              Resume Preview
            </h2>
            <div className="rounded-lg border border-border shadow-lg">
              <PDFViewer width="100%" height="1200px" showToolbar>
                <ResumeDocument employmentHistory={employmentHistory} />
              </PDFViewer>
            </div>
          </div>
        </section>
        {children}
      </main>
    </ThemeProvider>
  );
}

export default App;
