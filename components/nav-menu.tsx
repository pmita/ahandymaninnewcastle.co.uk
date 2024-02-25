// NEXT
import Link from "next/link"

export async function NavMenu() {

  return (
    <nav className="container min-h-[10vh] mx-auto bg-secondary py-8 px-5 flex justify-between lg:px-8">
      <Link 
        href="/" 
        className="text-xl text-primary font-poppins font-bold"
      >
        A <span className="text-alternate">Handyman</span> in Newcastle
      </Link>
      <ul className="flex gap-4 pt-1.5 text-md lg:pt-0 lg:text-lg">
        <li className="lg:px-4">
          <Link 
            href="/showcase" 
            className="text-primary font-semibold hover:opacity-90"
          >
            Showcase
          </Link>
        </li>
        <li className="lg:pl-4">
          <Link 
            href="/contact" 
            className="text-primary font-semibold hover:opacity-90"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}