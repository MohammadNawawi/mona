import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();

  console.log(pathname);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4 justify-between">
      <div className="relative flex items-center ">
        <a href="/">
          <Image
            alt="Mona"
            src="/mona.svg"
            loading="lazy"
            width="20"
            height="20"
          />
        </a>
      </div>
      <div className="flex">
        <ul className="hidden items-center justify-center gap-6 md:flex">
          <Link href="/code">
            <li
              className={`font-dm text-sm font-medium hover:text-violet-500 ${
                pathname === "/code" ? "text-violet-500" : ""
              }`}
            >
              Code
            </li>
          </Link>
          <Link href="/series">
            <li
              className={`font-dm text-sm font-medium hover:text-violet-500 ${
                pathname === "/series" ? "text-violet-500" : ""
              }`}
            >
              Series
            </li>
          </Link>
          <Link href="/blog">
            <li
              className={`font-dm text-sm font-medium hover:text-violet-500 ${
                pathname === "/blog" ? "text-violet-500" : ""
              }`}
            >
              Blog
            </li>
          </Link>
        </ul>
        {/* <div className="flex-grow"></div> */}
        <div className="flex ml-2">
          <div className="hidden items-center justify-center gap-6 md:flex">
            <p className="font-dm text-sm font-medium text-slate-400 ml-4 select-none">
              |
            </p>
            <MagnifyingGlassIcon
              width={16}
              height={16}
              className="hover:text-violet-500 cursor-pointer stroke-2"
            />
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <MoonIcon
                  width={16}
                  height={16}
                  className="hover:text-violet-700 cursor-pointer stroke-2 text-violet-500"
                />
              ) : (
                <SunIcon
                  width={20}
                  height={20}
                  className="hover:text-violet-700 cursor-pointer stroke-2 text-violet-500"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center md:hidden gap-5">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4  hover:text-violet-500 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4 hover:text-violet-500 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-auto "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
