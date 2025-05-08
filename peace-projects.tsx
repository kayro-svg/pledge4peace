import Image from "next/image"

export default function RecentProjects() {
  return (
    <div className="bg-[#fdfdf0] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#252a34] uppercase text-sm font-medium tracking-wider mb-4">RECENT PROJECTS</h2>
          <h1 className="text-[#252a34] text-4xl md:text-5xl font-serif mb-4">Take action today</h1>
          <p className="text-[#555555] text-lg max-w-3xl mx-auto">
            Here's how you can take action today, by voting and pledging in our recent projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pakistan Project Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-64 relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="River landscape in Pakistan"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#252a34] text-2xl font-serif mb-2">Strengthen Democracy In Pakistan</h3>
              <p className="text-[#555555] mb-6">
                Let's Strengthen The Democracy In Pakistan Through Travel And Tourism.
              </p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Raised</span>
                  <span>Goal</span>
                </div>
                <div className="h-2 w-full bg-[#d9d9d9] rounded-full mb-2">
                  <div className="h-2 bg-[#548281] rounded-full w-1/2"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>+5000 Peace Pledges</span>
                  <span>+10,000 Peace Pledges</span>
                </div>
              </div>

              <button className="bg-[#2f4858] text-white py-3 px-8 rounded-full font-medium hover:bg-opacity-90 transition-colors">
                Pledge Now
              </button>
            </div>
          </div>

          {/* Israel & Palestine Project Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-64 relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Peace handshake with flags"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#252a34] text-2xl font-serif mb-2">
                Create Permanent Peace & Strengthen Democracies In Israel & Palestine
              </h3>
              <p className="text-[#555555] mb-6">Stand For Peace And Democracy</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Raised</span>
                  <span>Goal</span>
                </div>
                <div className="h-2 w-full bg-[#d9d9d9] rounded-full mb-2">
                  <div className="h-2 bg-[#548281] rounded-full w-1/2"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>+5000 Peace Pledges</span>
                  <span>+10,000 Peace Pledges</span>
                </div>
              </div>

              <button className="bg-[#2f4858] text-white py-3 px-8 rounded-full font-medium hover:bg-opacity-90 transition-colors">
                Pledge Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
