import { Bell } from "lucide-react";
import { Badge } from "../atoms/Badge";

type Props = {
  count: number;
};

export function NotificationBadge({ count = 0 }: Props) {
  return <Badge count={count} icon={<Bell className="h-6 w-6" />} />;
}
