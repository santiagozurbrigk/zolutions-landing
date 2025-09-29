import Button from './Button';

function CaseStudies() {
  const cases = [
    {
      title: "Librería Central",
      description: "Redujo un 60% los errores en stock con nuestro sistema de gestión de inventario.",
      metric: "+60% eficiencia"
    },
    {
      title: "Gimnasio Vital",
      description: "Aumentó su facturación mensual un 20% gracias a una mejor gestión de socios.",
      metric: "+20% facturación"
    },
    {
      title: "Imprenta Nova",
      description: "Optimizó la administración de pedidos y tiempos de entrega con nuestro sistema.",
      metric: "+40% productividad"
    }
  ];

  return (
    <section id="casos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Historias de negocios que crecen con Zolutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-105" style={{animationDelay: `${index * 150}ms`}}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{caseStudy.title}</h3>
              <p className="text-gray-600 mb-4">
                {caseStudy.description}
              </p>
              <div className="text-primary font-semibold">{caseStudy.metric}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" className="shadow-lg hover:scale-105 animate-fade-in-up">
            Ver una demo en acción
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
