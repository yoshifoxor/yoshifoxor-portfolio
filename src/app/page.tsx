export default function Home() {
  return (
    <div className={`
      flex min-h-screen items-center justify-center bg-zinc-50 font-sans
      dark:bg-black
    `}>
      <main className={`
        flex min-h-screen w-full max-w-3xl flex-col items-center justify-between
        bg-white px-16 py-32
        sm:items-start
        dark:bg-black
      `}>
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Yoshifoxor&apos;s Portfolio!
        </h1>
        <p className="mt-4 text-2xl text-zinc-700 dark:text-zinc-300">
          Explore my projects and experiences in software development.
        </p>
      </main>
    </div>
  );
}
