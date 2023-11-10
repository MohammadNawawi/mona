import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
    // <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      {/* <section classNameName="w-screen h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed"></section> */}
      <header className="h-full min-w-fit bg-cover justify-center align-middle">
        {/* <div classNameName="absolute"> */}
        <div className="flex flex-wrap justify-center align-middle items-center ">
          <Image
            // classNameName="h-full min-w-fit bg-center object-center "
            className="opacity-50"
            alt="hero background"
            width={800}
            height={800}
            src="/images/hero_bg.png"
          />
          <div className="absolute flex flex-wrap justify-center mb-10">
            <div className="text-center text-white ">
              <div className="tracking-normal ">
                <h1 className="lg:text-6xl text-3xl font-bold line-through">
                  You’re so lucky.
                </h1>
                <h1 className="lg:text-6xl text-3xl font-bold">
                  Dam*, you worked hard.
                </h1>
                {/* <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
                  Hello World
                </h1> */}
                <p className="lg:text-lg text-sm font-medium dark:text-slate-50 mt-4">
                  “People don’t decide their futures, they decides their habits
                  <br />
                  and their habits decide their futures.”{" "}
                </p>
              </div>
              <button
                type="button"
                className="bg-violet-500 rounded-lg px-10 py-2 mt-6"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Learn
              </button>
            </div>
          </div>
        </div>

        {/* </div> */}
      </header>
      <section className="w-screen h-screen bg-red-600"></section>
    </main>
  );
}
