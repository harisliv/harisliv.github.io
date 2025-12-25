import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { resumeData } from '@/shared/resumeData';

const Contact = () => {
  const contactItems = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/haris-livieratos',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      hoverBorderColor: 'hover:border-blue-500/50'
    },
    {
      icon: Mail,
      label: 'Email',
      value: resumeData.personalInfo.email,
      href: `mailto:${resumeData.personalInfo.email}`,
      color: 'from-violet-500 to-purple-600',
      hoverColor: 'hover:shadow-violet-500/25',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      hoverBorderColor: 'hover:border-violet-500/50'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: resumeData.personalInfo.phone,
      href: `tel:${resumeData.personalInfo.phone}`,
      color: 'from-cyan-500 to-teal-600',
      hoverColor: 'hover:shadow-cyan-500/25',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      hoverBorderColor: 'hover:border-cyan-500/50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden py-20">
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
              GET IN TOUCH
            </span>
            <span className="h-px w-12 bg-violet-500/50" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Let's Connect
          </h2>

          <p className="mx-auto max-w-xl text-muted-foreground">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-xl border ${item.borderColor} ${item.bgColor} p-6 transition-all duration-300 ${item.hoverBorderColor} hover:scale-105`}
              >
                <div className="relative z-10">
                  <div
                    className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${item.color} p-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.label}
                  </h3>

                  <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {item.value}
                  </p>
                </div>

                <div
                  className={`absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r ${item.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
                />

                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Looking forward to hearing from you! ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
