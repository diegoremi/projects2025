export interface ExperienceItem {
  id: string;
  bulletCount: number;
  techs: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'taller',
    bulletCount: 5,
    techs: ['Angular', 'TypeScript', 'RxJS', 'Angular CDK/Material', 'OAuth/OIDC', 'Datadog', 'Dynatrace'],
  },
  {
    id: 'freelance',
    bulletCount: 2,
    techs: ['React', 'Next.js', 'TypeScript', 'Prisma', 'NextAuth', 'Resend', 'Netlify', 'Vercel'],
  },
  {
    id: 'oktana',
    bulletCount: 3,
    techs: ['Angular', 'Node.js', 'Express', 'TypeScript', 'RxJS', 'Sequelize', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'softvision',
    bulletCount: 1,
    techs: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Chart.js'],
  },
  {
    id: 'globant',
    bulletCount: 1,
    techs: ['Angular', 'TypeScript', 'RxJS', 'AG Grid', 'Highcharts', 'Jasmine/Karma'],
  },
];
