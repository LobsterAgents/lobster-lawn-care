export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-warm-600">
        <p className="font-display text-lg text-lobster">Lobster Lawn Care Service</p>
        <p className="mt-2">We make lawns luscious for those who flip the pineapple. 🍍🦞</p>
        <p className="mt-4">© 2026 Lobster Lawn Care Service. All rights reserved.</p>
        <p className="mt-2">
          Powered by{' '}
          <a
            href="https://lobsteragents.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lobster hover:underline font-medium"
          >
            Lobster Agents LLC
          </a>
        </p>
      </div>
    </footer>
  )
}
