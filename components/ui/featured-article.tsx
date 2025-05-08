import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface FeaturedArticleProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

export default function FeaturedArticle({
  image,
  date,
  title,
  description,
}: FeaturedArticleProps) {
  return (
    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-card group">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex p-8 text-white justify-end items-end">
        <div className="flex flex-col gap-4 w-full max-w-[50%]">
          <h4 className="text-2xl md:text-3xl font-bold mb-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            {title}
          </h4>
          <Link
            href="/article"
            className="inline-flex items-center text-white font-medium bg-brand-500 border border-white group-hover:bg-[#2F4858] group-hover:border-transparent group-hover:text-white transition-colors py-2 px-4 rounded-full group/btn w-fit"
          >
            See more{" "}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-end w-full max-w-[50%] align-bottom">
          <div className="flex items-center text-sm mb-3 text-gray-300 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
          <p className="text-gray-200 opacity-100 group-hover:opacity-0 transition-opacity duration-300 text-right">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
