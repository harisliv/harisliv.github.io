import { motion } from 'framer-motion';
import Scene from './Scene';

const Hero = () => (
  <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-20">
    {/* Text Content */}
    <div className="z-10 mx-auto w-full max-w-7xl px-6 text-center lg:text-left">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 flex items-center gap-2"
          >
            <span className="h-1 w-12 rounded-full bg-violet-500" />
            <span className="text-sm font-medium tracking-wider text-violet-400">
              WELCOME TO MY PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 max-w-xl text-lg text-muted-foreground"
          >
            A passionate developer crafting beautiful, performant web
            experiences. I turn ideas into reality through clean code and
            creative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="#work"
              className="rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-6 py-3 font-medium text-violet-400 transition-all hover:border-violet-500/50 hover:bg-violet-500/20"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - 3D Scene */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="min-h-[450px] w-full sm:min-h-[500px] lg:col-span-6 lg:min-h-[550px]"
        >
          <Scene />
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll Down</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-violet-500/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="h-2 w-1 rounded-full bg-violet-500"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
