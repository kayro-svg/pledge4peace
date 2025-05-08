"use client";

import type React from "react";
import { useAnimatedNumber } from "@/lib/hooks/useAnimatedNumbers";
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  const count = useAnimatedNumber(parseInt(value.replace(/,/g, "")));

  // Format the number with commas
  const formattedCount = count.toLocaleString();

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-[#E9EDC980] shadow-card hover:shadow-soft hover:bg-[#E9EDC9] border border-[#86AC9D] transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 rounded-full bg-white border-4 border-[#548281] flex items-center justify-center mb-4 text-brand-500">
        {icon}
      </div>
      <h2 className="text-3xl font-medium text-gray-800 mb-1">
        {formattedCount}+
      </h2>
      <p className="text-[#2F4858]">{label}</p>
    </div>
  );
}
