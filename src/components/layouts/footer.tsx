import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-50 ">
      <div className="mx-auto max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12justify-between grid lg:grid-cols-3 py-10">
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
        <div>
          <h1 className="select-none">Read Me</h1>
        </div>
        <div>
          <h1 className="select-none">Contact Us</h1>
        </div>
      </div>
    </footer>
  );
}
