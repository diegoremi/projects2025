import { useTranslations } from 'next-intl';
import { skillCategories } from '@/data/skills';
import TechPill from './TechPill';

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {t('title')}
        </h2>

        <div className="mt-10 space-y-8">
          {skillCategories.map((cat) => (
            <div key={cat.labelKey}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                {t(cat.labelKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <TechPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
