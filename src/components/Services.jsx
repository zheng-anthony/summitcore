const services = [
  {
    title: 'Residential Construction',
    description:
      'Custom home builds, additions, and structural work delivered with durable materials and careful site management.',
  },
  {
    title: 'Commercial Projects',
    description:
      'Professional construction support for offices, tenant improvements, retail spaces, and business facilities.',
  },
  {
    title: 'Renovations & Remodeling',
    description:
      'High-quality interior and exterior updates that improve function, finish, and long-term property value.',
  },
  {
    title: 'Project Planning',
    description:
      'Clear scopes, realistic timelines, budget guidance, and coordination before construction begins.',
  },
]

function Services() {
  return (
    <section id="services" className="relative z-10 border-b border-[#d6bd68]/15 bg-[#16171d]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-[#d6bd68]">
            Services
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#f5f5f5] sm:text-5xl">
            Construction Services Built Around Quality
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#a7a7a7]">
            From early planning through final delivery, every build is handled
            with disciplined communication, clean execution, and respect for the
            property.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group border border-[#d6bd68]/20 bg-[#1f2028] p-7 transition duration-200 hover:-translate-y-1 hover:border-[#d6bd68]/70 hover:bg-[#23242d]"
            >
              <div className="mb-8 h-1 w-14 bg-[#d6bd68] transition-all duration-200 group-hover:w-20" />
              <h3 className="font-serif text-2xl text-[#f5f5f5]">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-[#a7a7a7]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
