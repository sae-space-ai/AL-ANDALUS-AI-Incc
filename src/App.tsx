import { useState, useEffect } from 'react';
import PartituraViva from './features/live-score/PartituraViva';

// ============================================================
// HOOK: useTheme
// ============================================================

function useTheme() {
  const [theme, setTheme] = useState<'andalucia-light' | 'andalucia-dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('andalusia-theme');
      if (stored === 'andalucia-light' || stored === 'andalucia-dark') {
        return stored;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'andalucia-dark';
      }
    }
    return 'andalucia-light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('andalusia-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'andalucia-light' ? 'andalucia-dark' : 'andalucia-light');
  };

  return { theme, toggleTheme };
}

// ============================================================
// COMPONENTE: Navbar
// ============================================================

function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--andalusia-surface)] shadow-md border-b border-[var(--andalusia-border)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            {/* Espacio reservado para anagrama oficial */}
            <div className="w-10 h-10 bg-[var(--andalusia-green)] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">AA</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-wide" style={{ color: 'var(--andalusia-text)' }}>
                AL-ANDALUS AI
              </span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:opacity-70 transition-opacity text-sm font-medium" style={{ color: 'var(--andalusia-text)' }}>
              Inicio
            </a>
            <a href="#productos" className="hover:opacity-70 transition-opacity text-sm font-medium" style={{ color: 'var(--andalusia-text)' }}>
              Productos
            </a>
            <a href="#filosofia" className="hover:opacity-70 transition-opacity text-sm font-medium" style={{ color: 'var(--andalusia-text)' }}>
              Filosofía
            </a>
            <a href="#partitura-viva" className="hover:opacity-70 transition-opacity text-sm font-medium" style={{ color: 'var(--andalusia-text)' }}>
              Partitura Viva
            </a>
            <a href="#acerca" className="hover:opacity-70 transition-opacity text-sm font-medium" style={{ color: 'var(--andalusia-text)' }}>
              Acerca de
            </a>
            
            {/* Toggle de tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:bg-[var(--andalusia-bg)]"
              aria-label="Cambiar tema"
            >
              {theme === 'andalucia-light' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--andalusia-text)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--andalusia-text)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" style={{ color: 'var(--andalusia-text)' }}>
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
          <div className="md:hidden pb-4 border-t" style={{ borderColor: 'var(--andalusia-border)' }}>
            <div className="flex flex-col gap-3 pt-4">
              <a href="#inicio" onClick={() => setMenuOpen(false)} className="hover:opacity-70" style={{ color: 'var(--andalusia-text)' }}>Inicio</a>
              <a href="#productos" onClick={() => setMenuOpen(false)} className="hover:opacity-70" style={{ color: 'var(--andalusia-text)' }}>Productos</a>
              <a href="#filosofia" onClick={() => setMenuOpen(false)} className="hover:opacity-70" style={{ color: 'var(--andalusia-text)' }}>Filosofía</a>
              <a href="#partitura-viva" onClick={() => setMenuOpen(false)} className="hover:opacity-70" style={{ color: 'var(--andalusia-text)' }}>Partitura Viva</a>
              <a href="#acerca" onClick={() => setMenuOpen(false)} className="hover:opacity-70" style={{ color: 'var(--andalusia-text)' }}>Acerca de</a>
              <button onClick={toggleTheme} className="text-left hover:opacity-70" style={{ color: 'var(--andalusia-text)' }}>
                Cambiar tema
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================================
// COMPONENTE: HeroSection
// ============================================================

function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--andalusia-bg)' }}>
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--andalusia-green) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Espacio reservado para anagrama oficial */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl" style={{ backgroundColor: 'var(--andalusia-green)' }}>
            <span className="text-white font-bold text-3xl">AA</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ color: 'var(--andalusia-text)' }}>
          AL-ANDALUS AI
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-widest mb-8" style={{ color: 'var(--andalusia-text-secondary)' }}>
          INTELLIGENCE · ENGINEERING · EUROPE
        </p>
        
        <p className="text-lg max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: 'var(--andalusia-text-secondary)' }}>
          Inteligencia artificial de nueva generación para la optimización de recursos computacionales y el análisis visual avanzado.
        </p>

        {/* Aviso sobre el anagrama */}
        <div className="mb-12 p-4 rounded-lg max-w-xl mx-auto" style={{ backgroundColor: 'var(--andalusia-surface)', border: '1px solid var(--andalusia-border)' }}>
          <p className="text-sm" style={{ color: 'var(--andalusia-text-tertiary)' }}>
            ⚠️ Anagrama oficial pendiente de integración. Espacio reservado para el archivo gráfico original aprobado por el propietario.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#productos" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ backgroundColor: 'var(--andalusia-green)', color: 'white' }}>
            Nuestros Productos
          </a>
          <a href="#acerca" className="px-8 py-4 rounded-xl font-semibold text-lg transition-all" style={{ border: '2px solid var(--andalusia-green)', color: 'var(--andalusia-green)' }}>
            Acerca de
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// COMPONENTE: ProductsSection
// ============================================================

function ProductsSection() {
  return (
    <section id="productos" className="py-20 md:py-32" style={{ backgroundColor: 'var(--andalusia-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: 'var(--andalusia-green)' }}>
            Ecosistema Tecnológico
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4" style={{ color: 'var(--andalusia-text)' }}>
            Nuestros Productos
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--andalusia-text-secondary)' }}>
            Tres pilares tecnológicos que trabajan en armonía para ofrecer soluciones de inteligencia artificial de alto rendimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "ANDALUS RE",
              subtitle: "Motor de IA Base",
              description: "Sistema de inteligencia artificial de código abierto basado en REA. Constituye la base tecnológica de toda la plataforma.",
              features: ["Código abierto y auditable", "APIs y módulos extensibles", "CLI y MCP integrados", "Documentación completa", "20 idiomas"],
              status: "Basado en REA upstream"
            },
            {
              title: "JOULE Governor",
              subtitle: "Optimización de Costes IA",
              description: "Motor de optimización que reduce el gasto computacional de modelos de inteligencia artificial sin comprometer la calidad.",
              features: ["Optimización de costes", "Gestión inteligente de recursos", "Compatible con múltiples modelos", "Métricas de ahorro", "Integración con REA"],
              status: "Referencia declarada"
            },
            {
              title: "JOULE SENSE 360°",
              subtitle: "Análisis Visual Avanzado",
              description: "Sistema de análisis visual basado en OpenCV que proporciona capacidades de percepción artificial en 360 grados.",
              features: ["Análisis visual 360°", "Basado en OpenCV", "Detección y clasificación", "Procesamiento en tiempo real", "Integración multimodal"],
              status: "En desarrollo"
            }
          ].map((product, i) => (
            <div key={i} className="andalusia-card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--andalusia-green)', opacity: 0.9 }}>
                <span className="text-white font-bold text-xl">{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--andalusia-text)' }}>{product.title}</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--andalusia-text-secondary)' }}>{product.subtitle}</p>
              <p className="mb-4 leading-relaxed" style={{ color: 'var(--andalusia-text-secondary)' }}>{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: 'var(--andalusia-text)' }}>
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--andalusia-green)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--andalusia-bg)', color: 'var(--andalusia-green)' }}>
                {product.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// COMPONENTE: PhilosophySection
// ============================================================

function PhilosophySection() {
  return (
    <section id="filosofia" className="py-20 md:py-32" style={{ backgroundColor: 'var(--andalusia-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: 'var(--andalusia-green)' }}>
            Nuestra Filosofía
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6" style={{ color: 'var(--andalusia-text)' }}>
            El Contrapunto de Bach
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--andalusia-text-secondary)' }}>
            Nuestra orquestación de agentes se inspira en el contrapunto musical de Johann Sebastian Bach. Cada voz es independiente pero contribuye a una armonía superior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Especialización", desc: "Cada agente es un experto en su dominio" },
            { title: "Activación Selectiva", desc: "Solo los agentes necesarios trabajan en cada tarea" },
            { title: "Sin Redundancia", desc: "Cero operaciones duplicadas, máxima eficiencia" },
            { title: "Resultados Verificables", desc: "Cada salida puede comprobarse independientemente" }
          ].map((item, i) => (
            <div key={i} className="andalusia-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--andalusia-green)', opacity: 0.1 }}>
                  <span className="font-bold" style={{ color: 'var(--andalusia-green)' }}>{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--andalusia-text)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--andalusia-text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enlace a Partitura Viva */}
        <div className="text-center mt-12">
          <a
            href="#partitura-viva"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--andalusia-green)', color: 'white' }}
          >
            Explorar Partitura Viva →
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// COMPONENTE: AboutSection
// ============================================================

function AboutSection() {
  return (
    <section id="acerca" className="py-20 md:py-32" style={{ backgroundColor: 'var(--andalusia-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: 'var(--andalusia-green)' }}>
              Acerca de
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6" style={{ color: 'var(--andalusia-text)' }}>
              ANDALUS RE
            </h2>
          </div>

          <div className="andalusia-card p-8 md:p-12">
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--andalusia-text)' }}>
              <strong>ANDALUS RE</strong> es una distribución tecnológica de <strong>AL-ANDALUS AI</strong> basada en el proyecto de código abierto <strong>REA</strong> (Reverse Engineer Anything).
            </p>

            <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--andalusia-bg)', border: '1px solid var(--andalusia-border)' }}>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--andalusia-text)' }}>Atribución y Procedencia</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--andalusia-text-secondary)' }}>
                El motor de ingeniería inversa procede del proyecto REA original, desarrollado por la comunidad de código abierto bajo licencia MIT.
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--andalusia-text-secondary)' }}>
                <li>• <strong>Repositorio original:</strong> https://github.com/morluto/rea</li>
                <li>• <strong>Licencia:</strong> MIT</li>
                <li>• <strong>Web oficial:</strong> https://rea.tools</li>
                <li>• <strong>Comunidad:</strong> 250,000+ estrellas en GitHub</li>
              </ul>
            </div>

            <h3 className="font-semibold text-xl mb-4" style={{ color: 'var(--andalusia-text)' }}>
              ¿Qué hemos desarrollado nosotros?
            </h3>
            <ul className="space-y-3 mb-8" style={{ color: 'var(--andalusia-text-secondary)' }}>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--andalusia-green)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Identidad corporativa andaluza:</strong> Marca, colores y diseño visual propios.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--andalusia-green)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>JOULE Compute Governor:</strong> Motor de optimización de costes (pendiente de localizar código original).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--andalusia-green)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>JOULE SENSE 360°:</strong> Sistema de análisis visual con OpenCV (pendiente de localizar código original).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--andalusia-green)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Plataforma de orquestación:</strong> Sistema de coordinación de agentes inspirado en el contrapunto de Bach.</span>
              </li>
            </ul>

            <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--andalusia-bg)', border: '1px solid var(--andalusia-border)' }}>
              <h3 className="font-semibold mb-3" style={{ color: 'var(--andalusia-text)' }}>Estado Jurídico</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--andalusia-text-secondary)' }}>
                AL-ANDALUS AI es una empresa proyectada. La figura jurídica <strong>EU Inc.</strong> está prevista pero no constituida. No se presentará la empresa como legalmente constituida hasta confirmación oficial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// COMPONENTE: Footer
// ============================================================

function Footer() {
  return (
    <footer className="py-12 border-t" style={{ backgroundColor: 'var(--andalusia-surface)', borderColor: 'var(--andalusia-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--andalusia-green)' }}>
                <span className="text-white font-bold text-sm">AA</span>
              </div>
              <span className="font-bold text-lg" style={{ color: 'var(--andalusia-text)' }}>AL-ANDALUS AI</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--andalusia-text-secondary)' }}>
              INTELLIGENCE · ENGINEERING · EUROPE
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--andalusia-text)' }}>Productos</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--andalusia-text-secondary)' }}>
              <li>ANDALUS RE (basado en REA)</li>
              <li>JOULE Compute Governor</li>
              <li>JOULE SENSE 360°</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--andalusia-text)' }}>Atribución</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--andalusia-text-secondary)' }}>
              <li>Motor REA: Código abierto MIT</li>
              <li>Repositorio: github.com/morluto/rea</li>
              <li>Web oficial: rea.tools</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center" style={{ borderColor: 'var(--andalusia-border)' }}>
          <p className="text-sm" style={{ color: 'var(--andalusia-text-tertiary)' }}>
            © 2026 AL-ANDALUS AI. Empresa proyectada. EU Inc. pendiente de constitución legal.
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--andalusia-text-tertiary)' }}>
            ANDALUS RE es una distribución basada en REA (MIT License). Atribuciones completas en el repositorio original.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// COMPONENTE PRINCIPAL: App
// ============================================================

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen antialiased" style={{ backgroundColor: 'var(--andalusia-bg)', color: 'var(--andalusia-text)' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <ProductsSection />
      <PhilosophySection />
      <PartituraViva />
      <AboutSection />
      <Footer />
    </div>
  );
}
