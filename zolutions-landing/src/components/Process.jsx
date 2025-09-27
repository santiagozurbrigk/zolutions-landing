import { useEffect, useRef, useState } from 'react';

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    { 
      step: "01", 
      title: "Relevamiento", 
      desc: "Escuchamos tus necesidades y analizamos tu negocio para entender exactamente qué necesitas.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      step: "02", 
      title: "Diseño", 
      desc: "Te mostramos la solución pensada para ti con wireframes y prototipos interactivos.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    { 
      step: "03", 
      title: "Desarrollo", 
      desc: "Creamos el sistema con tecnología moderna, siguiendo las mejores prácticas de desarrollo.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      step: "04", 
      title: "Implementación", 
      desc: "Lo ponemos en marcha en tu negocio con capacitación completa para tu equipo.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      step: "05", 
      title: "Soporte", 
      desc: "Te acompañamos para que todo funcione perfecto con soporte técnico continuo.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Calcular el progreso del scroll en la sección (0 a 1)
      const scrollProgress = Math.max(0, Math.min(1, (scrollTop - sectionTop + windowHeight * 0.5) / (sectionHeight - windowHeight * 0.5)));
      
      // Determinar qué paso está activo basado en el scroll
      const newActiveStep = Math.max(0, Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length)));
      
      if (newActiveStep !== activeStep) {
        setActiveStep(newActiveStep);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStep, steps.length]);

  return (
    <section ref={sectionRef} className="w-full bg-gray-900 text-white relative overflow-hidden" style={{marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw'}}>
      <div className="w-full min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Columna izquierda - Título y CTA */}
          <div className="px-8 sm:px-12 lg:px-16 py-32 text-left">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Nuestro Proceso Esencial
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-10">
                Un enfoque sistemático y probado para crear soluciones que realmente funcionen para tu negocio.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light transition-all duration-300 flex items-center gap-2 group cursor-pointer">
                ¡Trabajemos Juntos!
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Columna derecha - Pasos del proceso */}
          <div className="px-8 sm:px-12 lg:px-16 py-32">
            <div className="max-w-2xl">
              <div className="space-y-16">
                {steps.map((item, index) => (
                  <div 
                    key={index} 
                    ref={el => stepRefs.current[index] = el}
                    className={`transition-all duration-700 ${
                      index === activeStep 
                        ? 'opacity-100 transform translate-x-0 scale-100' 
                        : index < activeStep 
                          ? 'opacity-30 transform -translate-x-8 scale-95' 
                          : 'opacity-30 transform translate-x-8 scale-95'
                    }`}
                  >
                    <div className="flex items-start gap-8">
                      {/* Contenido del paso */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-500 ${
                            index === activeStep 
                              ? 'border-white text-white' 
                              : 'border-gray-600 text-gray-400'
                          }`}>
                            {item.icon}
                          </div>
                          <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                            index === activeStep ? 'text-white' : 'text-gray-400'
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                        <p className={`leading-relaxed transition-colors duration-500 ${
                          index === activeStep ? 'text-gray-200' : 'text-gray-500'
                        }`}>
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Número del paso */}
                      <div className={`text-6xl font-bold leading-none transition-colors duration-500 ${
                        index === activeStep ? 'text-white' : 'text-gray-600'
                      }`}>
                        {item.step}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Efecto de fondo parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 pointer-events-none"></div>
    </section>
  );
}

export default Process;
