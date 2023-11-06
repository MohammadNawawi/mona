import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4 justify-between">
      <div className="relative flex items-center ">
        <a href="/">
          <Image
            alt=""
            src="https://www.svgrepo.com/show/499831/target.svg"
            loading="lazy"
            width="32"
            height="32"
          />
        </a>
      </div>
      <div className="flex">
        <ul className="hidden items-center justify-center gap-6 md:flex">
          <Link href="#">
            <li className="font-dm text-sm font-medium text-slate-700 hover:text-violet-500">
              Code
            </li>
          </Link>
          <Link href="#">
            <li className="font-dm text-sm font-medium text-slate-700 hover:text-violet-500">
              Series
            </li>
          </Link>
          <Link href="#">
            <li className="font-dm text-sm font-medium text-slate-700 hover:text-violet-500">
              Blog
            </li>
          </Link>
        </ul>
        {/* <div className="flex-grow"></div> */}
        <div className="flex">
          <div className="hidden items-center justify-center gap-6 md:flex">
            <a
              href="#"
              className="font-dm text-sm font-medium text-slate-700 ml-4"
            >
              |
            </a>
            <a
              href="#"
              className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
              Sign up for free
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:hidden">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-auto text-slate-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
