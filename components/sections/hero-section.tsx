import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/pledge4peace_hero_video.mp4" type="video/mp4" />
      </video>

      {/* Gradiente oscuro sobre el video */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/100 via-black/25 to-transparent z-10"></div>

      {/* Contenido de texto alineado en la parte inferior */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-end pb-16">
        <div className="max-w-2xl animate-slideUp">
          <div className="inline-block px-4 py-1 mb-6 bg-brand-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-brand-500/30 text-white">
            Building Peace Together
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4 text-white">
            To Solve The World's Problems, One Pledge At A Time.
          </h1>
          <p className="text-xl md:text-2xl mt-4 mb-8 text-gray-200 max-w-xl">
            In The Heart Of Hope, Where Dreams Take Flight, Pledge4Peace Stands,
            A Beacon Bright
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              asChild
              size="lg"
              variant="default"
              className="bg-brand-500 hover:bg-brand-600 text-white group rounded-full text-md"
            >
              <Link href="/pledge" className="flex items-center">
                Pledge Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-md text-white border-white hover:bg-white/10"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
