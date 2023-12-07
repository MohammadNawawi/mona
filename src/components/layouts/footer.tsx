import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <footer className="w-full bg-neutral-50 dark:bg-black">
      <div className="mx-auto max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 justify-between grid lg:grid-cols-3 py-10">
        <div className="">
          <Image
            src="/mona.svg"
            alt="Mona logo"
            width={100}
            height={100}
            className="w-5 h-5"
          />
          <p className="mt-4 text-sm text-gray-500 dark:text-white">
            When you help someone, you help everyone.
          </p>
        </div>
        <div>
          <h1 className="select-none">Read Me</h1>
          <ul className="mt-3 text-sm text-gray-500 ">
            <Link href="/code" className="hover:text-violet-500 ">
              <li className="mb-1 text-">Code</li>
            </Link>
            <Link href="/serius" className="hover:text-violet-500">
              <li className="mb-1">Series</li>
            </Link>
            <Link
              href="/blog"
              className="hover:text-violet-500 transition-all duration-200 hover:ease-in-out"
            >
              <li className="mb-1">Blog</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="select-none">Contact Us</h1>
          <ul className="mt-3 text-sm text-gray-500">
            <Link href="" className="hover:text-violet-500">
              <li className="mb-1">Profile</li>
            </Link>
            <Link href="" className="hover:text-violet-500">
              <li className="mb-1">Contact</li>
            </Link>
            <Link href="" className="hover:text-violet-500">
              <li className="mb-1"></li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12">
        <p className="text-sm text-gray-500 dark:text-white border-t py-6 border-gray-300 dark:border-gray-700">
          Copyright © {year} - Mohammad Nawawi
        </p>
      </div>
    </footer>
  );
}
