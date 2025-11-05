import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Golova Landing
            <span className="text-blue-600 block">Coming Soon</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern React + Vite + Tailwind CSS landing page
          </p>
        </header>
        
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
