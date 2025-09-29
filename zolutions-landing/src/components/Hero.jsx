import Button from './Button'

function Hero() {
  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] animate-fade-in-up">
              Software a medida que hace crecer tu negocio
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-4xl leading-relaxed animate-fade-in-up animation-delay-200">
              En Zolutions creamos sistemas personalizados para que tu empresa gane eficiencia, reduzca errores y aumente su rentabilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start animate-fade-in-up animation-delay-400">
              <Button variant="primary" size="md">
                Solicitar una demo
              </Button>
              <Button variant="outline" size="md">
                Hablar con un experto
              </Button>
            </div>
          </div>

          {/* Mockup 3D */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] perspective-1000">
              {/* Dispositivo principal - Laptop */}
              <div className="absolute top-8 left-8 w-80 h-48 bg-gray-800 rounded-lg shadow-2xl transform rotate-y-12 rotate-x-8 animate-float">
                <div className="w-full h-full bg-gray-900 rounded-lg p-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dispositivo secundario - Tablet */}
              <div className="absolute top-32 right-8 w-48 h-36 bg-gray-700 rounded-lg shadow-xl transform rotate-y-[-8deg] rotate-x-4 animate-float animation-delay-200">
                <div className="w-full h-full bg-gray-800 rounded-lg p-3">
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-500 rounded flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium">Analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dispositivo móvil */}
              <div className="absolute bottom-16 left-16 w-24 h-40 bg-gray-600 rounded-2xl shadow-lg transform rotate-y-[-15deg] rotate-x-[-5deg] animate-float animation-delay-400">
                <div className="w-full h-full bg-gray-700 rounded-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mx-auto mb-1 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium">App</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos flotantes decorativos */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-20 left-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-300"></div>
              <div className="absolute bottom-8 right-12 w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-500"></div>
              
              {/* Líneas de conexión */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M80 200 Q200 150 320 120" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse"/>
                <path d="M200 300 Q300 250 400 200" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse animation-delay-200"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
