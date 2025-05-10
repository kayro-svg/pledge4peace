import { TeamMember } from "@/lib/types";

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-blue-600 text-center mb-4">{member.role}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
