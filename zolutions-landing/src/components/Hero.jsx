import Button from './Button'

function Hero() {
  return (
    <section id="inicio" className="pt-16 min-h-screen lg:w-[50%] flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
      </div>
    </section>
  );
}

export default Hero;
