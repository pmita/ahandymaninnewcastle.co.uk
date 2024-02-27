
// PACKAGES
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

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