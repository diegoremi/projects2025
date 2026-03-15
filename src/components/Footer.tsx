import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-[var(--border)] px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-[var(--muted)]">{t('copyright')}</p>
      </div>
    </footer>
  );
}
