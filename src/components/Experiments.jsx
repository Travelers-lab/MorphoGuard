import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import katex from 'katex';
import { projectConfig } from '../config/projectConfig';
import AssetPlaceholder from './AssetPlaceholder';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

function KatexInline({ math }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      try {
        katex.render(math, ref.current, { throwOnError: false, displayMode: true });
      } catch (e) {
        ref.current.textContent = math;
      }
    }
  }, [math]);
  return <span ref={ref} />;
}

const EXPERIMENTS = [
  {
    id: 'exp1',
    title: 'Narrow-Passage Morphology Regulation',
    objective:
      'Evaluate whether morphology-based states allow the controller to distinguish whole-body configurations that share similar end-effector target positions.',
    taskDescription:
      'The robot is required to pass through cardboard panels with identical end-effector target positions but different spatial configurations. Although sparse terminal states may appear similar, successful execution requires different whole-body joint configurations.',
    evaluationFocus: [
      'Morphology-sensitive motion prediction',
      'Joint-level command accuracy',
      'Whole-body configuration differentiation',
    ],
    tags: [
      'Same end-effector pose',
      'Different whole-body configurations',
      'Morphology-sensitive control prediction',
    ],
    mediaPlaceholder: projectConfig.assets.expNarrowPassage,
    resultPlaceholder: projectConfig.assets.resultJointTracking,
    caption:
      'The task evaluates whether MorphoGuard distinguishes spatially different whole-body motions beyond sparse end-effector observations.',
  },
  {
    id: 'exp2',
    title: 'Information Ablation for Distributed Manipulation',
    objective:
      'Evaluate the importance of body-wide coverage and force-aware morphology information in distributed contact manipulation.',
    taskDescription:
      'A dual-arm robot uses forearm contacts to grasp and lift one or multiple objects while maintaining a prescribed target gripping force. The task requires distributed body contacts rather than end-effector-only manipulation.',
    comparedRepresentations: [
      'End-Effector States (EEs)',
      'Point Clouds with Force Inputs (PCs)',
      'Material Points without Force Feedback (MPs w/o Force)',
      'MorphoGuard: Force-Aware MPs',
    ],
    taskVariants: [
      'Single-object lifting',
      'Multi-object lifting',
      'Distributed forearm contact',
      'Target contact-force regulation',
    ],
    metrics: [
      'Success Rate',
      'Contact Force Stability',
      'Peak Contact Force',
      'Contact Control Error',
    ],
    mediaPlaceholder: projectConfig.assets.expAblationLift,
    resultPlaceholder: projectConfig.assets.resultAblationTable,
    resultPlaceholder2: projectConfig.assets.resultForceCurves,
    showPlaceholderValues: true,
  },
  {
    id: 'exp3',
    title: 'Comparison with Whole-Body Interaction Controllers',
    objective:
      'Evaluate whether morphology-based interactive motion control improves distributed contact coordination compared with representative alternative strategies.',
    comparedMethods: [
      'Human-Guided Whole-Body Teleoperation',
      'End-Effector-Centric Learning-Based Control',
      'Model-Based Whole-Body Control',
      'MorphoGuard',
    ],
    taskDescription:
      'The robot performs distributed multi-contact manipulation tasks, including single-object and multi-object lifting, while regulating interaction forces across body contact regions.',
    metrics: [
      'Task Success Rate',
      'Contact Force Error',
      'Contact Force Stability',
      'Distributed Contact Coordination',
    ],
    conclusionText:
      'MorphoGuard is designed to achieve more reliable distributed contact coordination and more stable force regulation under complex whole-body interaction conditions.',
    mediaPlaceholder: projectConfig.assets.expBaselineComparison,
    resultPlaceholder: projectConfig.assets.resultBaselineComparison,
    resultPlaceholder2: projectConfig.assets.resultForceError,
  },
  {
    id: 'exp4',
    title: 'Sim-to-Real Multi-Object Manipulation',
    objective:
      'Evaluate whether the learned morphology-to-control mapping supports real-robot execution of interaction references generated in simulation.',
    taskDescription:
      'Desired material-point spatial states are generated in simulation and provided to MorphoGuard. The controller predicts executable joint commands for the physical robot, which then performs multi-object interaction tasks using distributed contacts.',
    pipeline: [
      'Simulation MPs Reference',
      'MorphoGuard Prediction',
      'Real-Robot Joint Commands',
      'Measured Contact Execution',
    ],
    equation: String.raw`e_c(t) = \left\| \mathbf{p}_c^{\text{real}}(t) - \mathbf{T}_{\text{sim} \to \text{real}} \, \mathbf{p}_c^{\text{sim}}(t) \right\|_2`,
    metricExplanation:
      'The contact-point control error measures the deviation between desired contact points generated in simulation and measured contact execution on the real robot after coordinate transformation.',
    mediaPlaceholder: projectConfig.assets.simToRealPlatform,
    mediaPlaceholder2: projectConfig.assets.simToRealSequence,
    resultPlaceholder: projectConfig.assets.contactErrorCurve,
  },
];

export default function Experiments() {
  return (
    <section id="experiments" className="section-padding bg-white">
      <div className="container">
        <motion.div className="max-w-3xl" {...fadeIn}>
          <h2 className="heading-secondary mb-4">Experimental Evaluation</h2>
          <p className="body-text">
            We evaluate whether MorphoGuard can represent whole-body interactive motion, distinguish
            morphology-dependent configurations, coordinate distributed contacts, and execute learned
            interaction behaviors on a physical robot.
          </p>
        </motion.div>

        <div className="mt-12 space-y-20">
          {EXPERIMENTS.map((exp, idx) => (
            <motion.div
              key={exp.id}
              id={exp.id}
              {...fadeIn}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Experiment Header */}
              <div className="mb-6">
                <span className="text-xs font-bold text-highlight uppercase tracking-wider">
                  Experiment {idx + 1}
                </span>
                <h3 className="heading-tertiary mt-1 mb-3">{exp.title}</h3>
                <div className="space-y-2 text-sm text-text-primary/70">
                  <p>
                    <strong className="text-primary">Objective: </strong>
                    {exp.objective}
                  </p>
                  <p>
                    <strong className="text-primary">Task: </strong>
                    {exp.taskDescription}
                  </p>
                </div>
              </div>

              {/* Tags / Variants / Metrics */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  {exp.tags && (
                    <div className="card">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">
                        Evaluation Focus
                      </h4>
                      <div className="space-y-1.5">
                        {exp.evaluationFocus.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-text-primary/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-highlight/10 text-highlight text-[11px] font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.comparedRepresentations && (
                    <div className="card">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">
                        Compared Representations
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.comparedRepresentations.map((r, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-text-primary/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.comparedMethods && (
                    <div className="card">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">
                        Compared Methods
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.comparedMethods.map((r, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-text-primary/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0" />
                            {r === 'MorphoGuard' ? (
                              <span className="font-semibold text-highlight">{r}</span>
                            ) : (
                              r
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.taskVariants && (
                    <div className="card">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">
                        Task Variants
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.taskVariants.map((r, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-text-primary/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.pipeline && (
                    <div className="card">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">
                        Sim-to-Real Pipeline
                      </h4>
                      <div className="space-y-0">
                        {exp.pipeline.map((step, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-text-primary/70">{step}</span>
                            {i < exp.pipeline.length - 1 && (
                              <ArrowRight size={14} className="text-primary/30 flex-shrink-0 ml-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {exp.metrics && (
                    <div className="card">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">
                        Evaluation Metrics
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.metrics.map((m, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-text-primary/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.showPlaceholderValues && (
                    <div className="card border-accent/30 bg-accent/[0.02]">
                      <div className="flex items-start gap-2">
                        <AlertTriangle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-accent/80 leading-relaxed">
                          Note: Placeholder values shown below. Replace with final values reported in
                          the paper once experimental results are finalized.
                        </p>
                      </div>
                    </div>
                  )}

                  {exp.equation && (
                    <div className="card mt-4">
                      <KatexInline math={exp.equation} />
                      {exp.metricExplanation && (
                        <p className="text-xs text-text-primary/50 mt-3 leading-relaxed">
                          {exp.metricExplanation}
                        </p>
                      )}
                    </div>
                  )}

                  {exp.conclusionText && (
                    <div className="card border-highlight/30 bg-highlight/[0.02] mt-4">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-2">
                        Evaluation Goal
                      </h4>
                      <p className="text-sm text-text-primary/70 leading-relaxed">
                        {exp.conclusionText}
                      </p>
                      <p className="text-[10px] text-accent/60 mt-2">
                        This conclusion is tentative. Verify with final results before publication.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Media and Results */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <AssetPlaceholder
                    type="image"
                    filename={exp.mediaPlaceholder}
                    description={exp.caption || `Replace with: ${exp.mediaPlaceholder}`}
                    aspectRatio="16/9"
                  />
                  {exp.mediaPlaceholder2 && (
                    <div className="mt-4">
                      <AssetPlaceholder
                        type="image"
                        filename={exp.mediaPlaceholder2}
                        description={`Replace with: ${exp.mediaPlaceholder2}`}
                        aspectRatio="16/9"
                      />
                    </div>
                  )}
                </div>
                <div>
                  {exp.resultPlaceholder && (
                    <AssetPlaceholder
                      type="image"
                      filename={exp.resultPlaceholder}
                      description={`Result figure. Replace with: ${exp.resultPlaceholder}`}
                      aspectRatio="16/9"
                    />
                  )}
                  {exp.resultPlaceholder2 && (
                    <div className="mt-4">
                      <AssetPlaceholder
                        type="image"
                        filename={exp.resultPlaceholder2}
                        description={`Result figure. Replace with: ${exp.resultPlaceholder2}`}
                        aspectRatio="16/9"
                      />
                    </div>
                  )}

                  {exp.showPlaceholderValues && (
                    <div className="mt-4 card border-border-light">
                      <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">
                        Placeholder Result Values
                        <span className="ml-2 text-[10px] font-normal text-accent normal-case">(Replace with final)</span>
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1.5 border-b border-border-light">
                          <span className="text-text-primary/60">Success Rate</span>
                          <span className="font-mono text-primary/40">XX.X%</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-border-light">
                          <span className="text-text-primary/60">Contact Force Stability</span>
                          <span className="font-mono text-primary/40">XX.X N</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-border-light">
                          <span className="text-text-primary/60">Peak Contact Force</span>
                          <span className="font-mono text-primary/40">XX.X N</span>
                        </div>
                        <div className="flex justify-between py-1.5">
                          <span className="text-text-primary/60">Contact Control Error</span>
                          <span className="font-mono text-primary/40">XX.X ± XX.X</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
