
export default function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="bg-[#111111] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ENCABEZADO */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#C8102E]" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gray-400">
              Nuestra ubicación
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            ESTAMOS DONDE
            <br />
            <span className="text-[#C8102E]">NOS NECESITAS.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Conoce nuestra ubicación y encuentra nuestra sede en
            Bogotá, Colombia. Estamos listos para coordinar tu
            próximo servicio de transporte.
          </p>
        </div>

        {/* CONTENIDO */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* INFORMACIÓN DE LA SEDE */}
          <div className="flex flex-col justify-between border border-white/10 bg-[#191919] p-8 md:p-10">

            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#C8102E] text-2xl text-[#C8102E]">
                T
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                TransMaldonificos · Bogotá D.C.
              </span>

              <h3 className="mt-5 text-2xl font-black">
                Nuestra sede
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Avenida Centenario #96B-87, Interior 2.
                <br />
                Parqueadero Punto 96.
                <br />
                Bogotá D.C. · Colombia.
              </p>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                Atención
              </span>

              <p className="mt-4 text-lg font-bold">
                Lunes a domingo
              </p>

              <p className="mt-2 text-gray-400">
                7:00 a. m. – 6:00 p. m.
              </p>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                Coordinación de servicios y atención de solicitudes
                de transporte.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/Transmaldonado/@4.6647209,-74.1446532,21z/data=!4m6!3m5!1s0x8e3f9df44d8bc3a7:0x2caa4b397610f5a3!8m2!3d4.6647247!4d-74.1445229!16s%2Fg%2F11zyzpp9xn?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex w-fit items-center gap-3 bg-[#C8102E] px-7 py-4 text-sm font-bold uppercase tracking-wider transition hover:bg-[#A50D25]"
            >
              Ver ubicación en Google Maps
              <span>↗</span>
            </a>
          </div>

          {/* MAPA */}
          <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-[#222222]">

            <iframe
              title="Ubicación de TransMaldonificos en Bogotá"
              src="https://maps.google.com/maps?q=4.6647247,-74.1445229&z=21&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "420px",
                display: "block",
                filter: "grayscale(100%) contrast(1.05)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* MARCADOR PERSONALIZADO */}
            <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-3 border border-white/10 bg-[#111111]/95 px-5 py-4 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center bg-[#C8102E] text-lg font-black text-white">
                T
              </div>

              <div>
                <p className="text-sm font-black text-white">
                  TransMaldonificos<span className="text-[#C8102E]">.</span>
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Bogotá D.C. · Colombia
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* FRANJA INFERIOR */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-500">
            Transporte especializado · Bogotá · Colombia
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
            CONECTAMOS DESTINOS
            <span className="ml-2 text-[#C8102E]">●</span>
          </p>
        </div>

      </div>
    </section>
  );
}
