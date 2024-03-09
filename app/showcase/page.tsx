// NEXT
import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// REACT
import { Suspense } from "react";
// COMPONENTS
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
// PACKAGES
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com/showcase'),
  title: 'Showcase Page',
  description: 'Showcasing some of our projects across various categories such as painting, tilling, and miscellaneous',
}

export default async function ShowcasePage() {
  // SERVER LAND
  const projects = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="container flex flex-col justify-start items-center pt-10 px-10 min-h-[90dvh]">
      <h2 className="font-font font-poppins text-xl text-primary text-center">Some of our Work</h2>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 auto-rows-[500px] justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <Suspense fallback={<div>Loading...</div>}>
          {projects.map((project) => (
            <Link href={project?._raw.flattenedPath} key={project?._raw.flattenedPath} className="w-full h-full">
              <Card className="duration-500 hover:scale-105 hover:shadow-xl w-full h-full card-parent">
                <CardHeader className="p-0 w-full h-full overflow-hidden">
                  <Image
                    src="/images/banner-md.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    objectFit="cover"
                    alt={'Project Image'}
                  />
                </CardHeader>
                <CardFooter className="flex flex-col justify-start items-center pt-5 gap-2.5 bg-secondary card-child">
                  <h3 className="text-lg text-primary font-bold font-poppins">{project?.title}</h3>
                  <p className="text-primary font-roboto">{project?.description}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </Suspense>
      </section>
    </main>
  )
}