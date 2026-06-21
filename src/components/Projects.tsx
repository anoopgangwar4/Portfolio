import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Brain, Cloud } from 'lucide-react';
import { aiProjects, webProjects, cloudProjects } from '../data/portfolioData';

type Category = 'ai' | 'web' | 'cloud';

const categories: { key: Category; label: string; icon: typeof Brain }[] = [
  { key: 'ai', label: 'AI Projects', icon: Brain },
  { key: 'web', label: 'Web Projects', icon: Code2 },
  { key: 'cloud', label: 'Cloud', icon: Cloud },
];

const projectData: Record<Category, typeof aiProjects> = {
  ai: aiProjects,
  web: webProjects,
  cloud: cloudProjects,
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('ai');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-slate-950">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my latest work across AI, web development, and cloud deployment
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-slate-700/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectData[activeCategory].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center">
                    {activeCategory === 'ai' ? (
                      <Brain className="w-6 h-6 text-brand-400" />
                    ) : activeCategory === 'web' ? (
                      <Code2 className="w-6 h-6 text-brand-400" />
                    ) : (
                      <Cloud className="w-6 h-6 text-brand-400" />
                    )}
                  </div>
                  <a
                    href={project.link}
                    className="p-2 rounded-lg text-slate-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
