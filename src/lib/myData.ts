import DI_CSS from 'react-devicons/css3/original';
import DI_HTML from 'react-devicons/html5/original';
import DI_Java from 'react-devicons/java/original';
import DI_JavaScript from 'react-devicons/javascript/original';
import DI_MySQL from 'react-devicons/mysql/original';
import DI_Nodejs from 'react-devicons/nodejs/original';
import DI_Postgres from 'react-devicons/postgresql/original';
import DI_React from 'react-devicons/react/original';
import DI_Typescript from 'react-devicons/typescript/original';

interface Skill {
  icon:
    | React.ComponentType<{ size: string; className?: string }>
    | React.ComponentType<{ size: string; className?: string }>[];
  name: string;
}

interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export const allSkills: SkillCategory[] = [
  {
    categoryName: 'プログラミング言語',
    skills: [
      {
        icon: DI_JavaScript,
        name: 'JavaScript',
      },
      {
        icon: DI_Typescript,
        name: 'TypeScript',
      },
      {
        icon: DI_Java,
        name: 'Java',
      },
    ],
  },
  {
    categoryName: 'フロントエンド',
    skills: [
      {
        icon: [DI_HTML, DI_CSS],
        name: 'HTML5 / CSS3',
      },
      {
        icon: DI_React,
        name: 'React',
      },
    ],
  },
  {
    categoryName: 'バックエンド',
    skills: [
      {
        icon: DI_Nodejs,
        name: 'Node.js',
      },
    ],
  },
  {
    categoryName: 'データベース',
    skills: [
      {
        icon: DI_MySQL,
        name: 'MySQL',
      },
      {
        icon: DI_Postgres,
        name: 'PostgreSQL',
      },
    ],
  },
];
