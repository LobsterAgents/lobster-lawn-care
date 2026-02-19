import { useState } from 'react'

const initialForm = {
  name: '',
  address: '',
  phone: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="bg-lobster text-cream">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl">Contact the Crew</h2>
            <p className="mt-4 text-lg text-cream/90">
              Ready for a lawn that turns heads and hides secrets? Drop a line and we’ll paddle over.
            </p>
            <div className="mt-6 space-y-4 text-cream/80">
              <p>📍 Serving the Secret Shores & surrounding neighborhoods</p>
              <p>🕒 Available dawn-till-dusk, tides permitting</p>
              <p>☎️ (555) 013-PINCH</p>
            </div>
            {submitted && (
              <div className="mt-6 rounded-2xl bg-cream/20 px-4 py-3 text-sm">
                We’ll be in touch! 🦞
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="rounded-3xl bg-cream/10 p-6 backdrop-blur">
            <div className="grid gap-4">
              <label className="text-sm">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-cream/30 bg-cream/5 px-4 py-2 text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
                  placeholder="Captain Clawford"
                />
              </label>
              <label className="text-sm">
                Address
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-cream/30 bg-cream/5 px-4 py-2 text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
                  placeholder="123 Pineapple Pier"
                />
              </label>
              <label className="text-sm">
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-cream/30 bg-cream/5 px-4 py-2 text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
                  placeholder="(555) 000-0000"
                />
              </label>
              <label className="text-sm">
                Message
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-cream/30 bg-cream/5 px-4 py-2 text-cream placeholder:text-cream/60 focus:border-cream focus:outline-none"
                  placeholder="Tell us about your turf and your tides..."
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-cream px-6 py-3 font-semibold text-lobster transition hover:-translate-y-0.5"
              >
                Send the Signal 🍍
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
