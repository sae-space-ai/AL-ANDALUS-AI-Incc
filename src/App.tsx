import { useState, useEffect } from 'react';

// ==================== COMPONENTS ====================

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#006B3F] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#006B3F]" fill="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor"/>
                <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="7" y1="2" x2="7" y2="4" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="17" y1="2" x2="17" y2="4" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="7" y1="20" x2="7" y2="22" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="17" y1="20" x2="17" y2="22" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="2" y1="7" x2="4" y2="7" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="2" y1="17" x2="4" y2="17" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="20" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="20" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-wide">AL-ANDALUS AI</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Inicio</a>
            <a href="#productos" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Productos</a>
            <a href="#filosofia" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Filosofía</a>
            <a href="#empresa" className="text-white/90 hover:text-white transition-colors text-sm font-medium">Empresa</a>
            <a href="#contacto" className="bg-white/10 border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all">Contacto</a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/20">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#inicio" onClick={() => setMenuOpen(false)} className="text-white/90 hover:text-white px-2 py-1">Inicio</a>
              <a href="#productos" onClick={() => setMenuOpen(false)} className="text-white/90 hover:text-white px-2 py-1">Productos</a>
              <a href="#filosofia" onClick={() => setMenuOpen(false)} className="text-white/90 hover:text-white px-2 py-1">Filosofía</a>
              <a href="#empresa" onClick={() => setMenuOpen(false)} className="text-white/90 hover:text-white px-2 py-1">Empresa</a>
              <a href="#contacto" onClick={() => setMenuOpen(false)} className="text-white/90 hover:text-white px-2 py-1">Contacto</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#004d2c] via-[#006B3F] to-[#00894f]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <svg viewBox="0 0 48 48" className="w-14 h-14 text-[#006B3F]" fill="currentColor">
              <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect x="16" y="16" width="16" height="16" rx="2" fill="currentColor"/>
              <line x1="24" y1="4" x2="24" y2="8" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="24" y1="40" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="4" y1="24" x2="8" y2="24" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="40" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="14" y1="4" x2="14" y2="8" stroke="currentColor" strokeWidth="2"/>
              <line x1="34" y1="4" x2="34" y2="8" stroke="currentColor" strokeWidth="2"/>
              <line x1="14" y1="40" x2="14" y2="44" stroke="currentColor" strokeWidth="2"/>
              <line x1="34" y1="40" x2="34" y2="44" stroke="currentColor" strokeWidth="2"/>
              <line x1="4" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="2"/>
              <line x1="4" y1="34" x2="8" y2="34" stroke="currentColor" strokeWidth="2"/>
              <line x1="40" y1="14" x2="44" y2="14" stroke="currentColor" strokeWidth="2"/>
              <line x1="40" y1="34" x2="44" y2="34" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          AL-ANDALUS AI
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light tracking-widest mb-8">
          INTELLIGENCE · ENGINEERING · EUROPE
        </p>
        
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Inteligencia artificial de nueva generación para la optimización de recursos computacionales y el análisis visual avanzado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#productos" className="bg-white text-[#006B3F] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Nuestros Productos
          </a>
          <a href="#filosofia" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
            Nuestra Filosofía
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function ProductCard({ title, subtitle, description, features, icon, status }: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  status: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      <div className="bg-gradient-to-br from-[#006B3F] to-[#00894f] p-6">
        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/70 text-sm mt-1">{subtitle}</p>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
              <svg className="w-4 h-4 text-[#006B3F] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#006B3F] bg-[#006B3F]/10 px-3 py-1 rounded-full">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section id="productos" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#006B3F] font-semibold text-sm tracking-wider uppercase">Ecosistema Tecnológico</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">Nuestros Productos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tres pilares tecnológicos que trabajan en armonía para ofrecer soluciones de inteligencia artificial de alto rendimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard
            title="ANDALUS RE"
            subtitle="Motor de IA Base"
            description="Sistema de inteligencia artificial de código abierto que constituye la base tecnológica de toda la plataforma."
            features={[
              "Código abierto y auditable",
              "APIs y módulos extensibles",
              "CLI y MCP integrados",
              "Documentación completa",
              "Multiidioma"
            ]}
            status="En desarrollo"
            icon={
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <ProductCard
            title="JOULE Governor"
            subtitle="Optimización de Costes IA"
            description="Motor de optimización que reduce el gasto computacional de modelos de inteligencia artificial sin comprometer la calidad."
            features={[
              "Optimización de costes en tiempo real",
              "Gestión inteligente de recursos",
              "Compatible con múltiples modelos",
              "Métricas de ahorro verificables",
              "Integración con REA"
            ]}
            status="Referencia declarada"
            icon={
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <ProductCard
            title="JOULE SENSE 360°"
            subtitle="Análisis Visual Avanzado"
            description="Sistema de análisis visual basado en OpenCV que proporciona capacidades de percepción artificial en 360 grados."
            features={[
              "Análisis visual 360°",
              "Basado en OpenCV",
              "Detección y clasificación",
              "Procesamiento en tiempo real",
              "Integración multimodal"
            ]}
            status="En desarrollo"
            icon={
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section id="filosofia" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#006B3F] font-semibold text-sm tracking-wider uppercase">Nuestra Filosofía</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              El Contrapunto de Bach
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nuestra orquestación de agentes se inspira en el contrapunto musical de Johann Sebastian Bach. Cada voz es independiente pero contribuye a una armonía superior.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Como en una fuga bachiana, cada agente funciona como un especialista que entra en el momento preciso, ejecuta su parte con maestría y se integra en el resultado colectivo.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Especialización", desc: "Cada agente es un experto en su dominio" },
                { title: "Activación Selectiva", desc: "Solo los agentes necesarios trabajan en cada tarea" },
                { title: "Sin Redundancia", desc: "Cero operaciones duplicadas, máxima eficiencia" },
                { title: "Resultados Verificables", desc: "Cada salida puede comprobarse independientemente" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#006B3F]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#006B3F] font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#006B3F] to-[#00894f] rounded-3xl p-8 md:p-12 text-white">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Economía de Recursos</p>
                    <p className="text-white/70 text-sm">Máximo resultado con mínimo consumo</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Seguridad</p>
                    <p className="text-white/70 text-sm">Protección en cada capa del sistema</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Calidad</p>
                    <p className="text-white/70 text-sm">Excelencia técnica en cada componente</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Eficiencia</p>
                    <p className="text-white/70 text-sm">Reutilización y optimización continua</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#006B3F]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#006B3F]/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#006B3F] font-semibold text-sm tracking-wider uppercase">Arquitectura</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">Capas del Sistema</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Arquitectura modular en capas independientes que permite evolucionar cada componente sin afectar al conjunto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            { layer: "Orquestación", desc: "Coordinación de agentes especializados", color: "from-[#004d2c] to-[#006B3F]", status: "Propuesto" },
            { layer: "JOULE Governor + SENSE 360°", desc: "Optimización de costes y análisis visual", color: "from-[#006B3F] to-[#00894f]", status: "En desarrollo" },
            { layer: "Consola Empresarial", desc: "Panel de control unificado", color: "from-[#00894f] to-[#00a85f]", status: "Propuesto" },
            { layer: "Backend / APIs / Web", desc: "Infraestructura y servicios", color: "from-[#00a85f] to-[#20c77f]", status: "En desarrollo" },
            { layer: "REA — Base", desc: "Motor de IA de código abierto", color: "from-[#20c77f] to-[#40e79f]", status: "Existente" },
          ].map((item, i) => (
            <div key={i} className={`bg-gradient-to-r ${item.color} rounded-xl p-5 md:p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold">{item.layer}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
                <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full self-start">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanySection() {
  return (
    <section id="empresa" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#006B3F] font-semibold text-sm tracking-wider uppercase">La Empresa</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              AL-ANDALUS AI
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Empresa tecnológica proyectada que opera en el ámbito de la inteligencia artificial aplicada a la ingeniería de software y la optimización de recursos computacionales.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Nuestro compromiso es con la excelencia técnica, la transparencia y la soberanía tecnológica europea.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-[#006B3F]">3</p>
                <p className="text-gray-600 text-sm mt-1">Productos</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-[#006B3F]">10</p>
                <p className="text-gray-600 text-sm mt-1">Fases</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-[#006B3F]">∞</p>
                <p className="text-gray-600 text-sm mt-1">Posibilidades</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-[#006B3F]">EU</p>
                <p className="text-gray-600 text-sm mt-1">Europa</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Principios Fundacionales</h3>
              <div className="space-y-5">
                {[
                  { letter: "I", word: "Intelligence", desc: "Soluciones basadas en IA de última generación" },
                  { letter: "E", word: "Engineering", desc: "Rigor técnico y calidad de código" },
                  { letter: "E", word: "Europe", desc: "Compromiso con estándares europeos" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#006B3F] rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">{item.letter}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{item.word}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Reglas de Desarrollo</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Investigar antes",
                    "No inventar",
                    "Conservar código",
                    "Compatibilidad",
                    "Pruebas reales",
                    "Documentar"
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#006B3F] rounded-full"></div>
                      {rule}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusSection() {
  return (
    <section className="py-20 md:py-32 bg-[#006B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-white/70 font-semibold text-sm tracking-wider uppercase">Estado del Proyecto</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Hoja de Ruta</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Progreso actual del desarrollo de AL-ANDALUS AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { phase: "FASE 0", title: "Memoria Maestra", status: "done" },
            { phase: "FASE 1", title: "Auditoría REA", status: "pending" },
            { phase: "FASE 2", title: "Identidad Visual", status: "pending" },
            { phase: "FASE 3", title: "Web Completa", status: "pending" },
            { phase: "FASE 4", title: "Consola", status: "pending" },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-5 ${item.status === 'done' ? 'bg-white text-[#006B3F]' : 'bg-white/10 text-white border border-white/20'}`}>
              <p className={`text-xs font-bold tracking-wider ${item.status === 'done' ? 'text-[#006B3F]/60' : 'text-white/60'}`}>{item.phase}</p>
              <p className="font-semibold mt-1">{item.title}</p>
              <div className="mt-3 flex items-center gap-2">
                {item.status === 'done' ? (
                  <>
                    <svg className="w-4 h-4 text-[#006B3F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium">Completada</span>
                  </>
                ) : (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 rounded-full"></div>
                    <span className="text-xs text-white/60">Pendiente</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Fases 5-10: Backend, Integración REA, JOULE Governor, SENSE 360°, Orquestación y Distribución.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#006B3F] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-bold text-lg">AL-ANDALUS AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              INTELLIGENCE · ENGINEERING · EUROPE.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Empresa proyectada. EU Inc. pendiente de constitución legal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>ANDALUS RE</li>
              <li>JOULE Compute Governor</li>
              <li>JOULE SENSE 360°</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Proyecto</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Repositorio REA</li>
              <li>Documentación</li>
              <li>Filosofía</li>
              <li>Estado del Proyecto</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 AL-ANDALUS AI. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Empresa proyectada — No constituida legalmente
          </p>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <PhilosophySection />
      <ArchitectureSection />
      <CompanySection />
      <StatusSection />
      <Footer />
    </div>
  );
}
