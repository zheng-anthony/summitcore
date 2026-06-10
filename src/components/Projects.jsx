const projects = [
  {
    label: 'Custom Build',
    title: 'Private Residence Foundation Package',
    description: 'Site preparation, structural coordination, and exterior envelope planning for a new Gainesville-area home.',
  },
  {
    label: 'Renovation',
    title: 'Whole-Home Interior Modernization',
    description: 'Focused layout improvements, finish upgrades, and construction sequencing for a cleaner everyday living space.',
  },
  {
    label: 'Commercial',
    title: 'Small Business Build-Out',
    description: 'Practical commercial improvements designed around durability, schedule control, and professional presentation.',
  },
]

function ProjectGraphic({ label }) {
  return (
    <div className="relative h-56 overflow-hidden border border-[#f5f5f5]/10 bg-[#111217]">
      <div className="absolute inset-x-0 top-8 h-px bg-[#d6bd68]/35" />
      <div className="absolute inset-y-0 left-10 w-px bg-[#d6bd68]/30" />
      <div className="absolute left-10 top-8 h-28 w-40 border border-[#d6bd68]/40" />
      <div className="absolute bottom-8 right-8 h-20 w-32 border border-[#f5f5f5]/15" />
      <div className="absolute left-20 top-28 h-px w-52 rotate-[-18deg] bg-[#d6bd68]/60" />
      <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.28em] text-[#d6bd68]">
        {label}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative z-10 border-b border-[#d6bd68]/15 bg-[#16171d]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#d6bd68]">
              Work Preview
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#f5f5f5] sm:text-5xl">
              Project standards shaped by detail.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#a7a7a7]">
            A refined look at the kind of organized, well-finished construction
            work SummitCore brings to residential and commercial spaces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group border border-[#d6bd68]/20 bg-[#1f2028] p-4 transition duration-200 hover:-translate-y-1 hover:border-[#d6bd68]/70"
            >
              <ProjectGraphic label={project.label} />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d6bd68]">
                  {project.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#f5f5f5]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-[#a7a7a7]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
