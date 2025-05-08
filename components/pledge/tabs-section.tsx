"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import PoliticalPartyCard from "./political-party-card";

const tabs = [
  { id: "peace-agreement", label: "Create peace agreement" },
  { id: "decision-makers", label: "Support decision makers" },
  { id: "conference", label: "Upcoming conference" },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("decision-makers");

  // Political parties data
  const politicalParties = [
    {
      id: "pti-sic",
      name: "PTI+SIC",
      subtitle: "PAKISTAN TEHREEK-E-INFAF",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "Pakistan Tehreek-e-Insaf (PTI), under the leadership of Imran Khan, has advocated for a democratic approach focused on anti-corruption, transparency, and social justice. PTI emphasizes the importance of strengthening democratic institutions and implementing governance reforms to combat corruption and ensure accountability.",
      antiPeace: 15,
      proPeace: 85,
    },
    {
      id: "nawaz-sharif",
      name: "NAWAZ SHARIF",
      subtitle: "PAKISTAN MUSLIM LEAGUE",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "The Pakistan Muslim League (PML), particularly under the leadership of various factions like PML-N, has historically advocated for a pragmatic approach to peace and democracy in Pakistan. The party emphasizes the importance of maintaining a stable and democratic governance structure while upholding the rule of law.",
      antiPeace: 35,
      proPeace: 65,
    },
    {
      id: "ppp",
      name: "PAKISTAN PEOPLES",
      subtitle: "PARTY PARLIAMENTARIANS",
      logo: "/placeholder.svg?height=80&width=80",
      description:
        "The Pakistan People's Party (PPP), founded by Zulfikar Ali Bhutto and currently led by his family, has historically championed a populist approach to peace and democracy, rooted in social justice, economic equality, and the empowerment of marginalized communities. PPP has consistently advocated for a robust democratic system.",
      antiPeace: 25,
      proPeace: 75,
    },
  ];

  return (
    <div className="bg-[#fffef5] rounded-xl border border-gray-200">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "px-6 py-4 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "border-b-2 border-brand-500 text-brand-700"
                : "text-gray-600 hover:text-gray-900"
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === "decision-makers" && (
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-gray-700">
                Stand with leaders who have pledged their commitment to peace
                and democracy and who have promised to oppose war and
                aggression. These politicians are dedicated to upholding crucial
                peace agreement created by you and now need your support to make
                a difference. Your pledge makes a powerful impact. By backing
                candidates who advocate for peace, you're amplifying the call
                for a more harmonious world. Every pledge strengthens the
                movement and sends a clear message: Peace and democracy are our
                top priorities and no to wars and aggressions.
              </p>
              <p className="text-gray-700 mt-4">
                When you pledge through our platform, your support reaches the
                candidates directly. They receive an email with your message and
                pledge amount, motivating them to champion the peace agreements
                we all believe in.
              </p>
              <p className="text-gray-700 mt-4">
                Together, we can drive meaningful change. More supporters mean
                greater influence for peace and democracy. Pledge your support
                today and be a part of the solution!
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">
                Support and rate the decision makers
              </h3>
              <div className="space-y-6">
                {politicalParties.map((party) => (
                  <PoliticalPartyCard key={party.id} party={party} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "peace-agreement" && (
          <div className="py-8 text-center text-gray-500">
            <p>
              Information about creating peace agreements will be available
              soon.
            </p>
          </div>
        )}

        {activeTab === "conference" && (
          <div className="py-8 text-center text-gray-500">
            <p>
              Information about upcoming conferences will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
