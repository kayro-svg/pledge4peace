import AboutUsSection from "./about-us-section";
import OtherProjectsSection from "./other-projects-section";
import RecentConferencesSection from "./recent-conferences-section";

export default function SidebarSection() {
  return (
    <div className="space-y-8 bg-white rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-y-auto p-6 flex flex-col justify-between h-full">
      <AboutUsSection />
      <OtherProjectsSection />
      <RecentConferencesSection />
    </div>
  );
}
