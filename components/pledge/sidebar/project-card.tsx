import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ProjectCardProps {
  index: number;
}

export default function ProjectCard({ index }: ProjectCardProps) {
  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{ height: 250, width: "100%" }}
    >
      <Image
        src="/placeholder.svg?height=125&width=300"
        alt="Israel & Palestine Peace"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-sm">
            Create Permanent Peace & Strengthen Democracies in Israel &
            Palestine
          </h4>
        </div>
        <div className="flex justify-end mt-2 group">
          <Link
            href="#"
            className="bg-white/30 text-white text-xs px-3 py-1 rounded-full flex items-center hover:bg-white/50 transition-colors"
          >
            See more{" "}
            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
