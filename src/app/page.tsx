export default function Home() {
  return (
    <div
      className={`
        m-auto flex w-full max-w-3xl flex-col justify-between bg-white px-16
        py-32 align-middle
        sm:items-start
        dark:bg-black
      `}
    >
      <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Welcome to Yoshifoxor&apos;s Portfolio!
      </h1>
      <p className="mt-4 text-2xl text-zinc-700 dark:text-zinc-300">
        Explore my projects and experiences in software development.
      </p>
    </div>
  );
}
