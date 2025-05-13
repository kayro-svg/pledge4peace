import { CheckCircle } from "lucide-react";

interface CharterSectionProps {
  charterPoints: string[];
}

export default function CharterSection({ charterPoints }: CharterSectionProps) {
  return (
    <div className="my-12 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-[#2F4858]">Our Charter</h2>

      <ul className="space-y-6">
        {charterPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-[#D6E0B6]/30 p-2 rounded-full mr-4 flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-[#548281]" />
            </div>
            <p className="text-gray-700 text-lg">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
