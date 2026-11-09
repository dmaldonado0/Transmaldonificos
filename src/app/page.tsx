
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Ubicacion from "@/components/Ubicacion";
import RedesSociales from "@/components/RedesSociales";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full overflow-hidden">
        <Hero />

        {/* SERVICIOS */}
        <Servicios />

        {/* QUIÉNES SOMOS */}
<section
  id="quienes-somos"
  className="bg-[#111111] px-6 py-28 text-white md:px-10"
>
  <div className="mx-auto max-w-7xl">
    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
      Conoce nuestra empresa
    </span>

    <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
      SOMOS TRANSMALDONIFICOS.
      <span className="text-[#C8102E]">
        {" "}MOVEMOS LO QUE IMPORTA.
      </span>
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
      Somos una empresa enfocada en brindar soluciones de
      transporte especializado para vehículos, maquinaria
      y diferentes tipos de carga. Trabajamos en la
      coordinación de cada operación, buscando ofrecer
      alternativas adaptadas a las necesidades de nuestros
      clientes.
    </p>

    <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
      Nuestra visión es construir relaciones comerciales
      basadas en la confianza, el compromiso y la atención
      personalizada.
    </p>
  </div>
</section>

{/* ¿POR QUÉ ELEGIRNOS? */}
<section
  id="porque-elegirnos"
  className="bg-[#191919] px-6 py-28 text-white md:px-10"
>
  <div className="mx-auto max-w-7xl">

    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
      Nuestra propuesta de valor
    </span>

    <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
      ¿POR QUÉ ELEGIR
      <span className="text-[#C8102E]"> TRANSMALDONIFICOS?</span>
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
      Nos enfocamos en ofrecer soluciones de transporte
      organizadas, atención cercana y compromiso en cada
      operación.
    </p>

    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icono: "01",
          titulo: "SOLUCIONES ESPECIALIZADAS",
          descripcion:
            "Alternativas de transporte para diferentes tipos de vehículos, maquinaria y carga.",
        },
        {
          icono: "02",
          titulo: "COORDINACIÓN",
          descripcion:
            "Organización de cada etapa del servicio según las características de la operación.",
        },
        {
          icono: "03",
          titulo: "ATENCIÓN PERSONALIZADA",
          descripcion:
            "Comunicación directa para comprender y atender las necesidades de cada cliente.",
        },
        {
          icono: "04",
          titulo: "COMPROMISO",
          descripcion:
            "Responsabilidad y atención a los detalles durante la coordinación del transporte.",
        },
      ].map((item) => (
        <article
          key={item.icono}
          className="group border border-white/10 bg-[#111111] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#C8102E]"
        >
          <span className="text-sm font-black text-[#C8102E]">
            / {item.icono}
          </span>

          <h3 className="mt-10 text-xl font-black leading-tight">
            {item.titulo}
          </h3>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            {item.descripcion}
          </p>

          <div className="mt-8 h-1 w-10 bg-[#C8102E] transition-all duration-300 group-hover:w-full" />
        </article>
      ))}

    </div>

    <div className="mt-14 border-l-4 border-[#C8102E] pl-6">
      <p className="text-xl font-black leading-relaxed md:text-3xl">
        TU CARGA ES IMPORTANTE.
        <span className="text-[#C8102E]">
          {" "}NUESTRA RESPONSABILIDAD ES MOVILIZARLA CON COMPROMISO.
        </span>
      </p>
    </div>

  </div>
</section>

       
{/* COTIZACIÓN Y CONTACTO */}
<section
  id="contacto"
  className="relative isolate overflow-hidden bg-[#C8102E] px-6 py-24 text-white md:px-10 lg:py-32"
>
  {/* DETALLES DECORATIVOS */}
  <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full border-[50px] border-white/[0.06]" />
  <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full border-[50px] border-black/[0.06]" />

  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

    {/* TEXTO PRINCIPAL */}
    <div>
      <div className="mb-7 flex items-center gap-3">
        <span className="h-[2px] w-12 bg-white" />
        <span className="text-xs font-black uppercase tracking-[0.3em] text-white/80">
          Hablemos de tu próximo transporte
        </span>
      </div>

      <h2 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
        ¿QUÉ NECESITAS
        <br />
        TRANSPORTAR<span className="text-black">?</span>
      </h2>

      <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">
        Cuéntanos qué necesitas movilizar. Nuestro equipo
        te ayudará a coordinar una solución de transporte
        adaptada a las características de tu carga.
      </p>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-wider text-white/90">
        <span>Vehículos</span>
        <span>Maquinaria</span>
        <span>Carga especializada</span>
      </div>
    </div>

    {/* TARJETA DE COTIZACIÓN */}
    <div className="relative border border-white/20 bg-[#A50D25] p-7 shadow-2xl sm:p-10">

      <div className="absolute right-0 top-0 h-1 w-24 bg-white" />

      <span className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
        Solicita tu cotización
      </span>

      <h3 className="mt-5 text-3xl font-black leading-tight">
        TU PRÓXIMO TRANSPORTE
        <br />
        COMIENZA AQUÍ.
      </h3>

      <p className="mt-5 text-sm leading-7 text-white/75">
        Escríbenos directamente por WhatsApp y cuéntanos
        los detalles de tu servicio.
      </p>

      <a
        href="https://wa.me/573219467913?text=Hola%2C%20TransMaldonificos.%20Quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20transporte."
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-9 flex min-h-[64px] w-full items-center justify-between gap-4 bg-white px-6 py-4 text-[#111111] transition duration-300 hover:bg-[#111111] hover:text-white"
      >
        <span className="flex items-center gap-3">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.94 11.94 0 0 0 5.81 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.2-1.25-6.2-3.49-8.41ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.23-.37a9.9 9.9 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.98 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
          </svg>

          <span className="text-sm font-black uppercase tracking-wider">
            CONTACTAR POR WHATSAPP
          </span>
        </span>

        <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
          ↗
        </span>
      </a>

      <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-6">
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <p className="text-xs font-semibold text-white/80">
          Atención directa y personalizada.
        </p>
      </div>
    </div>
  </div>

  {/* FIRMA INFERIOR */}
  <div className="mx-auto mt-20 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/20 pt-7 sm:flex-row sm:items-center">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
      TRANSMALDONIFICOS.
    </p>

    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
      CONECTAMOS DESTINOS.
    </p>
  </div>
</section>


        {/* REDES SOCIALES */}
        <RedesSociales />

        {/* UBICACIÓN */}
        <Ubicacion />
      </main>

      <footer className="bg-black px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TransMaldonificos. Todos los derechos reservados.
      </footer>
    </>
  );
}
