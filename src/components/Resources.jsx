import { motion } from 'framer-motion';
import { FileText, BookOpen, Film, Code, Database, Download, Presentation } from 'lucide-react';
import { projectConfig } from '../config/projectConfig';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

const RESOURCES = [
  {
    title: 'Paper PDF',
    description: 'Read the full paper and technical evaluation.',
    icon: FileText,
    href: projectConfig.links.paper,
  },
  {
    title: 'Supplementary Material',
    description: 'Additional implementation details, experiment settings, and evaluation materials.',
    icon: BookOpen,
    href: projectConfig.links.supplementary,
  },
  {
    title: 'Video',
    description: 'Watch real-robot demonstrations and qualitative results.',
    icon: Film,
    href: projectConfig.links.video,
  },
  {
    title: 'Code',
    description: 'Implementation of MorphoGuard and evaluation scripts.',
    icon: Code,
    href: projectConfig.links.code,
  },
  {
    title: 'Dataset',
    description: 'Whole-body spatial-force morphology trajectories collected from robot interaction tasks.',
    icon: Database,
    href: projectConfig.links.dataset,
  },
  {
    title: 'Trained Model',
    description: 'Pretrained model checkpoints for interactive motion prediction.',
    icon: Download,
    href: projectConfig.links.model,
  },
  {
    title: 'Project Poster',
    description: 'Overview poster summarizing motivation, method, and results.',
    icon: Presentation,
    href: projectConfig.links.poster,
  },
];

function ResourceCard({ resource, idx }) {
  return (
    <motion.a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover flex items-start gap-4 group"
      {...fadeIn}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-highlight/10 transition-colors">
        <resource.icon size={20} className="text-primary group-hover:text-highlight transition-colors" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-primary mb-1">{resource.title}</h3>
        <p className="text-xs text-text-primary/50 leading-relaxed">{resource.description}</p>
      </div>
    </motion.a>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="section-padding bg-background">
      <div className="container">
        <motion.div className="max-w-3xl" {...fadeIn}>
          <h2 className="heading-secondary mb-4">Resources</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {RESOURCES.map((resource, idx) => (
            <ResourceCard key={idx} resource={resource} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
