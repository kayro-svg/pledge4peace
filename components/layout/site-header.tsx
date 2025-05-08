import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b sticky top-0 bg-background backdrop-blur-sm z-50 shadow-sm">
      <div className="flex items-center">
        <Image
          src="/p2p_footer_logo.png"
          alt="Pledge4Peace.org"
          width={200}
          height={40}
          className="h-10 w-auto transition-all duration-300 hover:opacity-80"
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
        <Link
          href="/contact"
          className="text-lg font-medium text-[#2F4858] hover:text-[#698D8B] transition-colors active:text-brand-500"
        >
          Contact
        </Link>
      </nav>
      <Button asChild variant="default">
        <Link href="/donate" className="tracking-widest font-normal">
          LOGIN
        </Link>
      </Button>
    </header>
  );
}
