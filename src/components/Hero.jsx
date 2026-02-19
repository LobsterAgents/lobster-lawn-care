export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-lobster text-cream">
      <div className="absolute -top-10 -left-10 text-7xl opacity-20">🦞</div>
      <div className="absolute -bottom-8 right-6 text-6xl opacity-20">🍍</div>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cream/80">
              Exclusive lawn care for pineapple connoisseurs
            </p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">
              We Mow. We Pinch. We Deliver.
            </h1>
            <p className="mt-6 text-lg text-cream/90">
              Lobster Lawn Care Service delivers pristine lawns with a pinch of flair. If you fly the upside-down pineapple,
              we arrive in full crustacean regalia, shears in claw.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-3 text-lobster font-semibold shadow-lg transition hover:-translate-y-0.5"
              >
                Book a Claw-Back
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 px-6 py-3 text-cream/90 transition hover:border-cream"
              >
                See Our Services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-cream/80">
              <span className="flex items-center gap-2">✅ Discreet pineapple protocol</span>
              <span className="flex items-center gap-2">✅ Tidal-wave tidy up</span>
            </div>
          </div>
          <div className="rounded-3xl bg-cream/10 p-8 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl">Today’s Catch</h2>
              <span className="text-4xl">🦞</span>
            </div>
            <ul className="mt-6 space-y-4 text-cream/90">
              <li className="flex items-start gap-3">
                <span>🌿</span>
                <p>Signature mow lines with nautical precision.</p>
              </li>
              <li className="flex items-start gap-3">
                <span>🍍</span>
                <p>Pineapple compliance check so we only visit those in the know.</p>
              </li>
              <li className="flex items-start gap-3">
                <span>🧼</span>
                <p>Post-party cleanup for the morning-after luau.</p>
              </li>
            </ul>
            <p className="mt-6 rounded-2xl bg-cream/20 px-4 py-3 text-sm">
              “Our yard has never looked this lush. Also, the lobsters waved.” — Satisfied Neighbor
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
