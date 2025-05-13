import CharterSection from "@/components/about/charter-section";
import HeroBanner from "@/components/about/hero-banner";
import PartnershipsSection from "@/components/about/partnerships-section";
import { getAbout } from "@/lib/api";
import { MainAboutPage } from "@/lib/types";
import { Users, Award, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import WhoWeAre from "@/components/about/who-we-are";

export default async function AboutPage() {
  const aboutData = await getAbout("main");

  // Get data from the API
  const hasSections = "sections" in aboutData;
  const sections = hasSections ? (aboutData as MainAboutPage).sections : [];

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
    <main className="min-h-screen bg-[#FDFDF0]">
      <HeroBanner title={aboutData.title} content={aboutData.content} />
      <WhoWeAre
        hasIntroParagraphs={hasIntroParagraphs}
        introParagraphs={introParagraphs}
      />

      <div className="container mx-auto px-4 max-w-6xl py-16">
        {/* Our Impact Stats */}
        <div className="my-24 py-16 px-8 bg-gradient-to-r from-[#2F4858] to-[#548281] rounded-3xl shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Our Impact</h2>
            <p className="text-white/80 mt-2">Making a difference globally</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20">
              <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <span className="text-4xl font-bold text-white">5,000+</span>
              <p className="text-white/80 mt-2">Peace Activists</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20">
              <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <span className="text-4xl font-bold text-white">100+</span>
              <p className="text-white/80 mt-2">Political Parties</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20">
              <div className="bg-white/20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <span className="text-4xl font-bold text-white">100,000+</span>
              <p className="text-white/80 mt-2">Pledges Made</p>
            </div>
          </div>
        </div>

        {/* Mission & Philosophy Sections */}
        {hasSections && sections.length > 0 && (
          <div className="space-y-16 my-20">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "flex flex-col md:flex-row"
                    : "flex flex-col md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="md:w-1/2 space-y-4">
                  <h2 className="text-3xl font-bold text-[#2F4858]">
                    {section.heading}
                  </h2>
                  <div className="w-20 h-1 bg-[#548281]"></div>
                  <p className="text-lg text-gray-700 mt-4">
                    {section.content}
                  </p>
                </div>

                <div className="md:w-1/2 bg-white rounded-3xl p-8 shadow-lg">
                  {section.heading === "Our Charter" &&
                  hasCharterPoints &&
                  charterPoints.length > 0 ? (
                    <CharterSection charterPoints={charterPoints} />
                  ) : (
                    <div className="bg-[#D6E0B6]/20 p-8 rounded-2xl flex items-center justify-center min-h-[300px]">
                      <Image
                        src={`/images/section-${index + 1}.jpg`}
                        alt={section.heading}
                        width={400}
                        height={300}
                        className="rounded-xl shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Partnerships Section */}
        {hasPartnershipsText && partnershipsText && (
          <PartnershipsSection partnershipText={partnershipsText} />
        )}

        {/* Nonprofit Mission */}
        <div className="my-20 bg-white p-12 rounded-3xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2F4858]">
              Our <span className="text-[#548281]">Mission</span>
            </h2>
            <div className="w-20 h-1 bg-[#548281] mx-auto mt-4 mb-8"></div>
          </div>

          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-12">
            Our goal is to address the world's biggest challenges with a new
            approach where we bring the silent majority from around the world to
            pledge to visit and invest to create peace.
          </p>

          <div className="mt-8 text-center">
            <Button className="bg-[#548281] text-white hover:bg-[#2F4858] py-3 px-10 text-lg">
              Make a Pledge for Peace
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="bg-[#D6E0B6]/30 p-3 w-fit rounded-full mb-6">
              <MessageCircle className="h-6 w-6 text-[#548281]" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#2F4858]">
              Get in touch
            </h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Address:</span>
                <span>3393 NY-6, South New Berlin, NY 13843</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Phone:</span>
                <span>+1 862-666-1636</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-gray-700">Email:</span>
                <span>info@pledge4peace.org</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="bg-[#D6E0B6]/30 p-3 w-fit rounded-full mb-6">
              <Award className="h-6 w-6 text-[#548281]" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#2F4858]">
              Our Commitment
            </h3>
            <p className="text-lg text-gray-700">
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
