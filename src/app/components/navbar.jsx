import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-(--navbar-bg) text-white p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          Ethan Sitnek
        </Link>
        <div className="space-x-8">
          <Link href="/about" className="text-lg hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="text-lg hover:text-gray-300">
            Projects
          </Link>
          <Link href="/contact" className="text-lg hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}