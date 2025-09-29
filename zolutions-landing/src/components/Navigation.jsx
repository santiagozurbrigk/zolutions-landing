import { useState, useEffect } from 'react';

function Navigation() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'servicios', 'casos'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset para activar antes
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Verificar si estamos cerca del footer (últimos 200px del documento)
      if (scrollPosition + windowHeight >= documentHeight - 200) {
        setActiveSection('contacto');
        return;
      }
      
      // Buscar la sección activa desde la última hacia la primera
      let newActiveSection = null; // Sin sección activa por defecto
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Si estamos dentro de la sección
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
            newActiveSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'servicios', label: 'Servicios', href: '#servicios' },
    { id: 'casos', label: 'Casos de éxito', href: '#casos' },
    { id: 'contacto', label: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Zolutions" className="h-12 w-auto" />
          </div>
          <div className="hidden md:block">
            <div className="w-[600px] flex justify-around items-center">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
