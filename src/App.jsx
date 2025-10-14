import { useState } from 'react'
import Navbar from './components/Navbar'
import CV from './components/CV'
import ProyectosPersonales from './components/ProyectosPersonales'
import ProyectosLaborales from './components/ProyectosLaborales'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      
      <main>
        <CV />
        <ProyectosPersonales />
        <ProyectosLaborales />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <p>&copy; 2025 - Todos los derechos reservados</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/FacundoCampo" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/facundocampo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
             className="hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a href="facundocampo@yahoo.com.ar" 
             className="hover:text-blue-400 transition-colors">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App