// NEXT
import { type Metadata } from "next";
import Link from "next/link";
// PACKAGES
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com/showcase'),
  title: 'Showcase Page',
  description: 'Showcasing some of our projects across various categories such as painting, tilling, and miscellaneous',
}

export default async function ShowcasePage() {
  // SERVER LAND
  const projects = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  console.log(projects)
  return (
    <main className="container grid place-content-center pt-10 px-10">
      <h2 className="font-font font-poppins text-xl text-primary text-center">Some of our Work</h2>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {projects && projects.map((project, index) => (
          <Link href={project?._raw.flattenedPath} key={project?._raw.flattenedPath}>
            <Card key={index} className="border-solid border-alternate border-[0.3rem]">
              <CardHeader>
                <h3 className="text-lg text-primary font-bold font-poppins">{project?.title}</h3>
                <p className="text-primary font-roboto">{project?.description}</p>
              </CardHeader>
            </Card>
          </Link>
        ))}
        {projects && projects.map((project, index) => (
          <Link href={project?._raw.flattenedPath} key={project?._raw.flattenedPath}>
            <Card key={index} className="border-solid border-alternate border-[0.3rem]">
              <CardHeader>
                <h3 className="text-lg text-primary font-bold font-poppins">{project?.title}</h3>
                <p className="text-primary font-roboto">{project?.description}</p>
              </CardHeader>
            </Card>
          </Link>
        ))}
        {projects && projects.map((project, index) => (
          <Link href={project?._raw.flattenedPath} key={project?._raw.flattenedPath}>
            <Card key={index} className="border-solid border-alternate border-[0.3rem]">
              <CardHeader>
                <h3 className="text-lg text-primary font-bold font-poppins">{project?.title}</h3>
                <p className="text-primary font-roboto">{project?.description}</p>
              </CardHeader>
            </Card>
          </Link>
        ))}
        {projects && projects.map((project, index) => (
          <Link href={project?._raw.flattenedPath} key={project?._raw.flattenedPath}>
            <Card key={index} className="border-solid border-alternate border-[0.3rem]">
              <CardHeader>
                <h3 className="text-lg text-primary font-bold font-poppins">{project?.title}</h3>
                <p className="text-primary font-roboto">{project?.description}</p>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  )
}