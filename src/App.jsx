export default function App() {
  return (
    <div className="min-h-screen bg-warm-50 flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl mb-6">🦞</h1>
        <h2 className="text-4xl font-bold text-warm-900 mb-4">
          Welcome to Clawible!
        </h2>
        <p className="text-xl text-warm-600 mb-8">
          Your project is ready to build. Describe what you want to create in the chat,
          and I'll make it happen.
        </p>
        <div className="flex gap-4 justify-center">
          <div className="px-6 py-3 bg-coral-500 text-white rounded-lg font-medium cursor-pointer hover:bg-coral-600 transition-colors">
            Get Started →
          </div>
        </div>
      </div>
    </div>
  )
}