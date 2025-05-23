"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SiteHeader() {
  const router = useRouter();

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b sticky top-0 bg-background backdrop-blur-sm z-50 shadow-sm">
      <div className="flex items-center cursor-pointer">
        <Image
          src="/p2p_footer_logo.png"
          alt="Pledge4Peace.org"
          width={200}
          height={40}
          className="h-10 w-auto"
          onClick={() => router.push("/")}
        />
      </div>
      <nav className="hidden md:flex items-center space-x-16">
        <Link
          href="/"
          className="text-lg font-medium text-[#2F4858] hover:text-[#698D8B] transition-colors active:text-brand-500"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-lg font-medium text-[#2F4858] hover:text-[#698D8B] transition-colors active:text-brand-500"
        >
          About
        </Link>
        <Link
          href="/volunteer"
          className="text-lg font-medium text-[#2F4858] hover:text-[#698D8B] transition-colors active:text-brand-500"
        >
          Volunteer
        </Link>
        {/* TODO: Add partnerships page when the information is available */}
        {/* <Link
          href="/partnerships"
          className="text-lg font-medium text-[#2F4858] hover:text-[#698D8B] transition-colors active:text-brand-500"
        >
          Partnerships
        </Link> */}

        <Link
          href="/contact"
          className="text-lg font-medium text-[#2F4858] hover:text-[#698D8B] transition-colors active:text-brand-500"
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="text-lg font-medium text-[#2F4858] hover:text-[#698D8B] transition-colors active:text-brand-500"
        >
          Blog
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link
          href="/donate"
          className="tracking-wider inline-flex items-center w-fit justify-center rounded-full border border-[#548281] px-5 py-2 text-sm font-bold text-white bg-[#548281] hover:text-white shadow hover:bg-[#2f4858] transition-colors duration-300 ease-in-out focus:outline-none"
        >
          DONATE
        </Link>
        <Link
          href="/login"
          className="tracking-wider inline-flex items-center w-fit justify-center rounded-full border border-[#548281] px-5 py-2 text-sm font-bold text-[#548281] hover:text-white shadow hover:bg-[#2f4858] transition-colors duration-300 ease-in-out focus:outline-none"
        >
          LOGIN
        </Link>
      </div>
    </header>
  );
}
