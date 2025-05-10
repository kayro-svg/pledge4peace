import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ConferenceCard from "./conference-card";

export default function RecentConferencesSection() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Recent conferences</h3>
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <ConferenceCard key={i} index={i} />
        ))}
      </div>
      <div className="mt-4 mb-4 flex justify-center items-center">
        <Link
          href="#"
          className="text-[#2F4858] group text-sm font-medium border border-[#2F4858] rounded-full hover:bg-[#2F4858] hover:text-white transition-colors px-4 py-2 flex items-center"
        >
          View all conferences{" "}
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
