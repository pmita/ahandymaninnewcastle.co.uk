// NEXT
import Link from "next/link"

export async function NavMenu() {
  return (
    <nav className="container min-h-[10vh] mx-auto bg-primary flex justify-between items-center p-4">
      <Link 
        href="/" 
        className="text-md text-neutral font-poppins font-bold"
      >
        RefubCity
      </Link>
      <ul className="flex gap-4 pt-1.5 text-md lg:pt-0 lg:text-lg">
        <li className="lg:px-4">
          <Link 
            href="/projects" 
            className="text-neutral font-semibold hover:opacity-80"
          >
            Projects
          </Link>
        </li>
        <li className="lg:pl-4">
          <Link 
            href="/contact" 
            className="text-neutral font-semibold hover:opacity-80"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}