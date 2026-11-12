
const servicios = [
  {
    numero: "01",
    titulo: "AUTOMÓVILES",
    descripcion:
      "Carros nuevos, usados, deportivos, clásicos y vehículos siniestrados o averiados.",
    detalle: "PARTICULARES · COMERCIALES · SINIESTRADOS",
    imagen:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85",
  },
  {
    numero: "02",
    titulo: "CAMIONETAS Y VEHÍCULOS ESPECIALES",
    descripcion:
      "Camionetas, vehículos 4x4, blindados, ambulancias, turbos y vehículos comerciales.",
    detalle: "4X4 · BLINDADOS · AMBULANCIAS · TURBOS",
    imagen:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1100&q=85",
  },
  {
    numero: "03",
    titulo: "MOTOS Y CUATRIMOTOS",
    descripcion:
      "Transporte de motocicletas, cuatrimotos, ATV y vehículos recreativos.",
    detalle: "MOTOCICLETAS · ATV · CUATRIMOTOS",
    imagen:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1100&q=85",
  },
  {
    numero: "04",
    titulo: "MAQUINARIA PESADA",
    descripcion:
      "Excavadoras, retroexcavadoras, bulldozers, cargadores y maquinaria de construcción.",
    detalle: "CONSTRUCCIÓN · MOVIMIENTO DE TIERRA",
    imagen:
      "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=1100&q=85",
  },
  {
    numero: "05",
    titulo: "EQUIPOS INDUSTRIALES",
    descripcion:
      "Generadores, compresores, maquinaria industrial y equipos de grandes dimensiones.",
    detalle: "INDUSTRIA · EQUIPOS · MAQUINARIA",
    imagen:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85",
  },
  {
    numero: "06",
    titulo: "CARGA ESPECIAL",
    descripcion:
      "Estructuras, equipos pesados y cargas que requieren soluciones especiales de transporte.",
    detalle: "CARGA PESADA · SOBREDIMENSIONADA",
    imagen:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1100&q=85",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#111111] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* ENCABEZADO */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#C8102E]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                Nuestros servicios
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              TRANSPORTAMOS
              <br />
              MUCHO MÁS QUE
              <br />
              <span className="text-[#C8102E]">VEHÍCULOS.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-gray-400 sm:text-lg">
            Desde vehículos particulares hasta maquinaria pesada.
            Conectamos destinos con soluciones de transporte
            adaptadas a las características de cada carga.
          </p>
        </div>

        {/* GALERÍA DE SERVICIOS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <article
              key={servicio.numero}
              className="group relative flex min-h-[430px] flex-col justify-end overflow-hidden border border-white/10 bg-[#202020] sm:min-h-[470px]"
            >
              {/* FOTOGRAFÍA */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url("${servicio.imagen}")`,
                }}
              />

              {/* OSCURECIMIENTO */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10 transition duration-500 group-hover:from-black group-hover:via-black/75" />

              {/* DETALLE SUPERIOR */}
              <div className="absolute left-6 top-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-white/40 bg-black/30 text-xs font-black backdrop-blur-sm">
                  {servicio.numero}
                </span>

                <span className="h-[2px] w-10 bg-[#C8102E]" />
              </div>

              {/* CONTENIDO */}
              <div className="relative z-10 p-6 sm:p-7">
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E51B40] sm:text-[10px]">
                  {servicio.detalle}
                </p>

                <h3 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                  {servicio.titulo}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-gray-300">
                  {servicio.descripcion}
                </p>

                <a
                  href="#contacto"
                  className="mt-7 inline-flex items-center gap-3 border-b border-[#C8102E] pb-2 text-[11px] font-black uppercase tracking-wider text-white transition hover:gap-5 hover:text-[#E51B40]"
                >
                  Solicitar cotización
                  <span className="text-lg">↗</span>
                </a>
              </div>

              {/* DETALLE INFERIOR */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C8102E] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* NOTA Y BOTÓN INFERIORES */}
        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8">

          {/* NOTA */}
          <p className="mx-auto max-w-3xl text-center text-xs leading-6 text-gray-500 sm:text-sm">
            Cada servicio se evalúa según el peso, dimensiones, condiciones
            de transporte, capacidad del equipo y requisitos de la ruta.
          </p>

          {/* BOTÓN GALERÍA CENTRADO */}
          <div className="flex w-full justify-center">
            <a
              href="/galeria"
              className="group inline-flex items-center justify-center gap-4 border border-white/30 bg-white/5 px-10 py-5 text-sm font-black uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E] hover:bg-[#C8102E] hover:shadow-[0_0_25px_rgba(200,16,46,0.25)] md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>

              <span>VER GALERÍA</span>

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
