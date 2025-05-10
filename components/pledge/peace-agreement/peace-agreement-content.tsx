"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  ThumbsDown,
  MessageSquare,
  Share2,
  Info,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { Party, Solution } from "../shared/types";
import SolutionActionsBar from "./solution-actions-bar";
import { InteractionProvider } from "../shared/interaction-context";

export default function PeaceAgreementContent() {
  const [parties, setParties] = useState<Party[]>([
    {
      id: "political-parties",
      name: "Pakistan Political Parties",
      partyNumber: 1,
      logo: "/placeholder.svg?height=80&width=80",
      solutions: [
        {
          id: "strengthen-democracy",
          title:
            "Strengthen Democracy & Accountability within Political Parties.",
          description:
            "Strengthen Democracy & Accountability within Political Parties.",
          rank: "Ranked #1",
          expanded: false,
          details: {
            intro:
              "Pakistan's political parties should strengthen democracy, transparency, and accountability within their organizations by following these guidelines:",
            guidelines: [
              {
                title: "Transparent Elections & Limit on Party Presidentship:",
                description:
                  "Hold regular, fair internal elections with independent oversight and establish a rule that leadership rotates among deserving members where a party president cannot hold the presidency for more than two terms of three years each. A party president cannot hold dual citizenship.",
              },
              {
                title: "Audited Financial Statements:",
                description:
                  "Promote transparency in all departments, especially finances, and conduct regular audits. All parties shall furnish audited financial statements, signed by the board, to the Election Commission of Pakistan and the public yearly.",
              },
              {
                title: "Declaration of Local and Overseas Assets:",
                description:
                  "Develop and enforce a code of ethics with clear disciplinary actions for all party officers and members. All political party officers shall furnish their personal financial statements available to the public including overseas properties and accounts.",
              },
            ],
          },
        },
        {
          id: "land-reforms",
          title:
            "Land Reforms, Eliminate Mafias, and Redistribute Resources in Pakistan.",
          description:
            "Land Reforms, Eliminate Mafias, and Redistribute Resources in Pakistan.",
          rank: "Ranked #2",
          expanded: false,
          details: {
            intro:
              "Pakistan needs comprehensive land reforms and resource redistribution to eliminate monopolies and create economic opportunities for all citizens:",
            guidelines: [
              {
                title: "Land Reform Commission:",
                description:
                  "Establish an independent commission to identify and reclaim illegally acquired land and redistribute it to landless farmers and indigenous communities.",
              },
              {
                title: "Break Monopolies:",
                description:
                  "Implement anti-monopoly laws to prevent concentration of resources in few hands and promote fair competition across all sectors of the economy.",
              },
              {
                title: "Resource Redistribution:",
                description:
                  "Create transparent mechanisms for equitable distribution of national resources across all provinces and regions of Pakistan.",
              },
            ],
          },
        },
        {
          id: "economy-charter",
          title:
            "A Charter of Economy Should Be Signed and Supported by All Political Parties, Establishment, and Institutions.",
          description:
            "A Charter of Economy Should Be Signed and Supported by All Political Parties, Establishment, and Institutions.",
          rank: "Ranked #3",
          expanded: false,
          details: {
            intro:
              "Pakistan needs a unified economic vision that transcends political differences and provides stability for long-term growth:",
            guidelines: [
              {
                title: "Collaborative Economic Framework:",
                description:
                  "Develop a 15-year economic framework with input from all political parties, military, judiciary, and civil society that remains consistent regardless of which party is in power.",
              },
              {
                title: "Tax Reform and Revenue Generation:",
                description:
                  "Implement progressive taxation, expand the tax base, and eliminate exemptions for powerful groups to ensure all citizens contribute fairly to national development.",
              },
              {
                title: "Investment Protection:",
                description:
                  "Create legal safeguards to protect domestic and foreign investments from political instability, ensuring economic policies remain consistent across government changes.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "establishment",
      name: "Pakistan Establishment (Army, Agencies)",
      partyNumber: 2,
      logo: "/placeholder.svg?height=80&width=80",
      solutions: [
        {
          id: "national-security-charter",
          title:
            'Establish a National Security Charter and the Rule of Two "Yes" and one "No" on National Security Matters of Pakistan.',
          description:
            'Establish a National Security Charter and the Rule of Two "Yes" and one "No" on National Security Matters of Pakistan.',
          rank: "Ranked #1",
          expanded: false,
          details: {
            intro:
              "Pakistan needs a more balanced approach to national security decisions that incorporates civilian oversight while respecting military expertise:",
            guidelines: [
              {
                title: "National Security Council Reform:",
                description:
                  "Restructure the National Security Council to include equal representation from military leadership, elected civilian government, and independent security experts.",
              },
              {
                title: "Two-Consensus Rule:",
                description:
                  "Implement a system where major security decisions require agreement from at least two of the three main stakeholders: military leadership, civilian government, and parliament.",
              },
              {
                title: "Transparency in Security Affairs:",
                description:
                  "Establish appropriate mechanisms for parliamentary oversight of security operations while protecting classified information necessary for national security.",
              },
            ],
          },
        },
      ],
    },
  ]);

  const toggleExpand = (partyId: string, solutionId: string) => {
    setParties(
      parties.map((party) => {
        if (party.id === partyId) {
          return {
            ...party,
            solutions: party.solutions.map((solution) =>
              solution.id === solutionId
                ? { ...solution, expanded: !solution.expanded }
                : solution
            ),
          };
        }
        return party;
      })
    );
  };

  return (
    <InteractionProvider>
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-gray-700">
            Pakistan's journey toward a strong democracy has faced many
            obstacles. However, the benefits of true democratic governance are
            clear to its citizens. Challenges include tensions between military
            and democratic institutions, religious and cultural extremism,
            strained international relations, and the influence of powerful
            elites. Despite these issues, there is a strong desire for a fair
            and functional system. Collaboration between political parties and
            the military is crucial for achieving peace and stable democracy.
          </p>
          <p className="text-gray-700 mt-4">
            The current political situation, with opposition leaders jailed and
            potential conflicts, highlights the need for a sustainable and fair
            system that benefits everyone. Pakistanis abroad are willing to
            support their country through investments and visits, provided there
            is stable and peaceful democratic governance.
          </p>
          <p className="text-gray-700 mt-4">
            If political parties, military institutions, and civic leaders
            unite, Pakistan can achieve the full benefits of authentic
            democracy, leading to prosperity and peace. Even if just 1% of the
            over 10 million Pakistanis abroad invested $100,000 each in their
            homeland, it could add $10 billion to Pakistan's economy, driving
            further development and stability. The following 'Peace and
            Strengthen Democracy Framework,' created by Pakistanis, offers a
            roadmap to political stability and national success.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">
            Vote Below on Solutions to "Strengthen Democracy in Pakistan".
          </h2>

          <div className="space-y-8">
            {parties.map((party) => (
              <div key={party.id} className="space-y-6">
                <div className="flex justify-between items-start">
                  {/* <div className="flex flex-row gap-2"> */}
                  {/* <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src={party.logo}
                      alt={party.name}
                      fill
                      className="object-cover"
                    />
                  </div> */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold">{party.name}</h3>
                      <BadgeCheck className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-sm text-gray-500">
                      Party #{party.partyNumber}
                    </div>
                  </div>
                  {/* </div> */}
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-white rounded-full"
                    >
                      <Plus className="h-3 w-3 mr-1" /> Add deliverable
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  {party.solutions.map((solution) => (
                    <div
                      key={solution.id}
                      className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
                    >
                      <div className="border-t p-6 border-gray-100 gap-3 flex flex-col">
                        <div className="flex flex-col gap-0">
                          <div className="flex items-start gap-2">
                            <div className="bg-gray-100 p-1 rounded">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-600"
                              >
                                <path d="M12 20V10" />
                                <path d="M18 20V4" />
                                <path d="M6 20v-6" />
                              </svg>
                            </div>
                            <div className="text-sm text-gray-600">
                              {solution.rank}
                            </div>
                          </div>

                          <h4 className="text-lg font-semibold">
                            {solution.title}
                          </h4>
                        </div>

                        <button
                          onClick={() => toggleExpand(party.id, solution.id)}
                          className="flex items-center text-sm text-gray-500 hover:text-gray-700"
                        >
                          {solution.expanded ? (
                            <>
                              Read less <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Read more <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </button>

                        {solution.expanded && solution.details && (
                          <div className="mt-4 space-y-4">
                            <p className="text-gray-700">
                              {solution.details.intro}
                            </p>

                            <div className="space-y-4">
                              {solution.details.guidelines.map(
                                (guideline, idx) => (
                                  <div key={idx}>
                                    <p className="font-semibold text-gray-800">
                                      {guideline.title}
                                    </p>
                                    <p className="text-gray-700">
                                      {guideline.description}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <SolutionActionsBar solutionId={solution.id} />
                      {/* <div className="border-t border-gray-200 grid grid-cols-3">
                      <div className="flex flex-row items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                        <button className="flex items-center justify-center py-3 hover:bg-gray-50 transition-colors">
                          <Heart className="h-5 w-5 text-gray-400" />
                        </button>
                        <p className="text-xs text-gray-500">500+</p>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-2 hover:bg-gray-50 transition-colors border-l border-gray-200">
                        <button className="flex items-center justify-center py-3 hover:bg-gray-50 transition-colors">
                          <ThumbsDown className="h-5 w-5 text-gray-400" />
                        </button>
                        <p className="text-xs text-gray-500">500+</p>
                      </div>
                      {/* <button className="flex items-center justify-center py-3 hover:bg-gray-50 transition-colors border-l border-gray-200">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </button> */}

                      {/* <div className="flex flex-row items-center justify-center gap-2 hover:bg-gray-50 transition-colors border-l border-gray-200">
                        <button className="flex items-center justify-center py-3 hover:bg-gray-50 transition-colors">
                          <Share2 className="h-5 w-5 text-gray-400" />
                        </button>
                        <p className="text-xs text-gray-500">500+</p>
                      </div> */}
                      {/* </div>  */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InteractionProvider>
  );
}
