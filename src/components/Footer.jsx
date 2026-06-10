function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#d6bd68]/15 bg-[#0d0e12]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center border border-[#d6bd68]/60">
            <span className="absolute h-4 w-4 rotate-45 border-l-2 border-t-2 border-[#d6bd68]" />
            <span className="absolute bottom-2 h-px w-5 bg-[#d6bd68]/70" />
          </span>
          <div>
            <p className="font-serif text-lg tracking-[0.22em] text-[#d6bd68]">
              SUMMITCORE
            </p>
            <p className="text-sm text-[#a7a7a7]">SummitCore Group LLC</p>
          </div>
        </div>

        <div className="text-left text-sm leading-6 text-[#a7a7a7] sm:text-right">
          <p>Gainesville, FL • Construction</p>
          <p>© 2026 SummitCore Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
