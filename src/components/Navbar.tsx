
"use client";

import Link from "next/link";
import { useState } from "react";

const enlaces = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Servicios", href: "#servicios" },
  { nombre: "Nosotros", href: "#nosotros" },
  { nombre: "Ubicación", href: "#ubicacion" },
  { nombre: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:h-[92px] lg:px-12">

        {/* LOGO OFICIAL TRANSMALDONIFICOS */}
        <Link
          href="#inicio"
          onClick={cerrarMenu}
          className="flex min-w-0 shrink items-center"
        >
          <img
            src="/imagenes/logo.transmaldonificoss.png"
            alt="TransMaldonificos - Sano tu vehículo, salvo"
            className="relative top-2 h-16 w-auto max-w-[260px] object-contain sm:top-2 sm:h-[72px] sm:max-w-[340px] lg:top-2 lg:h-[78px] lg:max-w-[390px]"
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-10">
          {enlaces.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.href}
              className="relative py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#333333] transition hover:text-[#C8102E] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#C8102E] after:transition-all after:duration-300 hover:after:w-full"
            >
              {enlace.nombre}
            </a>
          ))}
        </div>

        {/* BOTÓN DESKTOP */}
        <a
          href="#contacto"
          className="hidden items-center gap-3 bg-[#C8102E] px-6 py-4 text-[11px] font-black tracking-wider text-white transition duration-300 hover:bg-[#111111] lg:flex"
        >
          SOLICITAR SERVICIO
          <span className="text-base">↗</span>
        </a>

        {/* BOTÓN MÓVIL */}
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/10 text-[#111111] transition hover:border-[#C8102E] hover:text-[#C8102E] lg:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
        >
          <span className="text-3xl leading-none">
            {menuAbierto ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        id="menu-movil"
        aria-hidden={!menuAbierto}
        className={`overflow-hidden bg-[#111111] text-white transition-all duration-300 ease-in-out lg:hidden ${
          menuAbierto
            ? "max-h-[520px] border-t border-white/10 opacity-100"
            : "max-h-0 border-t border-transparent opacity-0"
        }`}
      >
        <div className="px-6 pb-7 pt-4 sm:px-9">

          <div className="mb-5 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
              Navegación
            </span>

            <span className="text-[10px] font-bold tracking-widest text-[#C8102E]">
              TRANSMALDONIFICOS
            </span>
          </div>

          <div className="flex flex-col">
            {enlaces.map((enlace, index) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                tabIndex={menuAbierto ? 0 : -1}
                onClick={cerrarMenu}
                className="group flex items-center justify-between border-b border-white/10 py-4 transition hover:pl-2"
              >
                <div className="flex items-center gap-5">
                  <span className="text-[10px] font-bold text-[#C8102E]">
                    0{index + 1}
                  </span>

                  <span className="text-base font-bold tracking-wide transition group-hover:text-[#C8102E]">
                    {enlace.nombre}
                  </span>
                </div>

                <span className="text-lg text-gray-500 transition group-hover:translate-x-1 group-hover:text-[#C8102E]">
                  →
                </span>
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            tabIndex={menuAbierto ? 0 : -1}
            onClick={cerrarMenu}
            className="mt-6 flex min-h-[55px] items-center justify-center gap-3 bg-[#C8102E] px-5 py-4 text-center text-xs font-black tracking-wider text-white transition hover:bg-white hover:text-[#111111]"
          >
            SOLICITAR SERVICIO
            <span className="text-lg">↗</span>
          </a>

          <p className="mt-5 text-center text-[9px] font-bold uppercase tracking-[0.25em] text-gray-600">
            CONECTAMOS DESTINOS
          </p>
        </div>
      </div>
    </header>
  );
}
