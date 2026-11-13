
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
       

{/* QUIÉNES SOMOS */}
<section
  id="quienes-somos"
  className="relative overflow-hidden bg-white px-6 py-24 md:px-16 lg:py-32"
>
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

    {/* COLUMNA IZQUIERDA: CONTENIDO */}
    <div className="relative z-10">

      {/* ETIQUETA */}
      <div className="mb-7 flex items-center gap-3">
        <span className="h-[2px] w-12 bg-[#C8102E]" />
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#C8102E]">
          Conoce nuestra empresa
        </p>
      </div>

      {/* TÍTULO */}
      <h2 className="mb-9 text-4xl font-black leading-[1.08] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
        TRANSPORTAMOS
        <br />
        CON EXPERIENCIA,
        <br />
        <span className="text-[#C8102E]">
          RESPALDO Y CONFIANZA.
        </span>
      </h2>

      {/* TEXTO PRINCIPAL */}
      <div className="max-w-xl space-y-6 text-base leading-8 text-gray-600 md:text-lg">

        <p>
          En <strong className="font-black text-[#111111]">TransMaldonificos</strong>,
          entendemos que detrás de cada transporte existe algo más que una carga:
          hay inversiones, proyectos, responsabilidades y personas que depositan
          su confianza en nosotros.
        </p>

        <p>
          Somos una empresa dedicada al transporte especializado, enfocada en
          brindar soluciones para el traslado de vehículos, maquinaria y
          diferentes tipos de carga. Nuestro conocimiento del sector y la
          experiencia adquirida en cada operación nos permiten comprender las
          necesidades de nuestros clientes y coordinar cada servicio con
          responsabilidad y compromiso.
        </p>

        <p>
          Nos caracterizamos por trabajar con seriedad, comunicación transparente
          y atención personalizada. Creemos que la confianza se construye
          cumpliendo la palabra, ofreciendo información clara y cuidando cada
          detalle durante el proceso.
        </p>

        <p>
          Más que conectar un punto de origen con un destino, buscamos construir
          relaciones duraderas con nuestros clientes, convirtiéndonos en un
          aliado confiable para sus necesidades de transporte.
        </p>

      </div>

      {/* FRASE DESTACADA */}
      <div className="mt-10 border-l-4 border-[#C8102E] bg-gray-50 px-6 py-5">
        <p className="text-lg font-black leading-relaxed text-[#111111] md:text-xl">
          No se trata solamente de transportar. Se trata de responder por la
          confianza que depositan en nosotros.
        </p>
      </div>

      {/* FIRMA INFERIOR */}
      <div className="mt-10 flex items-center gap-4">
        <div className="h-1 w-14 rounded-full bg-[#C8102E]" />
        <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">
          Compromiso en cada recorrido
        </p>
      </div>

    </div>

    {/* COLUMNA DERECHA: IMAGEN */}
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

      {/* DETALLE SUPERIOR */}
      <div className="absolute -right-4 -top-4 z-0 h-32 w-32 rounded-tr-3xl border-r-4 border-t-4 border-[#C8102E] sm:-right-5 sm:-top-5" />

      {/* IMAGEN PRINCIPAL */}
      <div className="relative z-10 h-[400px] overflow-hidden rounded-sm shadow-2xl sm:h-[500px] lg:h-[610px]">

        <img
          src="/imagenes/Transmaldonificosimagen.png"
          alt="TransMaldonificos, transporte especializado"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* DEGRADADO */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        {/* IDENTIFICADOR */}
        <div className="absolute bottom-8 left-8">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gray-300">
            Nuestra identidad
          </p>

          <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
            TransMaldonificos.
          </h3>

          <div className="mt-4 h-1 w-16 rounded-full bg-[#C8102E]" />
        </div>

      </div>

      {/* DETALLE INFERIOR */}
      <div className="absolute -bottom-5 -left-4 z-0 h-32 w-32 rounded-bl-3xl border-b-4 border-l-4 border-[#C8102E] sm:-bottom-6 sm:-left-5" />

      {/* ETIQUETA DECORATIVA */}
      <div className="absolute -bottom-8 right-0 z-20 hidden border border-gray-200 bg-white px-7 py-5 shadow-xl sm:block">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C8102E]">
          Transporte especializado
        </p>
        <p className="mt-1 text-sm font-bold text-[#111111]">
          Bogotá · Colombia
        </p>
      </div>

    </div>

  </div>
</section>


        {/* ¿POR QUÉ ELEGIRNOS? */}
        <section
          id="porque-elegirnos"
          className="relative isolate overflow-hidden bg-[#101010] px-6 py-24 text-white md:px-10 lg:py-32"
        >
          {/* DETALLES DECORATIVOS */}
          <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full border-[55px] border-[#C8102E]/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full border-[55px] border-white/[0.03]" />

          <div className="mx-auto max-w-7xl">

            {/* ENCABEZADO */}
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-[2px] w-12 bg-[#C8102E]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                    Nuestra propuesta de valor
                  </span>
                </div>

                <h2 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                  NO SOLO TRANSPORTAMOS.
                  <br />
                  <span className="text-[#C8102E]">
                    GENERAMOS CONFIANZA.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:pb-2">
                Sabemos que detrás de cada vehículo, máquina o carga hay
                una inversión importante. Por eso buscamos que tengas
                claridad, acompañamiento y tranquilidad en cada etapa
                del transporte.
              </p>
            </div>

            {/* BENEFICIOS */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  numero: "01",
                  titulo: "SEGUIMIENTO GPS",
                  descripcion:
                    "Seguimiento de la ubicación y el recorrido de tu carga, de acuerdo con la tecnología disponible para cada operación.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                      <path d="M17 3.5 19 2" />
                    </svg>
                  ),
                  destacado: true,
                },
                {
                  numero: "02",
                  titulo: "RESPALDO Y ASEGURAMIENTO",
                  descripcion:
                    "Te orientamos sobre alternativas de cobertura y gestión de pólizas, según el tipo de carga, la ruta y las condiciones acordadas.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  numero: "03",
                  titulo: "CUIDADO DEL VEHÍCULO",
                  descripcion:
                    "Atención en la preparación, el cargue, el aseguramiento y la entrega, procurando proteger cada unidad durante la operación.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M12 3 3 7v5c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-4Z" />
                      <path d="m8 12 2.5 2.5L16 9" />
                    </svg>
                  ),
                },
                {
                  numero: "04",
                  titulo: "EXPERIENCIA Y CONOCIMIENTO",
                  descripcion:
                    "Analizamos las características de cada vehículo, maquinaria o carga para coordinar una solución adecuada.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M2 8.5 12 3l10 5.5-10 5.5L2 8.5Z" />
                      <path d="M6 11v5c3.5 3 8.5 3 12 0v-5" />
                      <path d="M22 9v6" />
                    </svg>
                  ),
                },
                {
                  numero: "05",
                  titulo: "CONTRATOS CLAROS",
                  descripcion:
                    "Buscamos dejar por escrito el alcance del servicio, las condiciones, los costos y las responsabilidades acordadas.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                      <path d="M14 2v6h6M8 13h8M8 17h8" />
                    </svg>
                  ),
                },
                {
                  numero: "06",
                  titulo: "COMPROMISO CON LOS TIEMPOS",
                  descripcion:
                    "Coordinamos los recorridos para cumplir los tiempos de entrega acordados e informar oportunamente cualquier novedad.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                      <path d="m16 3 2 2 3-1" />
                    </svg>
                  ),
                },
                {
                  numero: "07",
                  titulo: "COMUNICACIÓN SINCERA",
                  descripcion:
                    "Hablamos claro sobre costos, tiempos, condiciones y novedades. Preferimos la transparencia desde el primer contacto.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z" />
                      <path d="M8 11h8M8 14h5" />
                    </svg>
                  ),
                },
                {
                  numero: "08",
                  titulo: "ACOMPAÑAMIENTO PERSONALIZADO",
                  descripcion:
                    "Atención directa para resolver tus inquietudes y acompañarte antes, durante y después del servicio.",
                  icono: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="10" cy="7" r="4" />
                      <path d="M20 8v6M17 11h6" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <article
                  key={item.numero}
                  className={`group relative flex min-h-[285px] flex-col overflow-hidden border p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C8102E] sm:p-7 ${
                    item.destacado
                      ? "border-[#C8102E]/60 bg-gradient-to-br from-[#351016] to-[#171717]"
                      : "border-white/10 bg-[#171717] hover:bg-[#1D1D1D]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#C8102E]/40 bg-[#C8102E]/10 text-[#E51B40] transition duration-300 group-hover:bg-[#C8102E] group-hover:text-white">
                      {item.icono}
                    </div>

                    <span className="text-xs font-black tracking-[0.2em] text-white/30">
                      {item.numero}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-black leading-tight tracking-wide sm:text-xl">
                      {item.titulo}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {item.descripcion}
                    </p>
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="h-[2px] w-10 bg-[#C8102E] transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              ))}
            </div>

            {/* CIERRE DE LA SECCIÓN */}
            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl border-l-4 border-[#C8102E] pl-6">
                <p className="text-xl font-black leading-relaxed sm:text-2xl">
                  TU CARGA ES IMPORTANTE.
                  <span className="text-[#C8102E]">
                    {" "}TU CONFIANZA, NUESTRA MAYOR RESPONSABILIDAD.
                  </span>
                </p>
              </div>

              <a
                href="#contacto"
                className="inline-flex w-fit shrink-0 items-center gap-3 bg-[#C8102E] px-7 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                Hablemos de tu transporte
                <span className="text-lg">↗</span>
              </a>
            </div>

            <p className="mt-8 max-w-4xl text-[11px] leading-6 text-gray-500">
              Las opciones de seguimiento y aseguramiento se confirman para
              cada servicio según la disponibilidad, las condiciones de la
              operación y los términos acordados con el cliente.
            </p>
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
