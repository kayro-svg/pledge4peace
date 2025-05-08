import CampaignCard from "@/components/ui/CampaingCard";

export default function RecentProjects() {
  const campaigns = [
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Strengthen Democracy In Pakistan",
      description:
        "Let's Strengthen The Democracy In Pakistan Through Travel And Tourism.",
      link: "/pledge/strengthen-democracy-in-pakistan",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      title:
        "Create Permanent Peace & Strengthen Democracies In Israel & Palestine",
      description: "Stand For Peace And Democracy",
      link: "/pledge/create-permanent-peace-strengthen-democracies-in-israel-and-palestine",
    },
  ];

  return (
    <div className="bg-[#fdfdf0] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2F4858] uppercase text-sm font-medium tracking-wider mb-4 border-b-2 w-fit mx-auto border-[#2F4858]">
            RECENT CAMPAIGNS
          </h2>
          <h1 className="text-[#2F4858] text-4xl md:text-5xl font-bold mb-4">
            Take action today
          </h1>
          <p className="text-[#2F4858] text-lg max-w-3xl mx-auto">
            Here's how you can take action today, by voting and pledging in our
            recent campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              image={campaign.image}
              title={campaign.title}
              description={campaign.description}
              link={campaign.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
