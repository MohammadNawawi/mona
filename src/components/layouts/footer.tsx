import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4 justify-between bg-violet-300">
      <div className="grid lg:grid-cols-3 gap-8 py-10">
        <div className="">
          <Image
            src="/mona.svg"
            alt="Mona logo"
            width={100}
            height={100}
            className="w-5 h-5"
          />
          <p className="mt-4 text-sm text-gray-500">
            When you help someone, you help everyone.
          </p>
        </div>
        <h1 className="select-none">Read Me</h1>
        <h1 className="select-none">Contact Us</h1>
      </div>
      {/* <div className="flex justify-between">
        <div className="basis w-3/12">
          <Image
            src="/mona.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-5 h-5"
          />
          <p className="mt-1 text-sm text-gray-500">
            When you help someone, you help everyone.
          </p>
        </div>
        <h1>Ini footer</h1>
        <h1>Ini footer</h1>
      </div> */}
    </footer>
  );
}
