import Image from "next/image";

export default function SeriesPage() {
  return (
    <main className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
      <section className="w-screen lg:mt-10 bg-white dark:bg-black dark:shadow-violet-500 drop-shadow-lg  rounded-lg">
        <div className="p-10 flex justify-between">
          <Image
            src="/images/run.png"
            alt="Series Run"
            width={100}
            height={100}
            className="w-24 h-24 hidden lg:block"
          />
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="text-xl font-bold">Series</h1>
            <p className="text-gray-400">
              We are like books. Most people only see our cover, the minority
              read only the introduction, <br />
              many people believe the critics. Few will know our content.
            </p>
          </div>

          <Image
            src="/images/jumping-air.png"
            alt="Series Jumping"
            width={100}
            height={100}
            className="w-24 h-24 hidden lg:block"
          />
        </div>
      </section>
    </main>
  );
}
