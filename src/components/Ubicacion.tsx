
"use client";

import dynamic from "next/dynamic";

const MapaUbicacion = dynamic(
  () => import("@/components/MapaUbicacion"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[420px] items-center justify-center bg-[#eeeeee] text-sm font-bold text-gray-500">
        Cargando mapa...
      </div>
    ),
  }
);

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-[#111111] py-24 text-white">
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
            Encuentra nuestra sede en Bogotá, Colombia.
            Estamos listos para coordinar tu próximo servicio
            de transporte.
          </p>
        </div>

        {/* INFORMACIÓN Y MAPA */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* TARJETA DE INFORMACIÓN */}
          <div className="flex flex-col justify-between border border-white/10 bg-[#191919] p-8 md:p-10">

            <div>
              <div className="mb-8 flex h-20 w-20 items-center justify-center border border-black/20 bg-white p-2">
                <img
                  src="/imagenes/Transmaldonificosimagen.png"
                  alt="Logo TransMaldonificos"
                  className="h-full w-full object-contain"
                />
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

            {/* HORARIO */}
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

            {/* BOTÓN CÓMO LLEGAR */}
            <a
              href="https://www.google.com/maps/place/Transmaldonado/@4.6647209,-74.1446532,21z/data=!4m6!3m5!1s0x8e3f9df44d8bc3a7:0x2caa4b397610f5a3!8m2!3d4.6647247!4d-74.1445229!16s%2Fg%2F11zyzpp9xn?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex w-fit items-center gap-4 bg-[#C8102E] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A50D25] hover:shadow-[0_8px_25px_rgba(200,16,46,0.25)]"
            >
              {/* ICONO ESTILO GOOGLE MAPS */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M24 3C14.6 3 7 10.4 7 19.5C7 31.2 24 45 24 45S41 31.2 41 19.5C41 10.4 33.4 3 24 3Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M24 3C14.6 3 7 10.4 7 19.5C7 23.5 9.1 28.2 12.1 32.6L24 18.5V3Z"
                  fill="#4285F4"
                />
                <path
                  d="M24 3C33.4 3 41 10.4 41 19.5C41 23.5 38.9 28.2 35.9 32.6L24 18.5V3Z"
                  fill="#EA4335"
                />
                <path
                  d="M12.1 32.6C16.6 39.2 24 45 24 45S31.4 39.2 35.9 32.6L24 18.5L12.1 32.6Z"
                  fill="#34A853"
                />
                <path
                  d="M24 18.5L35.9 32.6C38.9 28.2 41 23.5 41 19.5C41 10.4 33.4 3 24 3V18.5Z"
                  fill="#FBBC04"
                  opacity="0.95"
                />
                <circle cx="24" cy="19" r="7" fill="white" />
                <circle cx="24" cy="19" r="4" fill="#4285F4" />
              </svg>

              <span>Cómo llegar</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

          </div>

          {/* MAPA */}
          <div className="relative min-h-[420px] overflow-hidden border-2 border-black bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
            <MapaUbicacion />

            <div className="pointer-events-none absolute bottom-5 left-5 z-[500] flex items-center gap-3 border border-white/10 bg-[#111111]/95 px-5 py-4 shadow-xl">
              <span className="h-3 w-3 animate-pulse rounded-full bg-[#C8102E]" />

              <div>
                <p className="text-sm font-black text-white">
                  TransMaldonificos.
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Nuestra sede · Bogotá D.C.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* PIE DE SECCIÓN */}
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
