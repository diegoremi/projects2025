export interface ProjectItem {
  id: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'aiMath',
    techs: ['Angular', 'Anthropic API', 'OpenAI API'],
    githubUrl: 'https://github.com/diegoremi/tesis_ai_math_app',
    featured: true,
  },
  {
    id: 'cgestiona',
    techs: ['React', 'Vite', 'Markdown', 'Decap CMS', 'Netlify'],
  },
  {
    id: 'clave',
    techs: ['Next.js', 'Prisma', 'NextAuth', 'Resend'],
  },
];
