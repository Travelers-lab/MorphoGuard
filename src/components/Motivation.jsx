import { motion } from 'framer-motion';
import { Target, AlertCircle, Lightbulb } from 'lucide-react';
import { projectConfig } from '../config/projectConfig';
import AssetPlaceholder from './AssetPlaceholder';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const REPRESENTATION_CARDS = [
  {
    title: 'End-Effector States',
    tag: 'Sparse body coverage',
    icon: Target,
    description:
      'Captures interaction only at predefined terminal links and misses body-wide contact configurations.',
    asset: projectConfig.assets.representationEE,
    placeholderDesc:
      'Replace with: /public/assets/representation_ee.png — Diagram showing end-effector state representation with sparse body coverage.',
    highlighted: false,
  },
  {
    title: 'Point Clouds with Force Inputs',
    tag: 'Coverage without structured motion consistency',
    icon: AlertCircle,
    description:
      'Provides spatial and local force information, but does not explicitly preserve morphology-consistent interactive motion structure.',
    asset: projectConfig.assets.representationPC,
    placeholderDesc:
      'Replace with: /public/assets/representation_pc.png — Diagram of point cloud + force representation.',
    highlighted: false,
  },
  {
    title: 'Force-Aware Material Points',
    tag: 'Morphology-based representation',
    icon: Lightbulb,
    description:
      'Represents distributed body-wide spatial-force interaction states with structured morphology organization.',
    asset: projectConfig.assets.representationMP,
    placeholderDesc:
      'Replace with: /public/assets/representation_mp.png — Diagram of force-aware Material Points representation.',
    highlighted: true,
  },
];

export default function Motivation() {
  return (
    <section id="motivation" className="section-padding bg-white">
      <div className="container">
        <motion.h2 className="heading-secondary mb-4" {...fadeIn}>
          Why Whole-Body Interactive Motion Control?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
          {/* Left: Text */}
          <motion.div className="space-y-5" {...fadeIn}>
            <p className="body-text">
              Robots operating in unstructured environments often encounter manipulation tasks
              that cannot be completed through end-effector contacts alone. Coordinated contacts
              across forearms, elbows, and other body regions can substantially extend a robot's
              ability to manipulate objects and operate in constrained spaces.
            </p>
            <p className="body-text">
              However, existing whole-body control approaches usually rely on sparse end-effector
              states or predefined contact structures. These representations are poorly suited to
              distributed and time-varying interactions that may occur across arbitrary body regions.
            </p>
            <p className="body-text font-medium text-primary">
              MorphoGuard addresses this limitation through a morphology-based interactive motion
              controller that encodes body-wide spatial-force states and predicts joint-level commands
              for complex contact behaviors.
            </p>
          </motion.div>

          {/* Right: Representation Cards */}
          <motion.div className="space-y-4" {...fadeIn} transition={{ delay: 0.15, duration: 0.5 }}>
            {REPRESENTATION_CARDS.map((card, idx) => (
              <div
                key={idx}
                className={`card card-hover relative overflow-hidden ${
                  card.highlighted
                    ? 'border-highlight/40 bg-primary/[0.02]'
                    : ''
                }`}
              >
                {card.highlighted && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-highlight text-white text-[10px] font-semibold rounded-full tracking-wide uppercase">
                    Our Representation
                  </span>
                )}
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
                    <AssetPlaceholder
                      type="image"
                      filename={card.asset}
                      description={card.placeholderDesc}
                      aspectRatio="1/1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <card.icon
                        size={16}
                        className={card.highlighted ? 'text-highlight' : 'text-primary/50'}
                      />
                      <h4 className="heading-tertiary text-base">{card.title}</h4>
                    </div>
                    <span className="inline-block text-[11px] font-medium text-accent uppercase tracking-wide mb-2">
                      {card.tag}
                    </span>
                    <p className="text-sm text-text-primary/60 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
