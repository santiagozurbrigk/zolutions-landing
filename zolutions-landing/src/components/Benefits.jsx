import Button from './Button';

function Benefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Software 100% personalizado",
      description: "Desarrollamos soluciones únicas adaptadas específicamente a las necesidades de tu negocio."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Ahorro de tiempo y costos",
      description: "Automatizamos procesos para que tu equipo se enfoque en lo que realmente importa."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Experiencia intuitiva",
      description: "Interfaces diseñadas para ser fáciles de usar desde el primer día."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Escalabilidad asegurada",
      description: "Tu sistema crece contigo, sin límites ni restricciones técnicas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: "Soporte cercano y confiable",
      description: "Estamos aquí cuando nos necesites, con atención personalizada y respuesta rápida."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            ¿Por qué elegir Zolutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Más que software, creamos soluciones que transforman la forma en que trabajas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-105 border border-gray-100"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Segunda fila centrada */}
        <div className="flex justify-center gap-8 mb-16">
          {benefits.slice(3).map((benefit, index) => (
            <div 
              key={index + 3} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-105 border border-gray-100 w-full max-w-md"
              style={{animationDelay: `${(index + 3) * 150}ms`}}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para experimentar la diferencia?
            </h3>
            <p className="text-gray-600 mb-6">
              Descubre cómo nuestros clientes han transformado sus negocios con soluciones personalizadas
            </p>
            <Button variant="primary" size="lg" className="shadow-lg hover:scale-105">
              Ver casos de éxito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
