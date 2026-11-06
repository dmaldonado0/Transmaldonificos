
const imagenHero =
  "https://images.unsplash.com/photo-1761993600321-757e086491c0?auto=format&fit=crop&fm=jpg&q=85&w=2400";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[850px] w-full items-center overflow-hidden bg-[#090909] pt-20 text-white sm:min-h-[820px] lg:min-h-[850px]"
    >
      {/* FOTOGRAFÍA DE FONDO */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[position:58%_center] md:bg-center"
        style={{
          backgroundImage: `url("${imagenHero}")`,
        }}
      />

      {/* CAPAS OSCURAS */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/25" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080808]/95 via-transparent to-[#080808]/30" />

      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* DETALLE ROJO LATERAL */}
      <div className="absolute left-0 top-1/2 hidden h-40 w-1 -translate-y-1/2 bg-[#C8102E] lg:block" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="max-w-[850px]">
          {/* ETIQUETA */}
          <div className="mb-7 flex items-center gap-3 sm:mb-9">
            <span className="h-[2px] w-10 bg-[#C8102E] sm:w-14" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-200 sm:text-xs sm:tracking-[0.4em]">
              Transporte especializado
            </p>
          </div>

          {/* TÍTULO */}
          <h1 className="text-[clamp(2.8rem,7.2vw,6.5rem)] font-black leading-[0.98] tracking-[-0.055em]">
            MOVEMOS
            <br />
            VEHÍCULOS.
            <br />

            <span className="text-[#D10F35]">
              CONECTAMOS
            </span>

            <br />
            DESTINOS.
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8">
            Soluciones de transporte especializado de vehículos.
            Seguridad, compromiso y respaldo en cada recorrido.
          </p>

          {/* BOTONES */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#contacto"
              className="flex min-h-[58px] w-full items-center justify-center gap-3 bg-[#C8102E] px-7 py-4 text-center text-xs font-black tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A50D25] sm:w-auto sm:min-w-[220px]"
            >
              COTIZAR TRANSPORTE
              <span className="text-lg">→</span>
            </a>

            <a
              href="#servicios"
              className="flex min-h-[58px] w-full items-center justify-center border border-white/70 bg-black/20 px-7 py-4 text-center text-xs font-black tracking-wide text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C8102E] hover:bg-[#C8102E] sm:w-auto sm:min-w-[205px]"
            >
              CONOCER SERVICIOS
            </a>
          </div>

          {/* INDICADORES */}
          <div className="mt-12 grid max-w-[550px] grid-cols-3 border-t border-white/25 pt-6 sm:mt-16 sm:pt-8">
            {[
              {
                numero: "01",
                texto: "COMPROMISO",
              },
              {
                numero: "02",
                texto: "SEGURIDAD",
              },
              {
                numero: "03",
                texto: "CONFIANZA",
              },
            ].map((item) => (
              <div key={item.numero} className="flex flex-col gap-2">
                <span className="text-3xl font-black tracking-tight sm:text-4xl">
                  {item.numero}
                </span>

                <span className="text-[8px] font-bold tracking-[0.16em] text-gray-400 sm:text-[10px] sm:tracking-[0.22em]">
                  {item.texto}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LÍNEA INFERIOR */}
      <div className="absolute bottom-0 left-0 h-[4px] w-24 bg-[#C8102E] sm:w-36" />
    </section>
  );
}
