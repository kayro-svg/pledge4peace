import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./project-card";

export default function OtherProjectsSection() {
  return (
    <div>
      <div className="mt-4 mb-4 flex flex-col justify-between items-left">
        <h3 className="text-lg font-bold text-[#2F4858]">Other campaigns</h3>
      </div>
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <ProjectCard key={i} index={i} />
        ))}
      </div>
      <div className="mt-4 mb-4 flex justify-center items-center">
        <Link
          href="#"
          className="text-[#2F4858] group text-sm font-medium border border-[#2F4858] rounded-full hover:bg-[#2F4858] hover:text-white transition-colors px-4 py-2 flex items-center"
        >
          View all campaigns{" "}
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
