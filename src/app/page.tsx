
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
  href="https://wa.me/573219467913"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 bg-red px-8 py-5 font-black text-[#111111] transition duration-300 hover:bg-[#111111] hover:text-white"
>
  CONTACTAR POR WHATSAPP
  <span className="text-lg">↗</span>
</a>
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
