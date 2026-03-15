import { useTranslations } from 'next-intl';
import { experiences } from '@/data/experience';
import TechPill from './TechPill';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {t('title')}
        </h2>

        <div className="relative mt-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-[var(--border)] sm:block sm:left-[7px]" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative sm:pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 hidden h-[15px] w-[15px] rounded-full border-2 border-[var(--accent)] bg-[var(--background)] sm:block" />

                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {t(`${exp.id}.role`)}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent)]">
                    {t(`${exp.id}.company`)}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {t(`${exp.id}.date`)}
                    {t(`${exp.id}.location`) && ` · ${t(`${exp.id}.location`)}`}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {Array.from({ length: exp.bulletCount }, (_, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[var(--muted)]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {t(`${exp.id}.bullet${i + 1}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.techs.map((tech) => (
                      <TechPill key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
