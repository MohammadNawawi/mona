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
                <h1 className="text-6xl font-bold line-through">
                  You’re so lucky.
                </h1>
                <h1 className="text-6xl font-bold">Dam*, you worked hard.</h1>
              </div>
              <button
                type="button"
                className=""
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Get started
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
