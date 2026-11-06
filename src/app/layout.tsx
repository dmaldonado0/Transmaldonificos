
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TransMaldonificos | Logistica y transporte especializado de vehículos",
  description:
    "TransMaldonificos. Soluciones de transporte especializado de vehículos, seguridad, compromiso y confianza en cada recorrido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
