import Image from "next/image";

interface WhoWeAreProps {
  hasIntroParagraphs: boolean;
  introParagraphs: string[];
}

export default function WhoWeAre({
  hasIntroParagraphs,
  introParagraphs,
}: WhoWeAreProps) {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F4858]">
          Who <span className="text-[#548281]">We Are</span>
        </h2>
      </div>
      {/* Intro Paragraphs */}
      {hasIntroParagraphs && introParagraphs.length > 0 && (
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 p-5">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-us.jpg"
                alt="About Pledge4Peace"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            {introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
