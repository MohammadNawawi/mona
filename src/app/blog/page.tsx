import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
      <section className="w-screen lg:mt-10 bg-white dark:bg-black dark:shadow-violet-500 drop-shadow-lg  rounded-lg">
        <div className="p-10 flex justify-between">
          <Image
            src="/images/bueno.png"
            alt="Blog - Bueno"
            width={100}
            height={100}
            className="w-24 h-24 hidden lg:block"
          />
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="text-xl font-bold">Blog</h1>
            <p className="text-gray-400">
              I write to give myself strength. I write to be a characters that i
              am not.
              <br /> I write to explore all the things i&apos;m afraid of.
            </p>
          </div>

          <Image
            src="/images/whoa.png"
            alt="Blog - Whoa"
            width={100}
            height={100}
            className="w-24 h-24 hidden lg:block"
          />
        </div>
      </section>
    </main>
  );
}
