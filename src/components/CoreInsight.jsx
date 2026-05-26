import { motion } from 'framer-motion';
import { Network, Gauge, GitGraph } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const FEATURES = [
  {
    title: 'Body-Wide Coverage',
    icon: Network,
    description:
      'Represent interactive motion states across arbitrary robot body regions instead of only predefined terminal links.',
  },
  {
    title: 'Force Awareness',
    icon: Gauge,
    description:
      'Integrate local contact-force sensing into the morphology representation for force-sensitive interactive motion control.',
  },
  {
    title: 'Morphology Consistency',
    icon: GitGraph,
    description:
      'Preserve structured relationships between distributed body states and joint-level robot motions.',
  },
];

export default function CoreInsight() {
  return (
    <section id="insight" className="section-padding bg-primary">
      <div className="container">
        <motion.div className="max-w-3xl mx-auto text-center" {...fadeIn}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Core Insight
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-medium">
            Whole-body interactive motion control requires a representation that jointly captures
            body-wide spatial coverage, contact-force awareness, and morphology-consistent motion
            structure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/15 transition-colors duration-300"
              {...fadeIn}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-highlight/20 flex items-center justify-center mb-5">
                <feature.icon size={24} className="text-highlight" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
