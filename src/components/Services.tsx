import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Image, PenTool, Brain, Cloud } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap: Record<string, typeof Code2> = {
  Code: Code2,
  Palette: Palette,
  Image: Image,
  PenTool: PenTool,
  Brain: Brain,
  Cloud: Cloud,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding gradient-bg">
      <div className="container-custom mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            From development to design, I provide comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-brand-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-all">
                  <Icon className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
