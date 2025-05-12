import { getAbout } from "@/lib/api";
import { AboutSection, MainAboutPage, TeamMember } from "@/lib/types";
import HeroBanner from "@/components/about/hero-banner";
import MissionSection from "@/components/about/mission-section";
import ValuesSection from "@/components/about/values-section";
import TeamSection from "@/components/about/team-section";
import CharterSection from "@/components/about/charter-section";
import PartnershipsSection from "@/components/about/partnerships-section";

export default async function AboutPage() {
  const aboutData = await getAbout("main");

  // Get data from the API
  const hasSections = "sections" in aboutData;
  const sections = hasSections ? (aboutData as MainAboutPage).sections : [];

  const hasTeamMembers = "team_members" in aboutData;
  const teamMembers = hasTeamMembers
    ? (aboutData as MainAboutPage & { team_members: TeamMember[] }).team_members
    : [];

  const hasIntroParagraphs = "intro_paragraphs" in aboutData;
  const introParagraphs = hasIntroParagraphs
    ? (aboutData as MainAboutPage & { intro_paragraphs: string[] })
        .intro_paragraphs
    : [];

  const hasCharterPoints = "charter_points" in aboutData;
  const charterPoints = hasCharterPoints
    ? (aboutData as MainAboutPage & { charter_points: string[] }).charter_points
    : [];

  const hasPartnershipsText = "partnerships_text" in aboutData;
  const partnershipsText = hasPartnershipsText
    ? (aboutData as MainAboutPage & { partnerships_text: string })
        .partnerships_text
    : "";

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroBanner title={aboutData.title} content={aboutData.content} />

      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Intro Paragraphs */}
        {hasIntroParagraphs && introParagraphs.length > 0 && (
          <div className="my-8 prose max-w-none">
            {introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <div className="my-16 flex justify-center">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Pledge4Peace Symbol"
            className="h-32 w-32"
          />
        </div>

        {/* Mission & Philosophy Sections */}
        {hasSections && sections.length > 0 && (
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-700">{section.content}</p>

                {section.heading === "Our Charter" &&
                  hasCharterPoints &&
                  charterPoints.length > 0 && (
                    <CharterSection charterPoints={charterPoints} />
                  )}
              </div>
            ))}
          </div>
        )}

        {/* Team Section */}
        {/* {hasTeamMembers && teamMembers.length > 0 && (
          <TeamSection teamMembers={teamMembers} />
        )} */}

        {/* Partnerships Section */}
        {hasPartnershipsText && partnershipsText && (
          <PartnershipsSection partnershipText={partnershipsText} />
        )}

        {/* Nonprofit Mission */}
        <div className="my-16 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            NonProfit Aiming to Solve World's Biggest Problems Through Pledge
          </h2>
          <p className="text-lg mb-4">
            Our goal is to address the world's biggest challenges with a new
            approach where we bring the silent majority from around the world to
            pledge to visit and invest to create peace.
          </p>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="bg-[#2f4858] text-white py-3 px-8 rounded-full font-medium hover:bg-[#2f4858] transition-colors inline-block"
            >
              Make a Pledge for Peace
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in touch</h3>
            <p className="mb-2">3393 NY-6, South New Berlin, NY 13843</p>
            <p className="mb-2">Phone: +1 862-666-1636</p>
            <p className="mb-2">Email: info@pledge4peace.org</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
            <p className="text-gray-700">
              Pledge4Peace.org advocates for peace, democracy, and equal rights
              for all, regardless of religion, color, ethnicity, gender etc. Our
              mission is to strengthen global democracy by inspiring the
              peace-loving silent majority. Operated entirely by peace
              volunteers, we do not accept donations for ourselves but encourage
              pledges and contributions to political parties ranked high on the
              Peace and Democracy Index.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
