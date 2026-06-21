import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, TrendingUp, Code2, GitBranch, Star, GitPullRequest } from 'lucide-react';

export default function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Repositories', value: '18', icon: GitBranch },
    { label: 'Languages', value: '8+', icon: Code2 },
    { label: 'AI Projects', value: '3', icon: Star },
    { label: 'Web Projects', value: '12+', icon: GitPullRequest },
  ];

  return (
    <section className="section-padding bg-slate-950">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-6">
            <Github className="w-4 h-4" />
            <span>GitHub Activity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source Contributions</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Active contributor building and maintaining open-source projects
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-brand-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/anoopgangwar4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub Profile</span>
            <TrendingUp className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
