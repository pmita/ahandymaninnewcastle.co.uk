// NEXT
import Link from "next/link";
// LIBRARIES
import { allProjects } from "contentlayer/generated";
import { buttonVariants } from "@/components/ui/button";
// UTILS
import { cn } from "@/utils/helpers";
import { Tag, tagVariants } from "@/components/ui/tag";

interface CourseChapterLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
    id: string;
  };
}

export default function CourseChapterLayout({ children, params }: CourseChapterLayoutProps) {
  // SERVER LAND
  const project = allProjects.find((project) => project.slugAsParams === params.slug);

  console.log(project?.categories);
  return (
    <section className="container flex flex-wrap flex-row justify-center items-stretch w-full p-5 pb-0">
      <aside className="flex-[1_1_300px] self-stretch flex flex-col flex-start items-between gap-2 w-full order-1 lg:order-2 min-h-auto p-5">
        <Link 
          href='/showcase'
          className={cn(buttonVariants({ variant: 'primary', size: "sm" }))}  
        >
          Go Back
        </Link>
        {project?.categories && project?.categories?.map((category, index) => (
          <Tag className={cn(tagVariants({ variant: 'alternate', size: "lg" }))} key={index}>
            {`# ` + category.variant}
          </Tag>
        ))}
      </aside>
      <section className="p-5 flex-[4_1_670px] self-stretch w-full order-2 lg:order-1">
        {children}
      </section>
    </section>
  );
}