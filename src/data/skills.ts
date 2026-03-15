export interface SkillCategory {
  labelKey: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    labelKey: 'frontend',
    skills: ['Angular', 'TypeScript', 'RxJS', 'React', 'Next.js', 'HTML5', 'CSS/Sass', 'Tailwind', 'Angular Material/CDK', 'NgRx'],
  },
  {
    labelKey: 'backend',
    skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Prisma', 'Sequelize'],
  },
  {
    labelKey: 'authInfra',
    skills: ['OAuth/OIDC', 'JWT', 'Git', 'CI/CD', 'Vercel/Netlify', 'Agile (Scrum/Kanban)', 'Datadog', 'Dynatrace'],
  },
  {
    labelKey: 'performance',
    skills: ['OnPush', 'Lazy Loading', 'Virtual Scroll', 'Caching', 'Memoization', 'trackBy', 'Render Optimization'],
  },
  {
    labelKey: 'aiLlm',
    skills: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Anthropic API', 'OpenAI API', 'Prompt Engineering'],
  },
];

export const coreSkills = new Set(['Angular', 'TypeScript']);
