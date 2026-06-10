const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="relative z-10 border-b border-[#d6bd68]/15 bg-[#111217]/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="flex items-center gap-3" aria-label="SummitCore home">
          <span className="relative flex h-11 w-11 items-center justify-center border border-[#d6bd68]/60 bg-[#1f2028]">
            <span className="absolute h-5 w-5 rotate-45 border-l-2 border-t-2 border-[#d6bd68]" />
            <span className="absolute bottom-2 h-px w-6 bg-[#d6bd68]/70" />
          </span>
          <span>
            <span className="block font-serif text-xl tracking-[0.28em] text-[#d6bd68]">
              SUMMITCORE
            </span>
            <span className="block text-xs uppercase tracking-[0.3em] text-[#a7a7a7]">
              Group LLC
            </span>
          </span>
        </a>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm uppercase tracking-[0.22em] text-[#a7a7a7]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#d6bd68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6bd68]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
