import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();
  const [modal, setModal] = useState(false);
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
          <MagnifyingGlassIcon
            width={16}
            height={16}
            className="hover:text-violet-500 cursor-pointer stroke-2"
          />
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
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
        <button
          type="button"
          onClick={() => setModal(true)}
          // data-modal-target="popup-modal"
          // data-modal-toggle="popup-modal"
          // className="block"
        >
          <Bars3BottomRightIcon
            width={20}
            height={20}
            className="hover:text-violet-700 cursor-pointer stroke-2"
          />
        </button>
        {modal ? (
          <>
            <div
              id="popup-modal"
              className="overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full overflow-x-scroll "
            >
              <div className="relative w-full">
                <div className="relative bg-white shadow dark:bg-black h-screen">
                  <div className="flex justify-between">
                    <h1 className="top-3 mt-3 w-8 h-8 ml-6">Menu</h1>
                    <button
                      type="button"
                      className="absolute top-3 end-4 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  dark:hover:text-white "
                      data-modal-hide="popup-modal"
                      onClick={() => setModal(false)}
                    >
                      <XMarkIcon
                        width={20}
                        height={20}
                        className="hover:text-violet-700 cursor-pointer stroke-2"
                      />
                    </button>
                  </div>

                  <div className="p-4 md:p-5 ml-2">
                    <ul>
                      <Link href="/code">
                        <li className="mb-2" onClick={() => setModal(false)}>
                          Code
                        </li>
                      </Link>
                      <Link href="/series">
                        <li className="mb-2" onClick={() => setModal(false)}>
                          Series
                        </li>
                      </Link>
                      <Link href="/blog">
                        <li className="mb-2" onClick={() => setModal(false)}>
                          Blog
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {/* <div
          id="popup-modal"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
