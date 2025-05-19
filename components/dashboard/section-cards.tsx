import {
  TrendingDownIcon,
  TrendingUpIcon,
  HandshakeIcon,
  VoteIcon,
  HeartPlusIcon,
  BarChart3Icon,
  UsersIcon,
  ActivityIcon,
  PercentIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-6">
      <Card className="flex items-center p-6 bg-white w-full rounded-2xl">
        <div className="flex-shrink-0 mr-6 bg-slate-100 p-4 rounded-full">
          <HeartPlusIcon className="size-8 text-red-500" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-500 font-normal text-lg mb-1">
            Total campaigns supported
          </h3>
          <p className="text-3xl font-bold text-gray-900">1000</p>
        </div>
      </Card>

      <Card className="flex items-center p-6 bg-white w-full rounded-2xl">
        <div className="flex-shrink-0 mr-6 bg-slate-100 p-4 rounded-full">
          <HandshakeIcon className="size-8 text-green-600" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-500 font-normal text-lg mb-1">
            Total pledged
          </h3>
          <p className="text-3xl font-bold text-gray-900">1000</p>
        </div>
      </Card>

      <Card className="flex items-center p-6 bg-white w-full rounded-2xl">
        <div className="flex-shrink-0 mr-6 bg-slate-100 p-4 rounded-full">
          <VoteIcon className="size-8 text-blue-600" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-500 font-normal text-lg mb-1">
            Total votes per solution
          </h3>
          <p className="text-3xl font-bold text-gray-900">1000</p>
        </div>
      </Card>

      {/* <Card className="flex items-center p-6 bg-white">
        <div className="flex-shrink-0 mr-6 bg-slate-100 p-4 rounded-full">
          <PercentIcon className="size-8 text-orange-600" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-gray-500 font-normal text-lg mb-1">
            Growth Rate
          </h3>
          <p className="text-3xl font-bold text-gray-900">4.5%</p>
        </div>
      </Card> */}
    </div>
  );
}
