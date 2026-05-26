import { FileText, Code, Film, Database, Quote } from 'lucide-react';
import { projectConfig } from '../config/projectConfig';

const FOOTER_LINKS = [
  { label: 'Paper', icon: FileText, href: projectConfig.links.paper },
  { label: 'Code', icon: Code, href: projectConfig.links.code },
  { label: 'Video', icon: Film, href: projectConfig.links.video },
  { label: 'Dataset', icon: Database, href: projectConfig.links.dataset },
  { label: 'Citation', icon: Quote, href: '#citation' },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">{projectConfig.shortName}</h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              A Morphology-Based Whole-Body Interactive Motion Controller
            </p>
            <p className="text-xs text-white/40 mt-4">{projectConfig.affiliation}</p>
            <p className="text-xs text-white/40 mt-1">
              Contact:{' '}
              <a
                href={`mailto:${projectConfig.contactEmail}`}
                className="text-white/60 hover:text-white underline underline-offset-2 transition-colors"
              >
                {projectConfig.contactEmail}
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap gap-4">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('#') ? undefined : '_blank'}
                  rel={link.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <link.icon size={14} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            &copy; {projectConfig.copyrightYear} {projectConfig.shortName} Project. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Academic project page — placeholder content
          </p>
        </div>
      </div>
    </footer>
  );
}
