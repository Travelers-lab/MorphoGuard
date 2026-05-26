import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { projectConfig } from '../config/projectConfig';

const NAV_ITEMS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Method', href: '#method' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Results', href: '#findings' },
  { label: 'Resources', href: '#resources' },
  { label: 'Citation', href: '#citation' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-border-light'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="flex flex-col"
          >
            <span className="text-lg font-bold text-primary tracking-tight">
              {projectConfig.shortName}
            </span>
            <span className="text-[10px] text-text-primary/50 leading-tight hidden sm:block">
              Whole-Body Interactive Motion Control
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-highlight bg-highlight/10'
                    : 'text-text-primary/70 hover:text-text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={projectConfig.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <FileText size={15} />
              Paper PDF
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text-primary hover:bg-primary/5 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-border-light shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-highlight bg-highlight/10'
                      : 'text-text-primary/70 hover:text-text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={projectConfig.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FileText size={15} />
                Paper PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
