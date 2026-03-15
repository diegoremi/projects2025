import { coreSkills } from '@/data/skills';

export default function TechPill({ name }: { name: string }) {
  const isCore = coreSkills.has(name);

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-medium transition-colors
        ${isCore
          ? 'bg-[var(--accent)] text-white dark:bg-[var(--accent)] dark:text-white text-[0.8125rem] font-semibold'
          : 'bg-[var(--pill-bg)] text-[var(--pill-text)]'
        }`}
    >
      {name}
    </span>
  );
}
