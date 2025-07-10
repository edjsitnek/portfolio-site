'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-(--navbar-bg) text-white p-3 sm:p-5 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 " onClick={() => setIsOpen(false)}>
          Ethan Sitnek
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg hover:text-gray-300 border-b-2 ${pathname === link.href
                ? "border-[var(--blue5)]"
                : "border-transparent"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center px-2 py-1"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Open menu"
        >
          {/* Hamburger bars */}
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-4 top-full mt-2
            w-36 bg-[var(--navbar-bg)] rounded shadow-lg z-50
            flex flex-col space-y-2 py-3 px-4
            md:hidden
            animate-fade-in">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg ml-6 hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              <span
                className={`border-b-2 ${pathname === link.href
                  ? "border-[var(--blue5)]"
                  : "border-transparent"
                  }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}