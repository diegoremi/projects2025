'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, type Locale } from '@/i18n/routing';

const locales: Locale[] = ['en', 'es', 'pt'];

export default function LanguageSwitcher() {
  const current = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(locale: Locale) {
    router.replace(pathname, { locale });
  }

  return (
    <div className="flex items-center gap-1 text-sm" role="group" aria-label="Language">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="text-[var(--border)] mx-1">|</span>}
          <button
            onClick={() => switchLocale(l)}
            className={`px-1 py-0.5 rounded transition-colors ${
              current === l
                ? 'text-[var(--accent)] font-semibold'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
            aria-current={current === l ? 'true' : undefined}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
