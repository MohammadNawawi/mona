import Image from "next/image";

export default function BlogPage() {
  return (
    <main className="mx-auto flex flex-wrap max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
      <section className="w-screen lg:mt-10 bg-white dark:bg-black dark:shadow-violet-500 shadow rounded-lg">
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
      <section className="w-screen h-full my-6">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
            <div className="flex flex-wrap justify-center align-middle items-center">
              <Image
                alt="testing"
                src="/images/hero_bg.png"
                width={500}
                height={500}
                className="bg-cover h-32 w-32 items-center justify-center content-center"
              />
              <h1 className="font-bold pt-2">Coming Soon</h1>
            </div>
            <p className="line-clamp-2 text-sm text-center">Coming Soon</p>
          </div>
          <div className="col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
            <div className="flex flex-wrap justify-center align-middle items-center">
              <Image
                alt="testing"
                src="/images/hero_bg.png"
                width={500}
                height={500}
                className="bg-cover h-32 w-32 items-center justify-center content-center"
              />
              <h1 className="font-bold pt-2">Coming Soon</h1>
            </div>
            <p className="line-clamp-2 text-sm text-center">Coming Soon</p>
          </div>
          <div className="col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
            <div className="flex flex-wrap justify-center align-middle items-center">
              <Image
                alt="testing"
                src="/images/hero_bg.png"
                width={500}
                height={500}
                className="bg-cover h-32 w-32 items-center justify-center content-center"
              />
              <h1 className="font-bold pt-2">Coming Soon</h1>
            </div>
            <p className="line-clamp-2 text-sm text-center">Coming Soon</p>
          </div>
          <div className="col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
            <div className="flex flex-wrap justify-center align-middle items-center">
              <Image
                alt="testing"
                src="/images/hero_bg.png"
                width={500}
                height={500}
                className="bg-cover h-32 w-32 items-center justify-center content-center"
              />
              <h1 className="font-bold pt-2">Coming Soon</h1>
            </div>
            <p className="line-clamp-2 text-sm text-center">Coming Soon</p>
          </div>
        </div>
      </section>
    </main>
  );
}
