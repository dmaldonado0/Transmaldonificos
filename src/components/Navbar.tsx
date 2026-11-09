
"use client";

import Link from "next/link";
import { useState } from "react";

const enlaces = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Servicios", href: "#servicios" },
  { nombre: "Quiénes somos", href: "#quienes-somos" },
  { nombre: "¿Por qué elegirnos?", href: "#porque-elegirnos" },
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

      
{/* BOTÓN DESKTOP - WHATSAPP ANIMADO */}
<a
  href="https://wa.me/573219467913?text=Hola%2C%20TransMaldonificos.%20Quiero%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20de%20transporte."
  target="_blank"
  rel="noopener noreferrer"
  className="group relative hidden h-14 items-center justify-center gap-3 overflow-hidden bg-[#C8102E] px-6 text-white shadow-lg shadow-[#C8102E]/20 transition-all duration-300 hover:bg-[#A50D25] hover:shadow-xl hover:shadow-[#C8102E]/30 lg:flex"
>
  <span className="relative z-10 text-[11px] font-black uppercase tracking-wider transition-all duration-300 group-hover:-translate-x-1">
    SOLICITAR SERVICIO
  </span>

 
<svg
  viewBox="0 0 90 55"
  className="navbar-truck relative z-10 h-9 w-16 shrink-0"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  {/* Plataforma transportadora */}
  <path d="M3 34 H70 V39 H3 Z" fill="white" />
  <path d="M5 40 H68" stroke="#111111" strokeWidth="2" />

  {/* Cabina roja */}
  <path d="M69 23 H78 L87 33 V39 H69 Z" fill="#E51B40" />
  <path d="M73 26 H78 L83 33 H73 Z" fill="white" />
  <rect x="85" y="34" width="3" height="3" rx="1" fill="#FFD166" />

  {/* Carro transportado */}
  <path
    d="M17 22 L23 14 H48 L56 22 L61 23 V32 H14 V25 Z"
    fill="#E51B40"
    stroke="white"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
  <path d="M25 16 H46 L52 22 H21 Z" fill="white" />
  <path d="M34 16 V22" stroke="#C8102E" strokeWidth="1.5" />

  {/* Soportes de la plataforma */}
  <path d="M8 32 V35 M64 32 V35" stroke="white" strokeWidth="2" />

  {/* Ruedas */}
  <g className="navbar-truck-wheel">
    <circle cx="17" cy="41" r="5" fill="#111111" stroke="white" strokeWidth="1.5" />
    <circle cx="17" cy="41" r="2" fill="white" />
  </g>

  <g className="navbar-truck-wheel">
    <circle cx="58" cy="41" r="5" fill="#111111" stroke="white" strokeWidth="1.5" />
    <circle cx="58" cy="41" r="2" fill="white" />
  </g>

  <g className="navbar-truck-wheel">
    <circle cx="78" cy="41" r="5" fill="#111111" stroke="white" strokeWidth="1.5" />
    <circle cx="78" cy="41" r="2" fill="white" />
  </g>
</svg>


  <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
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
