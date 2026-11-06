
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ubicacion from "@/components/Ubicacion";
import RedesSociales from "@/components/RedesSociales";

export default function Home() {
  const servicios = [
    {
      numero: "01",
      titulo: "Automóviles",
      descripcion:
        "Transporte de automóviles particulares y vehículos nuevos.",
    },
    {
      numero: "02",
      titulo: "Motocicletas",
      descripcion:
        "Movilización de motocicletas con atención en su manipulación y traslado.",
    },
    {
      numero: "03",
      titulo: "Camionetas",
      descripcion:
        "Soluciones de transporte para camionetas y vehículos utilitarios.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen w-full overflow-hidden">
        <Hero />

        {/* SERVICIOS */}
        <section
          id="servicios"
          className="bg-white px-6 py-28 text-black md:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              Nuestros servicios
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              TRANSPORTE ESPECIALIZADO PARA CADA VEHÍCULO.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              Conectamos destinos a través de soluciones de transporte
              diseñadas para movilizar vehículos de manera organizada
              y responsable.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {servicios.map((servicio) => (
                <article
                  key={servicio.numero}
                  className="group border border-gray-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#C8102E] hover:shadow-xl"
                >
                  <span className="text-sm font-black text-[#C8102E]">
                    / {servicio.numero}
                  </span>

                  <h3 className="mt-12 text-2xl font-black">
                    {servicio.titulo}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    {servicio.descripcion}
                  </p>

                  <div className="mt-8 h-1 w-12 bg-[#C8102E] transition-all group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section
          id="nosotros"
          className="bg-[#111111] px-6 py-24 text-white md:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              TransMaldonificos
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-black md:text-6xl">
              MOVILIZAMOS CON RESPONSABILIDAD.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Trabajamos para conectar personas y empresas con soluciones
              de transporte especializado de vehículos.
            </p>
          </div>
        </section>

        {/* CONTACTO */}
        <section
          id="contacto"
          className="bg-[#C8102E] px-6 py-24 text-white md:px-10"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                Hablemos de tu próximo transporte
              </span>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                ¿QUÉ NECESITAS TRANSPORTAR?
              </h2>
            </div>

            <a
              href="https://wa.me/57XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-8 py-5 font-black text-[#111111] transition hover:bg-black hover:text-white"
            >
              CONTACTAR POR WHATSAPP →
            </a>
          </div>
        </section>

        {/* REDES SOCIALES */}
        <RedesSociales />

        {/* UBICACIÓN ANTERIOR */}
        <Ubicacion />
      </main>

      <footer className="bg-black px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TransMaldonificos. Todos los derechos reservados.
      </footer>
    </>
  );
}
