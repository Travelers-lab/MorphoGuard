import { motion } from 'framer-motion';
import { Check, Minus, X } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const COLUMNS = [
  'Representation',
  'Full-Body Coverage',
  'Force-Aware Input',
  'Morphology Consistency',
  'Distributed Interaction Control',
];

const ROWS = [
  {
    repr: 'End-Effector States',
    coverage: 'no',
    force: 'partial',
    morphology: 'partial',
    distributed: 'limited',
    highlighted: false,
  },
  {
    repr: 'Point Clouds with Forces',
    coverage: 'yes',
    force: 'yes',
    morphology: 'limited',
    distributed: 'limited',
    highlighted: false,
  },
  {
    repr: 'Material Points without Force',
    coverage: 'yes',
    force: 'no',
    morphology: 'yes',
    distributed: 'partial',
    highlighted: false,
  },
  {
    repr: 'MorphoGuard: Force-Aware MPs',
    coverage: 'yes',
    force: 'yes',
    morphology: 'yes',
    distributed: 'yes',
    highlighted: true,
  },
];

function StatusIcon({ status }) {
  switch (status) {
    case 'yes':
      return <Check size={16} className="text-highlight" />;
    case 'partial':
      return <Minus size={16} className="text-accent" />;
    case 'limited':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-primary/40">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 8h6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'no':
      return <X size={16} className="text-red-400" />;
    default:
      return null;
  }
}

function StatusLabel({ status }) {
  switch (status) {
    case 'yes':
      return <span className="text-xs text-highlight font-medium">Yes</span>;
    case 'partial':
      return <span className="text-xs text-accent font-medium">Partial</span>;
    case 'limited':
      return <span className="text-xs text-text-primary/40 font-medium">Limited</span>;
    case 'no':
      return <span className="text-xs text-red-400 font-medium">No</span>;
    default:
      return null;
  }
}

export default function RepresentationComparison() {
  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container">
        <motion.div className="max-w-3xl" {...fadeIn}>
          <h2 className="heading-secondary mb-4">Why Morphology-Based Interaction Control?</h2>
          <p className="body-text">
            MorphoGuard is designed to simultaneously satisfy the spatial, force-related, and structural
            requirements of distributed whole-body interaction control.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div className="mt-10 hidden md:block overflow-x-auto" {...fadeIn} transition={{ delay: 0.1, duration: 0.5 }}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary/5">
                {COLUMNS.map((col, i) => (
                  <th
                    key={col}
                    className={`px-4 py-3 text-xs font-semibold text-primary/80 uppercase tracking-wide ${
                      i === 0 ? 'text-left' : 'text-center'
                    } ${i === 0 ? 'rounded-tl-lg' : ''} ${i === COLUMNS.length - 1 ? 'rounded-tr-lg' : ''}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border-light ${
                    row.highlighted
                      ? 'bg-highlight/[0.04] border-highlight/30'
                      : 'hover:bg-primary/[0.02]'
                  }`}
                >
                  <td className="px-4 py-3.5">
                    <span
                      className={`text-sm font-medium ${
                        row.highlighted ? 'text-highlight' : 'text-primary'
                      }`}
                    >
                      {row.repr}
                    </span>
                    {row.highlighted && (
                      <span className="ml-2 px-1.5 py-0.5 bg-highlight text-white text-[9px] font-bold rounded-full uppercase">
                        Ours
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <StatusIcon status={row.coverage} />
                      <StatusLabel status={row.coverage} />
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <StatusIcon status={row.force} />
                      <StatusLabel status={row.force} />
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <StatusIcon status={row.morphology} />
                      <StatusLabel status={row.morphology} />
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <StatusIcon status={row.distributed} />
                      <StatusLabel status={row.distributed} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div className="mt-8 md:hidden space-y-4" {...fadeIn} transition={{ delay: 0.1, duration: 0.5 }}>
          {ROWS.map((row, idx) => (
            <div
              key={idx}
              className={`card ${row.highlighted ? 'border-highlight/40 bg-highlight/[0.02]' : ''}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-sm font-semibold ${row.highlighted ? 'text-highlight' : 'text-primary'}`}>
                  {row.repr}
                </span>
                {row.highlighted && (
                  <span className="px-1.5 py-0.5 bg-highlight text-white text-[9px] font-bold rounded-full uppercase">
                    Ours
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded">
                  <span className="text-text-primary/60">Full-Body Coverage</span>
                  <StatusIcon status={row.coverage} />
                </div>
                <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded">
                  <span className="text-text-primary/60">Force-Aware Input</span>
                  <StatusIcon status={row.force} />
                </div>
                <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded">
                  <span className="text-text-primary/60">Morphology Consistency</span>
                  <StatusIcon status={row.morphology} />
                </div>
                <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded">
                  <span className="text-text-primary/60">Distributed Interaction</span>
                  <StatusIcon status={row.distributed} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
