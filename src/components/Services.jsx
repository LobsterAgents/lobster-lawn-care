const services = [
  {
    title: 'Mow & Glow',
    description: 'Clean, crisp lines with a coastal finish and zero crabgrass drama.',
    icon: '🌿',
  },
  {
    title: 'Edge Control',
    description: 'Sharper borders than a captain’s hat. Sidewalks, beds, and driveways.',
    icon: '✂️',
  },
  {
    title: 'Tidal Cleanup',
    description: 'Leaf removal, branch pickup, and party-ready patios.',
    icon: '🧼',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl text-lobster">Services</h2>
            <p className="mt-3 text-lg text-warm-700">
              Tailored lawn care for those who know the pineapple protocol.
            </p>
          </div>
          <span className="rounded-full bg-seafoam/40 px-4 py-2 text-sm text-warm-800">🦞 Seasonal packages available</span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-warm-100 bg-cream p-6 shadow-sm">
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-4 font-display text-2xl text-warm-900">{service.title}</h3>
              <p className="mt-3 text-warm-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
