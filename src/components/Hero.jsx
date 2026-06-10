function Hero() {
  return (
    <section className="relative z-10 border-b border-[#d6bd68]/15">
      <div className="mx-auto grid min-h-[calc(100svh-89px)] max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-[0.36em] text-[#d6bd68]">
            Gainesville Construction
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] text-[#f5f5f5] sm:text-6xl lg:text-7xl">
            Building Strong Foundations for Gainesville and Beyond
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c7c7c7]">
            SummitCore Group LLC delivers dependable construction solutions with
            precision, professionalism, and long-lasting quality.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-[#d6bd68] bg-[#d6bd68] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#111217] transition duration-200 hover:bg-transparent hover:text-[#d6bd68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6bd68]"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-[#d6bd68]/50 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6bd68] transition duration-200 hover:border-[#d6bd68] hover:bg-[#d6bd68]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6bd68]"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 hidden h-28 w-28 border-l border-t border-[#d6bd68]/40 sm:block" />
          <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 border-b border-r border-[#d6bd68]/40 sm:block" />

          <div className="relative border border-[#d6bd68]/30 bg-[#1f2028] p-5 shadow-2xl shadow-black/40">
            <div className="border border-[#d6bd68]/20 bg-[#16171d] p-5">
              <div className="relative h-[420px] overflow-hidden border border-[#f5f5f5]/10 bg-[#111217]">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  {Array.from({ length: 36 }).map((_, index) => (
                    <span key={index} className="border border-[#f5f5f5]/5" />
                  ))}
                </div>

                <div className="absolute left-8 top-8 h-28 w-40 border border-[#d6bd68]/70" />
                <div className="absolute left-20 top-20 h-40 w-52 border border-[#d6bd68]/35" />
                <div className="absolute bottom-16 right-10 h-32 w-52 border border-[#d6bd68]/60" />
                <div className="absolute bottom-28 right-24 h-px w-48 bg-[#d6bd68]/80" />
                <div className="absolute bottom-20 right-24 h-px w-40 bg-[#d6bd68]/40" />
                <div className="absolute left-12 top-56 h-px w-72 rotate-[-24deg] bg-[#d6bd68]/55" />
                <div className="absolute left-40 top-36 h-64 w-px rotate-[32deg] bg-[#f5f5f5]/20" />
                <div className="absolute right-8 top-10 border border-[#d6bd68]/50 px-4 py-3 text-right">
                  <p className="font-serif text-3xl text-[#d6bd68]">SC</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#a7a7a7]">
                    Blueprint
                  </p>
                </div>

                <div className="absolute bottom-8 left-8 max-w-64 border-l-2 border-[#d6bd68] pl-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#d6bd68]">
                    Precision Plans
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#c7c7c7]">
                    Detailed coordination from first walkthrough to final punch
                    list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
