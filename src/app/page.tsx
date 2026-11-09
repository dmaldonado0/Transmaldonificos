
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
  {/* DECORACIÓN DE FONDO */}
  <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full border-[50px] border-white/[0.06]" />
  <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full border-[50px] border-black/[0.06]" />

  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">

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

    {/* CAMIÓN CONTENEDOR: TODO ES UN SOLO BOTÓN */}
    <div className="w-full">

      <a
        href="https://wa.me/573219467913?text=Hola%2C%20TransMaldonificos.%20Quiero%20cotizar%20un%20servicio%20de%20transporte."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar transporte por WhatsApp"
        className="quote-truck-link group block w-full"
      >
        <svg
          viewBox="0 0 680 270"
          className="quote-truck-scene h-auto w-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Camión rojo con contenedor de cotización de TransMaldonificos"
        >

          {/* CARRETERA */}
          <path d="M10 226 H660" stroke="#777777" strokeWidth="7"/>
          <path d="M10 237 H660" stroke="#444444" strokeWidth="4"/>

          {/* CONTENEDOR CLICABLE */}
          <rect
            x="28"
            y="20"
            width="420"
            height="153"
            fill="#C8102E"
            stroke="white"
            strokeWidth="5"
            className="quote-container-shape"
          />

          {/* RELIEVES */}
          {Array.from({ length: 13 }).map((_, i) => (
            <path
              key={i}
              d={`M${48 + i * 31} 27 V166`}
              stroke="white"
              strokeOpacity=".25"
              strokeWidth="4"
            />
          ))}

          {/* TEXTO DEL CONTENEDOR */}
          <text
            x="238"
            y="78"
            textAnchor="middle"
            fill="white"
            fontSize="25"
            fontWeight="900"
            letterSpacing="1"
          >
            COTIZA TU
          </text>

          <text
            x="238"
            y="113"
            textAnchor="middle"
            fill="white"
            fontSize="29"
            fontWeight="900"
            letterSpacing=".5"
          >
            TRANSPORTE
          </text>

          <path
            d="M115 134 H360"
            stroke="white"
            strokeWidth="2"
            strokeOpacity=".8"
          />

          <text
            x="238"
            y="153"
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontWeight="bold"
            letterSpacing="2"
          >
            TRANSMALDONIFICOS
          </text>

          {/* PLATAFORMA */}
          <path d="M15 175 H466 V198 H15 Z" fill="#AAAAAA"/>
          <path d="M15 199 H466" stroke="#EEEEEE" strokeWidth="4"/>

          {/* CABINA */}
          <path
            d="M448 82 H555 L630 144 V198 H448 Z"
            fill="#C8102E"
            stroke="white"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* VENTANA */}
          <path
            d="M465 91 H550 L606 145 H465 Z"
            fill="#DDEBF1"
            stroke="white"
            strokeWidth="2"
          />

          {/* DETALLES */}
          <path d="M466 156 H625" stroke="white" strokeWidth="3"/>
          <rect x="618" y="169" width="9" height="12" rx="2" fill="#FFD166"/>

          {/* RUEDAS */}
          <g className="quote-scene-wheel">
            <circle cx="115" cy="203" r="23" fill="#111111" stroke="white" strokeWidth="5"/>
            <circle cx="115" cy="203" r="9" fill="#AAAAAA"/>
          </g>

          <g className="quote-scene-wheel">
            <circle cx="180" cy="203" r="23" fill="#111111" stroke="white" strokeWidth="5"/>
            <circle cx="180" cy="203" r="9" fill="#AAAAAA"/>
          </g>

          <g className="quote-scene-wheel">
            <circle cx="535" cy="203" r="23" fill="#111111" stroke="white" strokeWidth="5"/>
            <circle cx="535" cy="203" r="9" fill="#AAAAAA"/>
          </g>

          {/* INDICACIÓN */}
          <text
            x="340"
            y="258"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="bold"
            letterSpacing="2"
          >
            HAZ CLIC Y COTIZA POR WHATSAPP
          </text>

        </svg>
      </a>

      {/* INFORMACIÓN */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400"/>
        <p className="text-center text-xs font-semibold text-white/85">
          Atención directa y personalizada!!!.
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
