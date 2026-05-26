import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Play, Code, Database, BookOpen, Shield, Cpu, Layers, Activity, Sparkles } from 'lucide-react';
import { projectConfig } from '../config/projectConfig';
import AssetPlaceholder from './AssetPlaceholder';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const KEYWORDS = [
  { label: 'Whole-Body Interaction', icon: Activity },
  { label: 'Morphology Representation', icon: Layers },
  { label: 'Force-Aware Material Points', icon: Shield },
  { label: 'Electronic Skin', icon: Cpu },
  { label: 'Robot Learning', icon: Sparkles },
];

const BUTTONS = [
  { label: 'Paper', icon: FileText, href: projectConfig.links.paper },
  { label: 'Video', icon: Play, href: projectConfig.links.video },
  { label: 'Code', icon: Code, href: projectConfig.links.code },
  { label: 'Dataset', icon: Database, href: projectConfig.links.dataset },
  { label: 'arXiv', icon: BookOpen, href: projectConfig.links.arxiv },
];

export default function Hero() {
  const [hasVideo, setHasVideo] = useState(null);
  const [hasImage, setHasImage] = useState(null);

  useEffect(() => {
    const checkVideo = async () => {
      try {
        const res = await fetch(projectConfig.assets.heroVideo, { method: 'HEAD' });
        setHasVideo(res.ok);
      } catch {
        setHasVideo(false);
      }
    };
    const checkImage = async () => {
      try {
        const res = await fetch(projectConfig.assets.heroImage, { method: 'HEAD' });
        setHasImage(res.ok);
      } catch {
        setHasImage(false);
      }
    };
    checkVideo();
    checkImage();
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 section-padding">
      <div className="container">
        <motion.div className="max-w-3xl mx-auto text-center mb-12" {...fadeInUp}>
          <h1 className="heading-primary mb-6">{projectConfig.title}</h1>
          <p className="text-lg sm:text-xl text-text-primary/70 leading-relaxed mb-4">
            {projectConfig.subtitle}
          </p>
          <p className="text-sm sm:text-base text-text-primary/60 leading-relaxed max-w-2xl mx-auto">
            {projectConfig.supportingSentence}
          </p>
        </motion.div>

        {/* Author Block */}
        <motion.div className="text-center mb-8" {...fadeInUp} transition={{ delay: 0.1, duration: 0.5 }}>
          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-text-primary/70 text-sm">
            {projectConfig.authors.map((author, i) => (
              <span key={i} className={author.isCorresponding ? 'font-semibold text-secondary underline decoration-dotted underline-offset-2' : ''}>
                {author.name}
                {i < projectConfig.authors.length - 1 && ','}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm text-text-primary/50">{projectConfig.affiliation}</p>
          <p className="mt-1 text-sm text-text-primary/50">{projectConfig.venue}</p>
          <p className="mt-1 text-xs text-text-primary/40">{projectConfig.equalContributionNote}</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div className="flex flex-wrap items-center justify-center gap-3 mb-12" {...fadeInUp} transition={{ delay: 0.2, duration: 0.5 }}>
          {BUTTONS.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                btn.label === 'Paper'
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-sm'
                  : 'bg-white text-primary border border-border-light hover:border-primary/30 hover:shadow-sm'
              }`}
            >
              <btn.icon size={16} />
              {btn.label}
            </a>
          ))}
        </motion.div>

        {/* Hero Media */}
        <motion.div className="max-w-4xl mx-auto" {...fadeInUp} transition={{ delay: 0.3, duration: 0.5 }}>
          {hasVideo === true ? (
            <video
              className="w-full rounded-xl shadow-lg"
              controls
              muted
              playsInline
              preload="metadata"
              poster={hasImage ? projectConfig.assets.heroImage : undefined}
            >
              <source src={projectConfig.assets.heroVideo} type="video/mp4" />
            </video>
          ) : hasImage === true ? (
            <AssetPlaceholder
              type="image"
              filename={projectConfig.assets.heroImage}
              description="Representative real-robot whole-body interaction demonstration"
              aspectRatio="16/9"
              className="shadow-lg"
            />
          ) : (
            <AssetPlaceholder
              description="Representative real-robot whole-body interaction demonstration. Replace with: /public/assets/hero_demo.mp4 or hero_overview.jpg"
              aspectRatio="16/9"
              className="shadow-lg"
            />
          )}
        </motion.div>

        {/* Keywords */}
        <motion.div className="flex flex-wrap items-center justify-center gap-2 mt-10" {...fadeInUp} transition={{ delay: 0.4, duration: 0.5 }}>
          {KEYWORDS.map((kw) => (
            <span
              key={kw.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary/80 text-xs font-medium rounded-full border border-primary/10"
            >
              <kw.icon size={13} />
              {kw.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
