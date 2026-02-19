export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-lobster">Who We Are</h2>
            <p className="mt-4 text-lg text-warm-700">
              We’re a roving crew of lawn artists who believe curb appeal should feel like a beach vacation. Our team is
              famous for showing up in tasteful lobster attire — a uniform that keeps the vibes high and the grass even higher.
            </p>
            <p className="mt-4 text-lg text-warm-700">
              We serve a discreet community of homeowners who signal their membership with an upside-down pineapple. If your
              porch is telling the secret, we’ll take care of the rest.
            </p>
          </div>
          <div className="rounded-3xl border border-lobster/10 bg-white p-6 shadow-sm">
            <h3 className="font-display text-2xl text-warm-900">Our Promise</h3>
            <ul className="mt-4 space-y-3 text-warm-700">
              <li className="flex items-center gap-3">🦞 Unforgettable service with a wink.</li>
              <li className="flex items-center gap-3">🌊 A lawn that flows like a tide.</li>
              <li className="flex items-center gap-3">🍍 Privacy-first scheduling.</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-seafoam/30 px-4 py-3 text-sm text-warm-800">
              Lobster Lawn Care has been “pinching” perfection since 2014.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
