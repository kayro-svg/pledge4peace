"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ConferenceTab() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold">
        Path to Peace: Israel & Palestine Virtual Conference.
      </h2>

      {/* Main conference banner with registration */}
      <div className="relative rounded-xl overflow-hidden">
        <div className="w-full h-[500px] relative">
          <Image
            src="/placeholder.svg?height=400&width=800&text=Jerusalem+Landscape"
            alt="Conference banner showing Jerusalem landscape with Israeli and Palestinian flags"
            fill
            className="object-cover brightness-[0.8]"
          />

          {/* Registration popup overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[350px] z-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Reserve A Free Spot Today!
              </h3>
              <p className="text-gray-700 mb-6">
                Join us online on October 24, 2024, at 9:00 AM EDT.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input placeholder="Email address" type="email" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input placeholder="Complete name" />
                </div>

                <Button className="w-full bg-[#3c6665] hover:bg-[#2a4847]">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the conference section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">About the conference</h3>
        <p className="text-gray-700 mb-4">
          Join us for a groundbreaking online event dedicated to fostering
          lasting peace in one of the world's most complex regions. This
          conference brings together renowned experts, passionate activists, and
          dedicated peacemakers to explore innovative solutions and strategies
          for ending the Israel-Palestine conflict. Through open dialogue and
          collaborative efforts, we aim to build bridges of understanding and
          create a roadmap to a peaceful coexistence. This is your chance to be
          part of a historic conversation and contribute to shaping a brighter
          future for both Israel and Palestine.
        </p>
      </div>

      {/* Image gallery */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl overflow-hidden h-[200px] relative">
          <Image
            src="/placeholder.svg?height=200&width=400&text=Peace+Activists"
            alt="Peace activists with Israeli and Palestinian flags"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden h-[200px] relative">
          <Image
            src="/placeholder.svg?height=200&width=400&text=Protest"
            alt="Protesters with flags advocating for peace"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden h-[200px] relative">
          <Image
            src="/placeholder.svg?height=200&width=400&text=Gaza+Destruction"
            alt="Children amid destruction in Gaza"
            fill
            className="object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden h-[200px] relative">
          <Image
            src="/placeholder.svg?height=200&width=400&text=Palestinians+In+Crisis"
            alt="Palestinian families amid destruction"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Call to action */}
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h3 className="text-2xl font-bold uppercase mb-4">
          Let's make a change together
        </h3>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Sign up today! And we'll send you the agenda and details on how to
          access the conference.
        </p>
        <Button className="bg-[#3c6665] hover:bg-[#2a4847] px-8">
          Register
        </Button>
      </div>
    </div>
  );
}
