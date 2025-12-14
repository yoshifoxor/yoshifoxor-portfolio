import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full bg-white dark:bg-black">
      <section
        className={`
          m-auto flex w-full max-w-4xl flex-col justify-center px-6 py-20
          md:py-32
        `}
      >
        <div className="space-y-6">
          <h1
            className={`
              text-4xl font-bold tracking-tight text-zinc-900
              md:text-6xl
              dark:text-zinc-100
            `}
          >
            Yoshifoxor&apos;s Portfolio
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/profile"
              className={`
                inline-flex items-center justify-center rounded-lg bg-blue-600
                px-6 py-3 font-medium text-white transition-colors
                hover:bg-blue-700
                dark:bg-blue-500 dark:hover:bg-blue-600
              `}
            >
              プロフィールを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
