const priorities = [
  {
    title: 'Clear Expectations',
    description:
      'Plain communication around scope, schedule, and changes helps owners understand what is happening before work moves forward.',
  },
  {
    title: 'Respect for the Property',
    description:
      'Organized site management, clean work areas, and practical sequencing reduce disruption during active construction.',
  },
  {
    title: 'Durable Finish Standards',
    description:
      'Material choices and construction details are handled with long-term use in mind, not just the day of completion.',
  },
]

function ClientPriorities() {
  return (
    <section className="relative z-10 border-b border-[#d6bd68]/15 bg-[#16171d]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#d6bd68]">
            Client Priorities
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#f5f5f5] sm:text-5xl">
            The details clients look for before they hire.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#a7a7a7]">
            SummitCore keeps the decision points visible: what is being built,
            how the work is sequenced, and what quality standard the final result
            needs to meet.
          </p>
        </div>

        <div className="grid gap-5">
          {priorities.map((priority) => (
            <article
              key={priority.title}
              className="border border-[#d6bd68]/20 bg-[#1f2028] p-7"
            >
              <h3 className="font-serif text-2xl text-[#d6bd68]">
                {priority.title}
              </h3>
              <p className="mt-4 leading-7 text-[#c7c7c7]">
                {priority.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientPriorities
