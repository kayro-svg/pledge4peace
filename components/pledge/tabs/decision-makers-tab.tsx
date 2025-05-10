"use client";

import PoliticalPartyCard from "../shared/political-party-card";
import { PoliticalParty } from "../shared/types";

interface DecisionMakersTabProps {
  politicalParties: PoliticalParty[];
}

export default function DecisionMakersTab({
  politicalParties,
}: DecisionMakersTabProps) {
  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <p className="text-gray-700">
          Stand with leaders who have pledged their commitment to peace and
          democracy and who have promised to oppose war and aggression. These
          politicians are dedicated to upholding crucial peace agreement created
          by you and now need your support to make a difference. Your pledge
          makes a powerful impact. By backing candidates who advocate for peace,
          you're amplifying the call for a more harmonious world. Every pledge
          strengthens the movement and sends a clear message: Peace and
          democracy are our top priorities and no to wars and aggressions.
        </p>
        <p className="text-gray-700 mt-4">
          When you pledge through our platform, your support reaches the
          candidates directly. They receive an email with your message and
          pledge amount, motivating them to champion the peace agreements we all
          believe in.
        </p>
        <p className="text-gray-700 mt-4">
          Together, we can drive meaningful change. More supporters mean greater
          influence for peace and democracy. Pledge your support today and be a
          part of the solution!
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
  );
}
