// COMPONENTS
import { Badge, BadgeProps, badgeVariants} from "@/components/ui/badge";
// UTILS
import { cn } from "@/utils/helpers";
// TYPES
import { QUERY_STATUS } from "@/types/firestore";

const selectVariant = (status: string) => {
  switch (status) {
    case QUERY_STATUS.PROGRESSED:
      return 'accentBlue';
    case QUERY_STATUS.COMPLETED:
        return 'accentGreen';
    case QUERY_STATUS.INITIAL:
    default:
      return 'accentYellow';
  }
}

interface IStatus extends BadgeProps {
  status: string;
}

export function ItemStatus({ className, variant, status, ...props }: IStatus) {
  return (
    <Badge
      className={cn(badgeVariants({ variant:selectVariant(status), className}))}
      {...props}
    >
      {status}
    </Badge>
  );
}