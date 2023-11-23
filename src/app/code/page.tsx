import Image from "next/image";

export default function CodePage() {
  return (
    <main className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
      {/* <section className="w-screen mt-10 border-solid border-2 border-violet-500 rounded-lg"> */}
      <section className="w-screen lg:mt-10 bg-white dark:bg-black dark:shadow-violet-500 drop-shadow-lg  rounded-lg">
        <div className="p-10 flex justify-between">
          <Image
            src="/images/groceries.png"
            alt="Code - Groceries"
            width={100}
            height={100}
            className="w-24 h-24 hidden lg:block"
          />
          <div className="flex flex-col text-center items-center justify-center">
            <h1 className="text-xl font-bold ">Code</h1>
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
    </main>
  );
}
