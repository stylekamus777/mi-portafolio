export default function Home() {
  const proyectos = [
    {
      id: "crm",
      titulo: "Sistema CRM",
      descripcion: "Gestión avanzada de clientes, embudos de venta y seguimiento de leads en tiempo real.",
      icono: "💼",
      color: "border-blue-500 hover:bg-blue-50/50"
    },
    {
      id: "pdv",
      titulo: "Punto de Venta (POS)",
      descripcion: "Control de inventario automatizado, registro de ventas y facturación rápida para comercios.",
      icono: "🛒",
      color: "border-green-500 hover:bg-green-50/50"
    },
    {
      id: "airbnb",
      titulo: "Autogestión Airbnb (IA)",
      descripcion: "Plataforma de hospedaje con agentes autónomos de IA y skills integradas para atención a huéspedes.",
      icono: "🤖",
      color: "border-purple-500 hover:bg-purple-50/50"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado del Portafolio */}
        <header className="mb-16 border-b border-slate-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Mi Portafolio de Aplicaciones Inteligentes
          </h1>
          <p className="text-slate-400 text-lg">
            Bienvenido a mi ecosistema de proyectos integrados. Desarrollado desde cero con Next.js, Tailwind CSS e Inteligencia Artificial.
          </p>
        </header>

        {/* Rejilla de Proyectos */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proyectos.map((proy) => (
            <div
              key={proy.id}
              className={`p-6 bg-slate-800/50 rounded-xl border-2 transition-all duration-300 cursor-pointer ${proy.color}`}
            >
              <div className="text-4xl mb-4">{proy.icono}</div>
              <h2 className="text-2xl font-bold mb-2">{proy.titulo}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{proy.descripcion}</p>
              
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300">
                Explorar módulo &rarr;
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
