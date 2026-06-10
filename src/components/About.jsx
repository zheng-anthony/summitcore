const highlights = [
  { value: 'Gainesville, FL', label: 'Locally based and regionally focused' },
  { value: 'Licensed LLC', label: 'Professional company structure' },
  { value: 'Quality-First Builds', label: 'Craftsmanship before shortcuts' },
]

function About() {
  return (
    <section id="about" className="relative z-10 border-b border-[#d6bd68]/15 bg-[#111217]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#d6bd68]">
            About
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#f5f5f5] sm:text-5xl">
            Built on steady execution and lasting trust.
          </h2>
        </div>

        <div className="border-l border-[#d6bd68]/50 pl-8">
          <p className="text-lg leading-8 text-[#c7c7c7]">
            SummitCore Group LLC is a Gainesville-based construction company
            focused on reliable execution, clean communication, and strong
            craftsmanship. We help homeowners, property owners, and businesses
            move from concept to completion with organized planning and a
            disciplined approach to the work.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#a7a7a7]">
            Every project receives the same standard: clear expectations,
            dependable coordination, and construction details that hold up well
            after the crews leave the site.
          </p>

          <dl className="mt-10 grid gap-5 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.value} className="border border-[#d6bd68]/20 bg-[#1f2028] p-5">
                <dt className="font-serif text-xl text-[#d6bd68]">{item.value}</dt>
                <dd className="mt-3 text-sm leading-6 text-[#a7a7a7]">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
