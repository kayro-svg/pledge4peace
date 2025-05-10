// API utility functions for Pledge4Peace
// These functions will eventually connect to your backend API
import { AboutPage, MainAboutPage, TeamAboutPage, TeamMember } from "./types";

// Sample team members data
const teamMembers: TeamMember[] = [
  {
    name: "Peace Advocate",
    role: "Executive Director",
    bio: "Committed to fostering dialogue and understanding between communities in conflict zones.",
  },
  {
    name: "Community Organizer",
    role: "Outreach Coordinator",
    bio: "Works with local governments and organizations to implement peace initiatives and educational programs.",
  },
  {
    name: "Global Liaison",
    role: "International Relations",
    bio: "Builds partnerships with international entities to strengthen our global reach and impact.",
  },
];

/**
 * Mock data - will be replaced with real API/database calls
 */
const MOCK_DATA = {
  about: {
    main: {
      title: "About Us",
      content:
        "We take our freedoms for granted. For those under 50 years of age living in the United States and similar democratic nation states, it is easy to assume that the present political, social, and economic environment is how it has always been. Yet, humanity's history tells us just the opposite—relative peace is not the norm; war and strife are.",
      intro_paragraphs: [
        "As generations before us grappled with the horrors of two world wars and countless other regional battles, we too find ourselves at an inflection point. We are descending into another dark moment on this collective home we call Earth. Regional conflicts are tearing at the fabrics that we have worked so hard to create, and the voices of the majority, who we know desire peace, are drowned out by a small, but powerful minority who fan the flames.",
        "Pledge 4 Peace understands that peace is not a natural state. If we desire peace, we must work for it, create incentives to curb conflict, and produce meaningful initiatives that will naturally drive individuals to pursue peace as the only objective. The alternative is something unimaginable.",
        "We are a group of Peace Advocates. We have worked tirelessly in the last few weeks and launched Pledge4Peace.org with a sincere hope to halt further atrocities and resolve the 75+ year-old Israel and Palestine issue. If you like our idea of making peace through pledge, please like us on Facebook and pledge on this website. If you have any reservations or do not support the idea, we value your feedback to guide us in correcting our path and making improvements. Please give us 100% anonymous feedback by sending us an email at info@pledge4peace.org. This is your opportunity to contribute to the success and become a peacemaker, with the chance to reap great returns.",
      ],
      sections: [
        {
          heading: "Our Mission",
          content:
            "Our mission is simple yet profound: to foster a global community united in the pursuit of peace. Through meaningful dialogue, shared stories, and collective action, we strive to cultivate a culture of respect, empathy, and cooperation, transcending barriers of geography, ideology, and creed.",
        },
        {
          heading: "Our Philosophy",
          content:
            "Within these digital walls, every voice finds solace and significance. Whether a whispered plea for understanding or a resounding call to action, each pledge adds another layer to our shared vision of a world bathed in the gentle glow of harmony.",
        },
        {
          heading: "Our Charter",
          content:
            "We will collaborate with local governments, organizations, companies, and individuals who uphold equal rights and justice for all citizens, irrespective of their race, color, religion, ethnicity, or beliefs, to foster peace and tranquility in our targeted region. We will support these entities in providing the following to their constituents.",
        },
      ],
      charter_points: [
        "Ensure equal protection and rights for all residents of the region, regardless of their race, ethnicity, color, gender, religion, etc.",
        "Guarantee fundamental rights and freedoms to individuals, including freedom of speech, religion, and the press, the right to a fair trial, and protection against unreasonable searches and seizures, regardless of their race, ethnicity, color, gender, religion, etc.",
      ],
      team_members: teamMembers,
      partnerships_text:
        "We are actively seeking partnerships with the following organizations and companies that share our mission of promoting equality and justice for all, regardless of individuals' beliefs or backgrounds, including color, race, religion, ethnicity, etc. We are particularly interested in forging partnerships with investment companies, tourism companies, and other nonprofit organizations and groups.",
    } as MainAboutPage & {
      intro_paragraphs: string[];
      charter_points: string[];
      partnerships_text: string;
    },
  },
  // Add other data types here (projects, articles, etc.)
};

/**
 * Get about page data
 * @param slug - Identifier for which about page to retrieve
 *
 * Future implementation:
 * This will make a fetch request to your API:
 * return fetch(`${API_BASE_URL}/about/${slug}`).then(res => res.json())
 */
export async function getAbout(slug: string): Promise<AboutPage> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Return mock data based on slug
  return (
    MOCK_DATA.about[slug as keyof typeof MOCK_DATA.about] || {
      title: `About ${slug}`,
      content: "This page is under construction.",
    }
  );
}

/**
 * Get all possible about page slugs
 * For use with generateStaticParams if you add dynamic [slug] routes
 *
 * Future implementation:
 * return fetch(`${API_BASE_URL}/about/slugs`).then(res => res.json())
 */
export async function getAboutSlugs() {
  return Object.keys(MOCK_DATA.about).map((slug) => ({ slug }));
}
