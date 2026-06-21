import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '../data/portfolioData';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding gradient-bg">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-brand-500/30 transition-all cursor-pointer"
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-slate-400 group-hover:text-brand-300 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
