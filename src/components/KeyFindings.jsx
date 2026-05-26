import { motion } from 'framer-motion';
import { Layers, Activity, Network, Cpu } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const FINDINGS = [
  {
    title: 'Morphology Matters',
    icon: Layers,
    text: 'Whole-body morphology states capture interaction-relevant configurations that cannot be fully represented by sparse end-effector states alone.',
  },
  {
    title: 'Force Feedback Matters',
    icon: Activity,
    text: 'Integrating contact-force information into morphology states enables force-sensitive interactive motion control.',
  },
  {
    title: 'Distributed Contacts Can Be Coordinated',
    icon: Network,
    text: 'MorphoGuard learns joint-level commands for motions involving distributed and time-varying body contacts.',
  },
  {
    title: 'Physical Execution Is Supported',
    icon: Cpu,
    text: 'The morphology-based controller is designed for real-robot execution of complex whole-body interaction behaviors.',
  },
];

export default function KeyFindings() {
  return (
    <section id="findings" className="section-padding bg-white">
      <div className="container">
        <motion.div className="max-w-3xl" {...fadeIn}>
          <h2 className="heading-secondary mb-4">Key Findings</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {FINDINGS.map((finding, idx) => (
            <motion.div
              key={idx}
              className="card card-hover"
              {...fadeIn}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                <finding.icon size={20} className="text-highlight" />
              </div>
              <h3 className="text-base font-semibold text-primary mb-2">{finding.title}</h3>
              <p className="text-sm text-text-primary/60 leading-relaxed">{finding.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
