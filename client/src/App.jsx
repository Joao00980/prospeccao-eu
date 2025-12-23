import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">ProspeccaoEU</h1>
        <p className="text-gray-700">Frontend React + Tailwind CSS</p>
        <p className="mt-4 text-sm text-gray-500">
          Status do Backend: <span className="font-semibold">{message || 'Carregando...'}</span>
        </p>
      </div>
    </div>
  )
}

export default App
