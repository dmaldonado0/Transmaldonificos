
import Link from "next/link";

// ==========================================
// GALERÍA DE FOTOGRAFÍAS (20 ESPACIOS)
// ==========================================

const fotos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/galeria/Fotos/img (${i + 1}).jpeg`,
  alt: `Fotografía ${i + 1} de TransMaldonificos`,
}));

// ==========================================
// GALERÍA DE VIDEOS (10 ESPACIOS)
// ==========================================

const videos = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/galeria/Videos/video (${i + 1}).mp4`,
}));

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      {/* ================================== */}
      {/* ENCABEZADO */}
      {/* ================================== */}

      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-36 sm:px-10 lg:px-16">

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border-[45px] border-[#C8102E]/10" />

        <div className="relative mx-auto max-w-[1400px]">

          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-12 bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-gray-400">
              Nuestro trabajo habla por nosotros
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            EXPERIENCIAS
            <br />
            EN <span className="text-[#C8102E]">MOVIMIENTO.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Cada transporte tiene una historia. Conoce nuestros vehículos,
            procesos de cargue, operaciones y recorridos.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            <span className="border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider">
              Fotografías reales
            </span>

            <span className="border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider">
              Videos de operación
            </span>

            <span className="border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-wider">
              Transporte especializado
            </span>

          </div>

        </div>
      </section>

      {/* ================================== */}
      {/* GALERÍA DE FOTOGRAFÍAS */}
      {/* ================================== */}

      <section className="px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              Registro fotográfico
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              NUESTRO TRABAJO.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
              Una muestra de nuestros vehículos, maquinaria, procesos
              de cargue y operaciones de transporte.
            </p>

          </div>

          {/* GRID DE 20 FOTOGRAFÍAS */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {fotos.map((foto) => (

              <article
                key={foto.id}
                className="group overflow-hidden border border-white/10 bg-[#141414]"
              >

                <div className="relative aspect-[4/3] overflow-hidden bg-[#202020]">

                  <img
                    src={foto.src}
                    alt={foto.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />

                  <span className="absolute bottom-4 left-4 text-xs font-bold tracking-[0.2em] text-white">
                    FOTO  {String(foto.id).padStart(2, "0")}
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ================================== */}
      {/* GALERÍA DE VIDEOS */}
      {/* ================================== */}

      <section className="border-t border-white/10 bg-[#101010] px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              Operaciones en movimiento
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              TRANSPORTE EN ACCIÓN.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
              Conoce cómo desarrollamos nuestras operaciones,
              desde el cargue hasta la entrega de cada transporte.
            </p>

          </div>

          {/* GRID DE 10 VIDEOS */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {videos.map((video) => (

              <article
                key={video.id}
                className="group overflow-hidden border border-white/10 bg-[#181818]"
              >

                <div className="aspect-video overflow-hidden bg-black">

                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />

                </div>

                <div className="flex items-center justify-between p-5">

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                      Video  {String(video.id).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-sm font-black uppercase tracking-wide">
                      Operaciones TransMaldonificos
                    </h3>
                  </div>

                  <span className="text-xl text-[#C8102E]">
                    ▶
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ================================== */}
      {/* CONTACTO */}
      {/* ================================== */}

      <section className="border-t border-white/10 bg-[#C8102E] px-6 py-16 sm:px-10">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/75">
              ¿Necesitas transportar algo?
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              HAGAMOS TU PRÓXIMO TRANSPORTE.
            </h2>

          </div>

          <a
            href="https://wa.me/573219467913"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-4 bg-white px-7 py-5 text-sm font-black uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
          >
            Cotizar por WhatsApp
            <span>↗</span>
          </a>

        </div>

      </section>

      {/* ================================== */}
      {/* FOOTER */}
      {/* ================================== */}

      <footer className="bg-black px-6 py-8 text-center">

        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 transition hover:text-[#C8102E]"
        >
          ← Volver a TransMaldonificos
        </Link>

      </footer>

    </main>
  );
}
