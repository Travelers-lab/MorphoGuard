import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { projectConfig } from '../config/projectConfig';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5 },
};

export default function Citation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(projectConfig.citation.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = projectConfig.citation.bibtex;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <section id="citation" className="section-padding bg-white">
      <div className="container max-w-3xl">
        <motion.div {...fadeIn}>
          <h2 className="heading-secondary mb-4">Citation</h2>
          <p className="body-text mb-6">
            If you find this work useful, please consider citing our paper.
          </p>

          <div className="relative">
            <pre className="bg-gray-50 border border-border-light rounded-xl p-6 text-xs sm:text-sm text-text-primary/80 overflow-x-auto font-mono leading-relaxed">
              {projectConfig.citation.bibtex}
            </pre>
            <button
              onClick={handleCopy}
              className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                copied
                  ? 'bg-highlight text-white'
                  : 'bg-white border border-border-light text-primary hover:border-primary/30 hover:shadow-sm'
              }`}
              aria-label={copied ? 'Copied to clipboard' : 'Copy BibTeX to clipboard'}
            >
              {copied ? (
                <>
                  <Check size={13} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={13} />
                  Copy BibTeX
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-accent/70">{projectConfig.citation.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
