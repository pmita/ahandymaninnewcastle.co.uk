// NEXT
import Link from "next/link"
// COMPONENTS
import { buttonVariants } from "../ui/button"

export async function NavBar() {
  return (
    <nav className="container min-h-[10vh] mx-auto bg-neutral flex justify-between items-center p-4">
      <Link 
        href="/" 
        className="text-md text-primary font-poppins font-bold"
      >
        RefubCity
      </Link>
      <Link 
        href="/contact" 
        className={buttonVariants({ size: 'lg' })}
      >
        Contact
      </Link>
    </nav>
  )
}