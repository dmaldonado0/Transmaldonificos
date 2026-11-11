
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";

const redes = [
  {
    nombre: "Instagram",
    usuario: "@transmaldonificos",
    url: "https://www.instagram.com/transmaldonificos",
    Icono: FaInstagram,
    color: "group-hover:text-[#E1306C]",
    fondo: "group-hover:bg-[#E1306C]/10",
  },
  {
    nombre: "Facebook",
    usuario: "TransMaldonificos",
    url: "https://www.facebook.com/share/1CZYDCiYCq/?mibextid=wwXIfr",
    Icono: FaFacebookF,
    color: "group-hover:text-[#1877F2]",
    fondo: "group-hover:bg-[#1877F2]/10",
  },
  {
    nombre: "TikTok",
    usuario: "@transmaldonificoss",
    url: "https://www.tiktok.com/@transmaldonificoss",
    Icono: FaTiktok,
    color: "group-hover:text-white",
    fondo: "group-hover:bg-white/10",
  },
  {
    nombre: "WhatsApp",
    usuario: "Escríbenos directamente",
    url: "https://wa.me/573219467913",
    Icono: FaWhatsapp,
    color: "group-hover:text-[#25D366]",
    fondo: "group-hover:bg-[#25D366]/10",
  },
  {
    nombre: "Correo electrónico",
    usuario: "transmaldonificos@gmail.com",
    url: "mailto:transmaldonificos@gmail.com",
    Icono: SiGmail,
    color: "group-hover:text-[#EA4335]",
    fondo: "group-hover:bg-[#EA4335]/10",
  },
];

export default function RedesSociales() {
  return (
    <section id="redes" className="bg-white px-6 py-24 text-[#111111]">
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
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

        {/* REDES SOCIALES */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {redes.map((red, index) => {
            const Icono = red.Icono;

            return (
              <a
                key={red.nombre}
                href={red.url}
                target={red.nombre === "Correo electrónico" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E] hover:bg-[#111111] hover:text-white hover:shadow-xl"
              >
                <div>
                  <span className="text-xs font-bold text-[#C8102E]">
                    0{index + 1} REDES
                  </span>

                  <h3 className="mt-4 text-xl font-black">
                    {red.nombre}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 transition group-hover:text-gray-300">
                    {red.usuario}
                  </p>
                </div>

                {/* ICONO DE LA RED */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl text-[#111111] transition-all duration-300 group-hover:scale-110 ${red.color} ${red.fondo}`}
                >
                  <Icono />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
