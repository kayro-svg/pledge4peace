import { useAnimatedNumber } from "@/lib/hooks/useAnimatedNumbers";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

type PledgesProgressBarProps = {
  currentValue: number;
  goalValue: number;
};

export default function PledgesProgressBar({
  currentValue,
  goalValue,
}: PledgesProgressBarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Start with current value displayed
  const startValue = currentValue * 0.7; // 50% of current value

  // Use the hook to animate between values
  const count = useAnimatedNumber(
    shouldAnimate ? startValue : currentValue, // Start from 50% when animation begins
    10
  );

  // When hover state changes, control animation
  useEffect(() => {
    if (isHovered) {
      // First set the count to the reduced value immediately
      setShouldAnimate(true);

      // Then after a tiny delay (for state to update), animate back up
      const timeout = setTimeout(() => {
        setShouldAnimate(false);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [isHovered]);

  // Calculate progress percentage (0-100)
  const progressPercentage = Math.min(
    100,
    Math.round((count / goalValue) * 100)
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between text-sm mb-2">
        <span>Raised</span>
        <span>Goal</span>
      </div>
      <Progress
        value={progressPercentage}
        className="h-2 mb-2 bg-[#d2daba80]"
      />
      <div className="flex justify-between text-sm">
        <span>+{count.toLocaleString()} Peace Pledges</span>
        <span>+{goalValue.toLocaleString()} Peace Pledges</span>
      </div>
    </div>
  );
}
