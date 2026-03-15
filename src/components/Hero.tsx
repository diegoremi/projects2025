import { useTranslations, useLocale } from 'next-intl';
import { LinkedInIcon, GithubIcon } from './Icons';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const cvFile = `/cv/Diego_Remicio_CV_${locale.toUpperCase()}.pdf`;

  return (
    <section id="hero" className="flex min-h-[calc(100vh-65px)] items-center px-6 py-20 sm:px-8">
      <div className="hero-stagger mx-auto w-full max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-7xl lg:text-8xl">
          {t('name')}
        </h1>

        <p className="mt-4 font-mono text-lg text-[var(--accent)] sm:text-xl">
          {t('title')}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          {t('description')}
        </p>

        <p className="mt-5 font-mono text-xs text-[var(--muted)] sm:text-sm">
          {t('location')}
        </p>

        <p className="mt-1 font-mono text-xs text-[var(--muted)] sm:text-sm">
          {t('availability')}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--accent-hover)]"
          >
            {t('getInTouch')}
          </a>
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            {t('downloadCV')}
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/diego-remicio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/diegoremi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
