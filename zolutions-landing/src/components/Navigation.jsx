function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Zolutions" className="h-12 w-auto" />
          </div>
          <div className="hidden md:block">
            <div className="w-[600px] flex justify-around items-center">
              <a href="#inicio" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Servicios
              </a>
              <a href="#casos" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Casos de éxito
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
