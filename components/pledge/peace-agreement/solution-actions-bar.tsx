"use client";

import { Heart, ThumbsDown, Share2 } from "lucide-react";
import InteractionCounter from "../shared/interaction-counter";

interface SolutionActionsBarProps {
  solutionId: string;
}

export default function SolutionActionsBar({
  solutionId,
}: SolutionActionsBarProps) {
  return (
    <div className="border-t border-gray-200 grid grid-cols-3">
      <InteractionCounter icon={Heart} type="like" solutionId={solutionId} />

      <InteractionCounter
        icon={ThumbsDown}
        type="dislike"
        solutionId={solutionId}
      />

      <InteractionCounter icon={Share2} type="share" solutionId={solutionId} />
    </div>
  );
}
