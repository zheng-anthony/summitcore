const steps = [
  {
    number: '01',
    title: 'Site Conversation',
    description:
      'Discuss the property, project goals, timeline, budget range, and the practical constraints that shape the work.',
  },
  {
    number: '02',
    title: 'Scope & Estimate',
    description:
      'Define the work clearly so materials, sequencing, allowances, and responsibilities are understood before crews mobilize.',
  },
  {
    number: '03',
    title: 'Scheduled Build',
    description:
      'Coordinate trades, materials, site access, and communication around a realistic construction schedule.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'Review the finished work, close out punch-list details, and leave the site ready for everyday use.',
  },
]

function Process() {
  return (
    <section className="relative z-10 border-b border-[#d6bd68]/15 bg-[#111217]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#d6bd68]">
              Process
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#f5f5f5] sm:text-5xl">
              A clear path from first call to finished work.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center border border-[#d6bd68] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6bd68] transition duration-200 hover:bg-[#d6bd68] hover:text-[#111217] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6bd68]"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-12 grid gap-px border border-[#d6bd68]/15 bg-[#d6bd68]/15 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="bg-[#1f2028] p-7">
              <p className="font-serif text-4xl text-[#d6bd68]">{step.number}</p>
              <h3 className="mt-8 font-serif text-2xl text-[#f5f5f5]">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-[#a7a7a7]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
