import React from "react";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface StepsDisplayProps {
  steps: Step[];
}

export default function StepsDisplay({ steps }: StepsDisplayProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-background rounded-3xl p-4 gap-5 md:p-6 shadow-card border-4 border-[#E9EDC980] animate-[border-pulse_1.5s_infinite]">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex-1 flex flex-col items-center relative w-full md:w-auto hover:bg-[#E9EDC980] p-4 rounded-2xl border border-[transparent] hover:border hover:border-[#86AC9D] transition-all duration-300"
        >
          {/* Connector line */}
          {idx !== 0 && (
            <>
              {/* Horizontal line for desktop */}
              <div
                className="hidden md:block absolute top-10 left-0 -translate-y-1/2 h-0.5 bg-[#86AC9D] z-0"
                style={{
                  width: "calc(100% + 1.5rem)", // adjust as needed for icon size
                  marginLeft: "-50%",
                }}
              />
              {/* Vertical line for mobile */}
              <div
                className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#86AC9D] z-0"
                style={{
                  height: "calc(100% + 1.5rem)", // adjust as needed for icon size
                  marginTop: "-50%",
                }}
              />
            </>
          )}
          <div className="z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 p-2 rounded-full border-4 bg-white border-[#548281] text-[#86AC9D]">
            {step.icon}
          </div>
          <div className="mt-2 md:mt-4 px-2 md:px-4 py-2 rounded-xl text-center">
            <div className="font-semibold text-base md:text-lg text-gray-800">
              {step.title}
            </div>
            <div className="text-gray-500 text-xs md:text-sm">
              {step.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
