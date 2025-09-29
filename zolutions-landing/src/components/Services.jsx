import Button from './Button';

function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Sistemas de gestión de stock",
      features: [
        "Control con código de barras",
        "Inventario en tiempo real",
        "Reportes automáticos"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Plataformas de ventas",
      features: [
        "Integración con lectores de código de barras",
        "Facturación simplificada",
        "Control de ingresos y estadísticas"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Soluciones a medida",
      features: [
        "Software único para tu rubro",
        "Escalable y adaptable a tu crecimiento",
        "Diseño pensado en la usabilidad"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Lo que hacemos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Creamos sistemas personalizados que se adaptan a tu negocio, no al revés.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-105" style={{animationDelay: `${index * 150}ms`}}>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: index === 1 
                    ? 'rgba(93, 189, 230, 0.1)' 
                    : 'rgba(14, 110, 239, 0.1)'
                }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg" className="shadow-lg hover:scale-105 animate-fade-in-up">
            Explorar soluciones
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
