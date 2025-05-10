"use client";

import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import PledgeForm from "@/components/pledge/shared/pledge-form";
import TabsSection from "@/components/pledge/tabs/tabs-section";
import SidebarSection from "@/components/pledge/sidebar/sidebar-section";
import { ArrowLeft, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState } from "react";
import PledgesProgressBar from "@/components/ui/pledges-progress-bar";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt: string;
}

interface ProjectData {
  slug: string;
  title: string;
  description: string;
  media: MediaItem[];
  colors: { name: string; hex: string }[];
  raisedPledges: number;
  goalPledges: number;
  commitmentText: string;
}

interface MainContentSectionProps {
  projectData: ProjectData;
}

function MainContentSection({ projectData }: MainContentSectionProps) {
  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="p-8 flex flex-row gap-8">
          <MediaGallery
            media={projectData.media}
            overlayTitle={projectData.title}
            overlaySubtitle={projectData.description}
          />

          <div className="w-4/6 flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-gray-500">pledge4peace.org</div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {projectData.title}
              </h1>
            </div>

            <div>
              <p className="text-gray-700">{projectData.description}</p>
            </div>
            <PledgesProgressBar
              currentValue={projectData.raisedPledges}
              goalValue={projectData.goalPledges}
            />
            <PledgeForm commitmentText="I commit my vote, knowing that the most supported solutions and parties will lead meaningful change." />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContentTabsProps {
  mainContentWidth: string;
  sidebarWidth: string;
}

function ContentTabs({ mainContentWidth, sidebarWidth }: ContentTabsProps) {
  return (
    <div className="flex flex-row gap-8 h-[calc(100vh+20rem)]">
      <div className="flex flex-col h-full" style={{ width: mainContentWidth }}>
        <TabsSection />
      </div>
      <div className="flex flex-col h-full" style={{ width: sidebarWidth }}>
        <SidebarSection />
      </div>
    </div>
  );
}

interface ProductDetailContentProps {
  slug: string;
}

export function ProductDetailContent({ slug }: ProductDetailContentProps) {
  // In a real application, you would fetch project data based on the slug
  // For now, we'll use static data matching the screenshot
  const projectData = {
    slug,
    title: "Strengthen democracy in Pakistan",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    media: [
      {
        type: "image" as const,
        src: "/placeholder.svg?height=500&width=800&text=Modern+Green+Chair",
        alt: "Modern green accent chair with wooden side table and plant",
      },
      {
        type: "image" as const,
        src: "/placeholder.svg?height=500&width=800&text=Green+Chair",
        alt: "Green accent chair front view",
      },
      {
        type: "video" as const,
        src: "/pledge4peace_hero_video.mp4",
        alt: "Chair product showcase video",
      },
      {
        type: "image" as const,
        src: "/placeholder.svg?height=500&width=800&text=Grey+Chair",
        alt: "Grey variant of accent chair",
      },
      {
        type: "image" as const,
        src: "/placeholder.svg?height=500&width=800&text=White+Chair",
        alt: "White variant of accent chair",
      },
    ],
    colors: [
      { name: "Sage Green", hex: "#8DA790" },
      { name: "Soft Grey", hex: "#AEADAD" },
      { name: "Ivory White", hex: "#F5F5F0" },
    ],
    raisedPledges: 200,
    goalPledges: 1000,
    commitmentText:
      "I commit my vote for peace and will support political parties & political solutions based on dialogue.",
  };

  return (
    <main className="min-h-screen bg-[#fffef5]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-brand-500 hover:underline flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <MainContentSection projectData={projectData} />
            <ContentTabs mainContentWidth="70%" sidebarWidth="30%" />
          </div>
        </div>
      </div>
    </main>
  );
}

function MediaGallery({
  media,
  overlayTitle,
  overlaySubtitle,
}: {
  media: Array<MediaItem>;
  overlayTitle: string;
  overlaySubtitle: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectMedia = (index: number) => {
    setCurrentIndex(index);
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="w-full">
      {/* Main display */}
      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-gray-100">
        {/* Media display */}
        {currentMedia.type === "image" ? (
          <Image
            src={currentMedia.src}
            alt={currentMedia.alt}
            fill
            className="object-cover"
          />
        ) : (
          <video
            src={currentMedia.src}
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted={false}
            loop
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-auto overflow-x-auto p-1 items-center justify-between">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => selectMedia(index)}
            className={`relative flex-shrink-0 rounded-lg overflow-hidden w-32 h-24 transition-all ${
              index === currentIndex ? "ring-2 ring-[#548281]" : "opacity-80"
            }`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            ) : (
              <div className="relative w-full h-full bg-gray-200">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
