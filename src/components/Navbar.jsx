function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white">
            Mi Portafolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('cv')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              CV
            </button>
            <button
              onClick={() => scrollToSection('proyectos-personales')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Proyectos Personales
            </button>
            <button
              onClick={() => scrollToSection('proyectos-laborales')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
            >
              Proyectos Laborales
            </button>
          </div>

          {/* Botón móvil (opcional para después) */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;