import { Heart } from "lucide-react";
import { Badge } from "../atoms/Badge";

type Props = {
  count: number;
};

export function FavoriteBadge({ count = 0 }: Props) {
  return <Badge count={count} icon={<Heart className="h-6 w-6" />} />;
}
