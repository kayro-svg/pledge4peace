"use client";

import { useState } from "react";
import TabHeader, { tabs } from "./tab-header";
import PeaceAgreementContent from "../peace-agreement/peace-agreement-content";
import ConferenceTab from "../conference/conference-tab";
import DecisionMakersTab from "./decision-makers-tab";
import { PoliticalParty } from "../shared/types";

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("solution-proposals");

  // Political parties data
  const politicalParties: PoliticalParty[] = [
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
    <div className="bg-white rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full h-full flex flex-col">
      <TabHeader activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab content */}
      <div className="p-6 overflow-y-auto flex-1">
        {activeTab === "solution-proposals" && <PeaceAgreementContent />}
        {activeTab === "decision-makers" && (
          <DecisionMakersTab politicalParties={politicalParties} />
        )}
        {activeTab === "conference" && <ConferenceTab />}
      </div>
    </div>
  );
}
