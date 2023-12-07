import Image from "next/image";

export default function CodePage() {
  return (
    <main className="mx-auto flex flex-wrap max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
      <section className="w-screen lg:mt-10 bg-white dark:bg-black dark:shadow-violet-500  shadow rounded-lg">
        <div className="p-10 flex justify-between">
          <Image
            src="/images/groceries.png"
            alt="Code - Groceries"
            width={100}
            height={100}
            className="w-24 h-24 hidden lg:block"
          />
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="text-xl font-bold">Code</h1>
            <p className="text-gray-400">
              Any fool can write code that a computer can understand.
              <br /> Good programmers write code that humans can understand.
            </p>
          </div>

          <Image
            src="/images/gamestation.png"
            alt="Code - Gamestation"
            width={100}
            height={100}
            className="w-24 h-24 hidden lg:block"
          />
        </div>
      </section>
      <section className="w-screen h-full my-6">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700  hover:dark:border-violet-500 dark:hover:bg-gray-700 hover:cursor-pointer">
            <div className="flex flex-wrap justify-center align-middle items-center">
              <Image
                alt="testing"
                src="/images/hero_bg.png"
                width={500}
                height={500}
                className="bg-cover h-32 w-32 items-center justify-center content-center"
              />
              <h1 className="font-bold pt-2">Web Programming</h1>
            </div>
            <p className="line-clamp-2 text-sm">
              Learn how to create web pages, web applications, and other online
              content that can be displayed in a web browser
            </p>
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
              <h1 className="font-bold pt-2">Mobile Programming</h1>
            </div>
            <p className="line-clamp-2 text-sm">
              Process of making software for smartphones, tablets and digital
              assistants, most commonly for the Android and iOS operating
              systems.
            </p>
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
