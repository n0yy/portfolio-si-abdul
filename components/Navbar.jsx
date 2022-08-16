import Link from "next/link";
import { useState } from "react";
import { ButtonPrimary } from "./Button";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="relative px-10 lg:px-28 py-4 flex items-center justify-between">
        <div className="absolute w-36 h-36 -top-10 -left-10 bg-primary rounded-full -z-50 blur-3xl"></div>
        <div>
          <h3 className="font-dyna text-2xl text-primary">DUL$</h3>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-10 text-black/50 font-josefin font-light font-xs">
            <li className="hover:text-black cursor-pointer">Beranda</li>
            <li className="hover:text-black cursor-pointer">
              Pendidikan & Pengalaman
            </li>
            <li className="hover:text-black cursor-pointer">Kontak</li>
          </ul>
        </div>
        <div className="-mt-1.5">
          <span className="hidden lg:block">
            <ButtonPrimary href="/" name="kontak" />
          </span>
          <span className="cursor-pointer" onClick={() => setToggleMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>
      </nav>

      {/* overlay */}
      <div
        className={`${
          toggleMenu ? "-translate-x-0" : "-translate-x-full"
        } absolute transition duration-200 w-full min-h-screen bg-white inset-0 z-10 p-7 flex justify-between`}
      >
        <ul className="space-y-3 text-gray-500 text-lg mt-10">
          <li
            className="hover:text-black cursor-pointer"
            onClick={() => setToggleMenu(false)}
          >
            <Link href="/">
              <a>Beranda</a>
            </Link>
          </li>
          <li
            className="hover:text-black cursor-pointer"
            onClick={() => setToggleMenu(false)}
          >
            <Link href="#exp">
              <a>Pendidikan & Pengalaman</a>
            </Link>
          </li>
          <li
            className="hover:text-black cursor-pointer"
            onClick={() => setToggleMenu(false)}
          >
            <Link href="#contact">
              <a>Kontak</a>
            </Link>
          </li>
        </ul>
        <span onClick={() => setToggleMenu(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </>
  );
}
