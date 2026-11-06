
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TransporT | Transporte especializado de vehículos",
  description:
    "Soluciones de transporte especializado de vehículos. Seguridad, respaldo y confianza en cada recorrido.",
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
