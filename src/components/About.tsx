import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Target, Rocket, Zap } from 'lucide-react';

const highlights = [
  { icon: Rocket, label: 'Full Stack MERN Applications', desc: 'End-to-end development with MongoDB, Express, React, and Node.js' },
  { icon: Target, label: 'AI-Powered Solutions', desc: 'Building intelligent web apps with AI integration and automation' },
  { icon: Zap, label: 'Performance & Scalability', desc: 'Optimizing applications for speed, SEO, and user experience' },
  { icon: Briefcase, label: 'Cloud Deployment', desc: 'Deploying and scaling applications on AWS infrastructure' },
];

const learning = [
  'Next.js App Router & SSR',
  'AWS Cloud Fundamentals',
  'Performance optimization in React',
  'AI/ML integration with web apps',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold gradient-text mb-2">A</div>
                  <p className="text-slate-400 text-lg">Anoop Gangwar</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-500/10 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-400/10 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">MERN Stack Developer</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I'm passionate about building real-world projects and solving complex problems through code.
              Currently focused on creating AI-powered web applications and exploring cloud technologies.
              I believe in writing clean, scalable code and delivering products that users love.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My expertise spans the full development lifecycle — from designing responsive frontends
              with React and Tailwind CSS to building robust backends with Node.js and Express,
              and deploying scalable applications on AWS.
            </p>
            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-300 text-sm font-medium border border-brand-500/20">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-brand-400" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{item.label}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
