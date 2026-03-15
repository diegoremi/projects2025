'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const sections = ['about', 'experience', 'skills', 'projects', 'contact'] as const;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setPastHero(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    heroObserver.observe(hero);
    return () => heroObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cvFile = `/cv/Diego_Remicio_CV_${locale.toUpperCase()}.pdf`;

  // Scroll to hash on initial page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Small delay to ensure DOM is ready (ScrollReveal may affect layout)
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: prefersReducedMotion() ? 'instant' : 'smooth',
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Update URL hash when active section changes via scroll
  useEffect(() => {
    if (active) {
      window.history.replaceState(null, '', `#${active}`);
    }
  }, [active]);

  function handleNav(e: React.MouseEvent, id: string) {
    e.preventDefault();
    setOpen(false);
    window.history.pushState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'instant' : 'smooth',
    });
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--background)]/90 backdrop-blur-lg border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: prefersReducedMotion() ? 'instant' : 'smooth',
            });
            setActive('');
            window.history.replaceState(null, '', window.location.pathname);
          }}
          className="font-mono text-sm font-bold text-[var(--foreground)] tracking-tight transition-colors hover:text-[var(--accent)]"
        >
          DR.
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {sections.map((s, i) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={(e) => handleNav(e, s)}
                className={`relative text-sm transition-colors duration-200 ${
                  active === s
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}.</span>{' '}
                {t(s)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-xs text-[var(--accent)] border border-[var(--accent)] rounded px-3 py-1.5 transition-all duration-300 hover:bg-[var(--accent)]/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] ${
              pastHero
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-1 pointer-events-none'
            }`}
          >
            {t('downloadCV')}
          </a>
          <span
            className={`text-[var(--border)] transition-opacity duration-300 ${
              pastHero ? 'opacity-100' : 'opacity-0'
            }`}
          >|</span>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label={open ? t('closeMenu') : t('openMenu')}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--border)] bg-[var(--background)] px-6 pb-4">
            <ul className="flex flex-col gap-1 pt-3">
              {sections.map((s, i) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    onClick={(e) => handleNav(e, s)}
                    className={`block py-2 text-sm transition-colors ${
                      active === s
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                    }`}
                  >
                    <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}.</span>{' '}
                    {t(s)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-xs text-[var(--accent)] border border-[var(--accent)] rounded px-3 py-1.5 transition-all duration-300 hover:bg-[var(--accent)]/10 ${
                  pastHero
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                {t('downloadCV')}
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
