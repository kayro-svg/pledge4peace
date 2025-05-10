import Image from "next/image";

interface HeroBannerProps {
  title: string;
  content: string;
}

export default function HeroBanner({ title, content }: HeroBannerProps) {
  return (
    <div className="relative w-full">
      {/* Banner background */}
      <div className="bg-green-100 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
          {title}
        </h1>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          {content}
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src="/placeholder.svg"
            alt="Pledge4Peace Logo"
            width={100}
            height={100}
            className="rounded-full border-4 border-green-500"
          />
        </div>
      </div>
    </div>
  );
}
