function Testimonials() {
  const testimonials = [
    {
      quote: "Con Zolutions pasamos de Excel a un sistema que nos ahorra horas todos los días.",
      name: "Martín",
      role: "Dueño de librería",
      initial: "M",
      bgColor: "bg-primary"
    },
    {
      quote: "El sistema es tan simple que todo mi equipo lo adoptó en una semana.",
      name: "Carla",
      role: "Gerente de gimnasio",
      initial: "C",
      bgColor: "bg-secondary"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:scale-105" style={{animationDelay: `${index * 200}ms`}}>
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-semibold mr-4 hover:scale-110 transition-transform duration-300`}>
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
