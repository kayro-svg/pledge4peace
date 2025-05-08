import Image from "next/image"
import { MessageSquare, ArrowUp, FileText } from "lucide-react"

interface PoliticalParty {
  id: string
  name: string
  subtitle: string
  logo: string
  description: string
  antiPeace: number
  proPeace: number
}

interface PoliticalPartyCardProps {
  party: PoliticalParty
}

export default function PoliticalPartyCard({ party }: PoliticalPartyCardProps) {
  return (
    <div className="bg-[#f8f9f0] rounded-lg overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden bg-white border border-gray-200 flex-shrink-0">
            <Image src={party.logo || "/placeholder.svg"} alt={party.name} fill className="object-contain p-1" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800">{party.name}</h4>
            <p className="text-sm text-gray-600 uppercase tracking-wider">{party.subtitle}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-700">{party.description}</p>

        {/* Peace rating */}
        <div className="mt-6 mb-4">
          <div className="flex justify-between mb-1">
            <div className="flex items-center text-red-500">
              <span className="text-xs font-medium">Anti-Peace</span>
              <span className="ml-1 text-xs">{party.antiPeace}%</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="text-xs font-medium">Pro-Peace</span>
              <span className="ml-1 text-xs">{party.proPeace}%</span>
            </div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="flex h-full">
              <div className="bg-red-500 h-full" style={{ width: `${party.antiPeace}%` }}></div>
              <div className="bg-green-500 h-full" style={{ width: `${party.proPeace}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-3 border-t border-gray-200">
        <button className="flex flex-col items-center justify-center py-3 hover:bg-gray-100 transition-colors">
          <MessageSquare className="h-5 w-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">Comments</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 hover:bg-gray-100 transition-colors border-l border-r border-gray-200">
          <ArrowUp className="h-5 w-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">Vote</span>
        </button>
        <button className="flex flex-col items-center justify-center py-3 hover:bg-gray-100 transition-colors">
          <FileText className="h-5 w-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">Learn Facts</span>
        </button>
      </div>
    </div>
  )
}
