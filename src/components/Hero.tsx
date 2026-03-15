import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const cvFile = `/cv/Diego_Remicio_CV_${locale.toUpperCase()}.pdf`;

  const cardIcon = locale === 'es' ? '\u{1F1EA}\u{1F1FA}' : locale === 'pt' ? '\u{1F1E7}\u{1F1F7}' : '\u{1F310}';

  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-4 py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--accent-faint)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
          {t('name')}
        </h1>

        <p className="mt-4 text-xl text-[var(--muted)] sm:text-2xl">
          {t('title')}
        </p>

        <p className="mt-4 text-base text-[var(--foreground)] sm:text-lg">
          {t('description')}
        </p>

        <p className="mt-2 text-sm text-[var(--muted)]">
          {t('location')}
        </p>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {t('availability')}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            {t('downloadCV')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            {t('getInTouch')}
          </a>
        </div>

        {/* Locale-specific info card */}
        <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 text-left">
          <p className="text-sm font-semibold text-[var(--foreground)]">
            <span className="mr-1.5">{cardIcon}</span>
            {t('workAuthTitle')}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
            {t('workAuthText')}
          </p>
        </div>
      </div>
    </section>
  );
}
