// NEXT
import { type Metadata } from "next";
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
    <main className="grid place-content-center">
      <h2 className="font-font font-poppins text-xl text-primary text-center">Some of our Work</h2>
      {projects && (<h1>We have projects to showcase</h1>)}
    </main>
  )
}