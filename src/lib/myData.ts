import DI_CSS from 'react-devicons/css3/original';
import DI_Docker from 'react-devicons/docker/original';
import DI_Git from 'react-devicons/git/original';
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
  description?: string;
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
        description: '授業で基礎を学習しました。',
      },
      {
        icon: DI_Typescript,
        name: 'TypeScript',
        description: '独学。Next.jsを学ぶ上で基礎を習得しました。',
      },
      {
        icon: DI_Java,
        name: 'Java',
        description:
          '授業で基礎を学習しました。オブジェクト指向を理解するのに苦労しました。',
      },
    ],
  },
  {
    categoryName: 'フロントエンド',
    skills: [
      {
        icon: [DI_HTML, DI_CSS],
        name: 'HTML5 / CSS3',
        description: '授業で基礎を学習しました。',
      },
      {
        icon: DI_React,
        name: 'React',
        description:
          '独学。状態管理などのフックを用いて、基本的なコンポーネントの作成が可能です。',
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
  {
    categoryName: 'その他',
    skills: [
      {
        icon: DI_Git,
        name: 'Git',
        description: '独学。基本操作は可能です。',
      },
      {
        icon: DI_Docker,
        name: 'Docker',
        description:
          '独学。コンテナ技術を利用した開発環境構築を個人開発で経験あり。',
      },
    ],
  },
];
