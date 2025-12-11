import Image from 'next/image';

import { Laptop, UserRound } from 'lucide-react';

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 px-16 text-2xl font-bold text-yellow-300">
        <UserRound className="mr-2 inline-block" />
        自己紹介
      </h1>
      <div className="mb-8 flex flex-col items-center md:flex-row">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="mx-16 mb-4 rounded-xl p-2.5 shadow-2xl"
        />
        <div
          className={`
            mx-16 mb-4 rounded-md border border-purple-200 bg-gray-200/30 p-4
            shadow-lg backdrop-blur-lg
          `}
        >
          <h2 className="mb-2 text-xl font-bold">安達 悦久</h2>
          <br />
          <p>
            大学で
            C言語を学んだものの、アプリ開発へのハードルが高く感じられて、挫折。
            Web界隈で Node.jsが広まりはじめ、
            JavaScriptに興味を持ちました。2015年9月から進路を変更し、専門学校で
            Webプログラミングを学びました。
          </p>
        </div>
      </div>

      <h1 className="mb-4 px-16 text-2xl font-bold text-yellow-300">
        <Laptop className="mr-2 inline-block" />
        趣味
      </h1>
      <div className="mb-8 flex flex-col">
        <div
          className={`
            mx-16 mb-4 rounded-md border border-purple-200 bg-gray-200/30 p-4
            shadow-lg backdrop-blur-lg
          `}
        >
          <h3 className="mb-2 text-xl font-bold">
            アプリ開発
          </h3>
          <p>
            趣味で Webアプリ開発をしています。主に React、 Next.js
            を使って、個人プロジェクトを進めています。新しい技術を試すのが好きで、最近は
            Tailwind CSS
            に興味があります。フロントエンドをメインで学んでいますが、バックエンドも勉強中です。
          </p>
        </div>
      </div>
    </div>
  );
}
