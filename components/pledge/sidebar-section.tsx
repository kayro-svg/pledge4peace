import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SidebarSection() {
  return (
    <div className="space-y-8">
      {/* About us */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">About us</h3>
        <div className="flex items-center gap-3 mb-4">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image src="/placeholder.svg?height=40&width=40" alt="Pledge4Peace" fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium text-sm">Pledge4Peace</h4>
            <p className="text-xs text-gray-600">A global community united in the pursuit of peace.</p>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          We are a group of Peace Advocates. We have worked tirelessly in the last few weeks and launched Pledge4Peace
          with a dream hope to halt further atrocities and resolve the 75+ year-old Israel and Palestine issue.
        </p>
      </div>

      {/* Other projects */}
      <div>
        <h3 className="text-lg font-bold mb-4">Other projects</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=150&width=300"
                alt="Israel & Palestine Peace"
                width={300}
                height={150}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-sm">
                  Create Permanent Peace & Strengthen Democracies in Israel & Palestine
                </h4>
                <div className="flex justify-end mt-2">
                  <Link
                    href="#"
                    className="bg-black/30 text-white text-xs px-3 py-1 rounded-full flex items-center hover:bg-black/50 transition-colors"
                  >
                    See more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="#" className="text-brand-500 text-sm font-medium flex items-center hover:underline">
            View all projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Recent conferences */}
      <div>
        <h3 className="text-lg font-bold mb-4">Recent conferences</h3>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=150&width=300"
                alt="Peace conference"
                width={300}
                height={150}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-sm">
                  Peace conference for Israel & Palestine: a free online conference
                </h4>
                <div className="flex justify-end mt-2">
                  <Link
                    href="#"
                    className="bg-black/30 text-white text-xs px-3 py-1 rounded-full flex items-center hover:bg-black/50 transition-colors"
                  >
                    See more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="#" className="text-brand-500 text-sm font-medium flex items-center hover:underline">
            View all conferences <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
