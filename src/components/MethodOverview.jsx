import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BoxSelect, ScanEye, Combine, BrainCircuit } from 'lucide-react';
import katex from 'katex';
import { projectConfig } from '../config/projectConfig';
import AssetPlaceholder from './AssetPlaceholder';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const MODULES = [
  {
    title: 'Morphology Representation',
    icon: BoxSelect,
    description:
      'The robot body is discretized into distributed material points that provide structured spatial coverage over body regions capable of interacting with the environment.',
  },
  {
    title: 'Force-Aware Interaction Sensing',
    icon: ScanEye,
    description:
      'Whole-body electronic skin associates local contact forces with the spatial states of corresponding material points.',
  },
  {
    title: 'Spatial-Force Morphology State',
    icon: Combine,
    description:
      'Material-point positions, velocities, and contact forces are integrated into a unified whole-body interactive motion representation.',
    equation: String.raw`Z(t) = [\mathbf{x}(t), \dot{\mathbf{x}}(t), \mathbf{F}(t)] \in \mathbb{R}^{N_m \times 9}`,
  },
  {
    title: 'Interactive Motion Control',
    icon: BrainCircuit,
    description:
      'A neural controller learns the mapping from high-dimensional morphology states to executable joint-level motion commands.',
    equation: String.raw`\Delta \mathbf{q}(t) = f_\theta(Z(t))`,
  },
];

function KatexSpan({ math, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(math, ref.current, { throwOnError: false, displayMode: false });
      } catch (e) {
        ref.current.textContent = math;
      }
    }
  }, [math]);

  return <span ref={ref} className={className} />;
}

const FLOW_STEPS = [
  'Whole-Body Interaction Task',
  'Robot Morphology Discretization',
  'Force-Aware Material Points +\nDistributed E-Skin',
  'Whole-Body Spatial-Force\nMorphology State',
  'MorphoGuard\nInteractive Motion Controller',
  'Joint-Level Motion Commands',
  'Real-Robot Whole-Body\nInteraction Execution',
];

export default function MethodOverview() {
  return (
    <section id="method" className="section-padding">
      <div className="container">
        <motion.div className="max-w-3xl" {...fadeIn}>
          <h2 className="heading-secondary mb-4">MorphoGuard Framework</h2>
          <p className="body-text">
            MorphoGuard represents robot morphology as a force-aware Material Points system and learns
            a whole-body interactive motion controller from distributed spatial-force states to
            executable joint-level commands.
          </p>
        </motion.div>

        {/* Framework Figure */}
        <motion.div className="mt-8 mb-14" {...fadeIn} transition={{ delay: 0.1, duration: 0.5 }}>
          <AssetPlaceholder
            type="image"
            filename={projectConfig.assets.frameworkImage}
            description="Replace with: /public/assets/morphoguard_framework.png — Overview of the MorphoGuard framework pipeline."
            aspectRatio="2.5/1"
            className="max-w-4xl mx-auto"
          />

          {/* Flowchart placeholder fallback */}
          <div className="mt-6 max-w-3xl mx-auto p-6 bg-white rounded-xl border border-border-light">
            <p className="text-xs text-text-primary/40 mb-4 text-center font-mono">
              Framework pipeline (placeholder — replace with final method figure)
            </p>
            <div className="space-y-0">
              {FLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center gap-0">
                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-[10px] font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 bg-primary/5 border border-primary/10 rounded-lg px-4 py-2.5 text-center">
                      <span className="text-xs font-medium text-primary whitespace-pre-line leading-tight">{step}</span>
                    </div>
                  </div>
                  {idx < FLOW_STEPS.length - 1 && (
                    <div className="w-0 flex justify-center mx-1">
                      <svg width="16" height="24" viewBox="0 0 16 24" className="text-primary/30">
                        <path d="M8 0v18m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Method Module Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {MODULES.map((mod, idx) => (
            <motion.div
              key={idx}
              className="card card-hover"
              {...fadeIn}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center">
                  <mod.icon size={20} className="text-highlight" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{mod.title}</h3>
              </div>
              <p className="text-sm text-text-primary/60 leading-relaxed">{mod.description}</p>
              {mod.equation && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-border-light flex items-center justify-center">
                  <KatexSpan math={mod.equation} className="text-sm text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
