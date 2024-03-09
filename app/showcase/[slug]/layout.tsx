// NEXT
import Link from "next/link";
// LIBRARIES
import { buttonVariants } from "@/components/ui/button";
// CONTENTLAYER
import { allProjects } from "contentlayer/generated";
// UTILS
import { cn } from "@/utils/helpers";

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

  return (
    <section className="flex flex-wrap flex-row justify-center items-stretch w-full px-5">
      <header className="container w-full min-h-[5dvh] bg-alternate flex flex-row justify-start items-center gap-5 p-5 sticky top-0 z-50">
        <Link 
          href='/showcase'
          className={cn(buttonVariants({ variant: 'primary', size: "sm" }), "w-[140px]")}  
        >
          Go Back
        </Link>
        <h2 className="font-poppins font-bold text-center text-secondary">{project?.title}</h2>
      </header>
      <main className="container p-5 self-stretch w-full">
        {children}
      </main>
    </section>
  );
}