import { ThemeProvider } from '@/components/ThemeProvider';
import WavyBackground from '@/components/WavyBackground';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import {
  EmploymentTimeline,
  employmentHistory
} from './components/EmploymentTimeline';
import { PDFViewer } from '@react-pdf/renderer';
import ResumeDocument from '@/components/ResumePDF/ResumeDocument';
import { motion } from 'framer-motion';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WavyBackground />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <section className="relative w-full overflow-hidden py-12">
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-violet-500/50" />
                <span className="text-sm font-medium tracking-wider text-violet-400">
                  EXPERIENCE
                </span>
                <span className="h-px w-12 bg-violet-500/50" />
              </div>

              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Employment Timeline
              </h2>

              <p className="mx-auto max-w-xl text-muted-foreground">
                My professional journey and career milestones
              </p>
            </motion.div>

            <EmploymentTimeline />
          </div>
        </section>
        <section className="py-12">
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
