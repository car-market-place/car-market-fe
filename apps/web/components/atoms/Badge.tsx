import { Badge as BadgeShadCn } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IconBadgeProps {
  icon: ReactNode;
  count?: number;
  className?: string;
}

export function Badge({ icon, count = 0, className }: IconBadgeProps) {
  return (
    <div className={cn("relative inline-flex", className)}>
      {icon}

      {count > 0 && (
        <BadgeShadCn
          className="
            absolute
            -top-2
            -left-2
            h-5
            min-w-5
            rounded-full
            px-1
            text-xs
            bg-red-500
            text-white
          "
        >
          {count > 99 ? "99+" : count}
        </BadgeShadCn>
      )}
    </div>
  );
}
