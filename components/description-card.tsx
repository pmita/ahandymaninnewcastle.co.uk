// COMPONENTS
import { 
  Card, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
// UTILS
import { cn } from "@/utils/helpers";

interface DescriptionCardProps {
  title: string;
  description: string;
  headerIcon: React.ReactNode;
}

export const DescriptionCard = ({ title, description, headerIcon }: DescriptionCardProps) => {
  return (
    <Card className={cn("flex justify-center items-center border-solid border-secondary border-[0.3rem] first:col-span-1 first:lg:row-span-2 last:col-span-1 last:lg:col-span-2")}>
      <CardHeader className="flex justify-center items-center">
        {headerIcon ? headerIcon : null}
        {title ? (
            <CardTitle className="text-lg text-secondary font-bold font-poppins">{title}</CardTitle>
          ) : null}
        {description ? (
          <CardDescription className="text-secondary font-roboto">
            {description}
          </CardDescription>
        ) : null}
      </ CardHeader>
    </Card>
  )
}