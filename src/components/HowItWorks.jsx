const steps = [
  {
    title: 'Display your upside-down pineapple',
    description: 'Your porch does the talking — we only visit those who signal the secret.',
    icon: '🍍',
  },
  {
    title: 'Contact the crustaceans',
    description: 'Send us your address and preferred time. We handle the rest.',
    icon: '📞',
  },
  {
    title: 'Watch lobsters mow',
    description: 'Sit back, sip something tropical, and enjoy the show.',
    icon: '🦞',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-4xl text-lobster">How It Works</h2>
        <p className="mt-3 text-lg text-warm-700">
          Three easy steps to a yard that feels like a seaside escape.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{step.icon}</span>
                <span className="rounded-full bg-seafoam/40 px-3 py-1 text-xs font-semibold text-warm-800">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-warm-900">{step.title}</h3>
              <p className="mt-3 text-warm-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
