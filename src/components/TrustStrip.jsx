const trustItems = [
  {
    value: 'Gainesville, FL',
    label: 'Locally based construction support',
  },
  {
    value: 'Residential & Commercial',
    label: 'Project planning, builds, and renovations',
  },
  {
    value: 'Quality-First',
    label: 'Clean coordination from scope to walkthrough',
  },
]

function TrustStrip() {
  return (
    <section className="relative z-10 border-b border-[#d6bd68]/15 bg-[#0d0e12]">
      <div className="mx-auto grid max-w-7xl gap-px border-x border-[#d6bd68]/10 bg-[#d6bd68]/10 sm:grid-cols-3">
        {trustItems.map((item) => (
          <div key={item.value} className="bg-[#111217] px-6 py-6 lg:px-8">
            <p className="font-serif text-2xl text-[#d6bd68]">{item.value}</p>
            <p className="mt-2 text-sm uppercase leading-6 tracking-[0.22em] text-[#a7a7a7]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustStrip
