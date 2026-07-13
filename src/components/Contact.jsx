function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-[#111217]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="relative overflow-hidden border border-[#d6bd68]/35 bg-[#1f2028] p-8 sm:p-12 lg:p-16">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-[#d6bd68] via-[#d6bd68]/30 to-transparent" />
          <div className="absolute bottom-8 right-8 hidden h-32 w-32 rotate-45 border border-[#d6bd68]/15 lg:block" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[#d6bd68]">
                Contact
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#f5f5f5] sm:text-5xl">
                Ready to Start Your Next Build?
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#c7c7c7]">
                Contact SummitCore Group LLC to discuss your project, timeline,
                and construction needs.
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.28em] text-[#a7a7a7]">
                Gainesville, FL
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="tel:+13527271034"
                className="inline-flex items-center justify-center border border-[#d6bd68] bg-[#d6bd68] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#111217] transition duration-200 hover:bg-transparent hover:text-[#d6bd68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6bd68]"
              >
                Call or Text&nbsp; (352) 727-1034
              </a>
              <a
                href="mailto:Jlruiz2386@gmail.com"
                className="inline-flex items-center justify-center border border-[#d6bd68] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6bd68] transition duration-200 hover:bg-[#d6bd68] hover:text-[#111217] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6bd68]"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
