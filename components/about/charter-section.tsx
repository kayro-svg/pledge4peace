import { CheckCircle } from "lucide-react";

interface CharterSectionProps {
  charterPoints: string[];
}

export default function CharterSection({ charterPoints }: CharterSectionProps) {
  return (
    <div className="my-12 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Our Commitments</h2>

      <ul className="space-y-4">
        {charterPoints.map((point, index) => (
          <li key={index} className="flex">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
            <p className="text-gray-700">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
