
import Link from "next/link";

const categorias = [
  {
    numero: "01",
    titulo: "VEHÍCULOS",
    descripcion: "Automóviles, camionetas y motocicletas.",
  },
  {
    numero: "02",
    titulo: "MAQUINARIA",
    descripcion: "Equipos pesados y maquinaria especializada.",
  },
  {
    numero: "03",
    titulo: "PROCESOS DE CARGUE",
    descripcion: "Así preparamos y aseguramos cada transporte.",
  },
  {
    numero: "04",
    titulo: "EN CARRETERA",
    descripcion: "Nuestros recorridos y operaciones.",
  },
];

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      {/* ENCABEZADO */}
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

      {/* CATEGORÍAS */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              Explora nuestro trabajo
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              CADA DETALLE CUENTA.
            </h2>
          </div>

          {/* GALERÍA DE FOTOGRAFÍAS */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <article className="group overflow-hidden border border-white/10 bg-[#141414]">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/galeria/Fotos/img1.jpeg"
                  alt="Operación de transporte TransMaldonificos"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  01 · TRANSPORTE ESPECIALIZADO
                </span>

                <h3 className="mt-3 text-xl font-black">
                  NUESTRO TRABAJO EN ACCIÓN.
                </h3>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* CONTACTO */}
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

      {/* VOLVER */}
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
