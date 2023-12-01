import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header className="h-full min-w-fit bg-cover justify-center align-middle">
        <div className="flex flex-wrap justify-center align-middle items-center ">
          <Image
            className="opacity-20 dark:opacity-50"
            alt="hero background"
            width={800}
            height={800}
            src="/images/hero_bg.png"
            priority={true}
          />
          <div className="absolute flex flex-wrap justify-center mb-10">
            <div className="text-center text-black dark:text-white">
              <div className="tracking-normal ">
                <h1 className="lg:text-6xl text-3xl font-bold line-through ">
                  You’re so lucky.
                </h1>
                <h1 className="lg:text-6xl text-3xl font-bold">
                  Dam*, you worked hard.
                </h1>
                <p className="lg:text-lg text-sm font-medium dark:text-slate-50 mt-4">
                  “People don’t decide their futures,
                  <br className="lg:hidden md:hidden xl:hidden" /> they decides
                  their habits
                  <br />
                  and their habits decide their futures.”{" "}
                </p>
              </div>
              <button
                type="button"
                className="bg-violet-500 rounded-lg px-10 py-2 mt-6 transition-all duration-[2500ms] ease-out hover:bg-gradient-to-r from-indigo-500 to-violet-500"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Learn
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="w-screen dark:bg-neutral-950 my-20">
        <div className="flex flex-col text-center justify-center align-middle items-center mt-20">
          <h1 className="text-2xl font-bold">
            Today a reader, tomorrow a leader.
          </h1>
          <p className="text-gray-500 text-sm">
            Be curious. Read widely. Try new things. <br />
            What people call intelligence just boils down to curiosity.
          </p>
        </div>
        <div className="mx-auto max-w-6xl gap-4 px-6 transition-all duration-200 ease-in-out lg:px-12 justify-between grid lg:grid-cols-12 py-10">
          <div className="col-span-9">
            <article className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
              <div className="flex flex-wrap justify-center align-middle items-center">
                <Image
                  alt="testing"
                  src="/images/hero_bg.png"
                  width={500}
                  height={500}
                  className="bg-cover h-32 w-32 items-center justify-center content-center"
                />

                <div className="pt-2">
                  <h1 className="font-bold">Chilly</h1>
                  <p className="line-clamp-2 text-sm">
                    Amid the ever-evolving landscape, a solitary figure stands,
                    draped in a voluminous warm coat that whispers tales of
                    journeys taken.
                  </p>
                </div>
              </div>
            </article>
            <div className="grid lg:grid-cols-9 mt-3 gap-3">
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Roboto</h1>
                  <p className="line-clamp-2 text-sm">
                    In a world layered with history and technology, a figure is
                    caught in a dynamic leap, hovering momentarily in the void.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Waiting</h1>
                  <p className="line-clamp-2 text-sm">
                    A figure sits in stillness, their demeanor suggesting a
                    trance or stand-by mode.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Walking Contradiction</h1>
                  <p className="line-clamp-2 text-sm">
                    Sporting a blazer jacket and short hair, a figure exudes a
                    blend of formality and athleticism.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Experiments</h1>
                  <p className="line-clamp-2 text-sm">
                    Amidst the remnants of once-thriving cities, two teenagers
                    sit, engrossed in their devices.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Jumping</h1>
                  <p className="line-clamp-2 text-sm">
                    In a world where technology enhances human potential, a
                    figure soars, suspended in mid-air.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Fling</h1>
                  <p className="line-clamp-2 text-sm">
                    In a world shaped by transhumanism, a couple with bionic
                    enhancements gracefully walks hand in hand.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Whoa</h1>
                  <p className="line-clamp-2 text-sm">
                    In a realm of constant evolution, a short-haired individual
                    stands out, draped in a warm coat bearing the emblematic
                    &quot;New Decree&quot; logo—an ambiguous happy face.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Growth</h1>
                  <p className="line-clamp-2 text-sm">
                    In a world of advanced cognition, a woman immerses herself
                    in literature, her eyes aided by a cutting-edge learning and
                    vision device.
                  </p>
                </div>
              </article>
              <article className="block col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer">
                <div className="flex flex-wrap justify-center align-middle items-center">
                  <Image
                    alt="testing"
                    src="/images/hero_bg.png"
                    width={500}
                    height={500}
                    className="bg-cover h-32 w-32 items-center justify-center content-center"
                  />
                </div>
                <div className="pt-2">
                  <h1 className="font-bold">Mask</h1>
                  <p className="line-clamp-2 text-sm">
                    Amidst a futuristic landscape, a transhuman ambles with an
                    air of nonchalance.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 col-span-9 bg-white hover:bg-gray-100 rounded-lg shadow-lg border p-6 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div>
              <p>Ads here</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
