
const redes = [
  {
    nombre: "Instagram",
    usuario: "@TU_INSTAGRAM",
    url: "https://www.instagram.com/TU_USUARIO",
  },
  {
    nombre: "Facebook",
    usuario: "TransporT",
    url: "https://www.facebook.com/TU_PAGINA",
  },
  {
    nombre: "TikTok",
    usuario: "@TU_TIKTOK",
    url: "https://www.tiktok.com/@TU_USUARIO",
  },
  {
    nombre: "WhatsApp",
    usuario: "Escríbenos directamente",
    url: "https://wa.me/57XXXXXXXXXX",
  },
  {
    nombre: "Correo electrónico",
    usuario: "TU_CORREO",
    url: "mailto:TU_CORREO",
  },
  {
    nombre: "LinkedIn",
    usuario: "TransporT",
    url: "https://www.linkedin.com/company/TU_EMPRESA",
  },
];

export default function RedesSociales() {
  return (
    <section id="redes" className="bg-white px-6 py-24 text-[#111111]">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#C8102E]">
            Estamos conectados
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
            SIGAMOS EN <span className="text-[#C8102E]">CONTACTO.</span>
          </h2>

          <p className="mt-5 leading-8 text-gray-500">
            Conoce más sobre nosotros, descubre nuestros servicios
            y comunícate con nuestro equipo a través de nuestras
            plataformas digitales.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {redes.map((red, index) => (
            <a
              key={red.nombre}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-gray-200 p-7 transition duration-300 hover:border-[#C8102E] hover:bg-[#111111] hover:text-white"
            >
              <div>
                <span className="text-xs font-bold text-[#C8102E]">
                  0{index + 1} / REDES
                </span>

                <h3 className="mt-4 text-xl font-black">
                  {red.nombre}
                </h3>

                <p className="mt-2 text-sm text-gray-500 transition group-hover:text-gray-300">
                  {red.usuario}
                </p>
              </div>

              <span className="text-2xl transition group-hover:translate-x-2 group-hover:text-[#C8102E]">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
