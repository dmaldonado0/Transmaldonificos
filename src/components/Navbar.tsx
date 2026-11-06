
"use client";

import Link from "next/link";
import { useState } from "react";

const enlaces = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Servicios", href: "#servicios" },
  { nombre: "Nosotros", href: "#nosotros" },
  { nombre: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="#inicio"
          className="text-2xl font-black tracking-tighter"
        >
          TRANSPOR<span className="text-[#C8102E]">T.</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {enlaces.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.href}
              className="text-sm font-semibold text-[#292929] transition hover:text-[#C8102E]"
            >
              {enlace.nombre}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden bg-[#C8102E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#A50D25] md:block"
        >
          SOLICITAR SERVICIO
        </a>

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="text-3xl text-black md:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? "×" : "☰"}
        </button>
      </nav>

      {menuAbierto && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 md:hidden">
          {enlaces.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.href}
              onClick={() => setMenuAbierto(false)}
              className="block border-b border-gray-100 py-4 font-semibold"
            >
              {enlace.nombre}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
            className="mt-5 block bg-[#C8102E] px-5 py-4 text-center font-bold text-white"
          >
            SOLICITAR SERVICIO
          </a>
        </div>
      )}
    </header>
  );
}
