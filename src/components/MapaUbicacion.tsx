
"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const camionIcon = L.divIcon({
  className: "truck-map-icon",

  html: `
    <div class="truck-marker">
      <div class="truck-pulse"></div>

      <div class="truck-illustration">
        <svg
          viewBox="0 0 100 65"
          width="120"
          height="78"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* PLATAFORMA DEL CAMIÓN */}
          <path d="M5 39 H65 V48 H5 Z" fill="#C8102E"/>
          <path d="M5 36 H65 V40 H5 Z" fill="#F04455"/>

          {/* AUTOMÓVIL TRANSPORTADO */}
          <g class="transported-car">

            {/* CARROCERÍA */}
            <path
              d="M13 29 L18 22 Q20 19 25 19 H45 Q49 19 52 23 L59 29 H62 Q64 29 64 32 V35 H13 Z"
              fill="#F5F5F5"
              stroke="#222"
              stroke-width="1.5"
            />

            {/* TECHO Y VENTANAS */}
            <path
              d="M23 21 H44 Q47 21 50 25 L53 29 H19 L23 21Z"
              fill="#C8102E"
            />

            <path
              d="M25 22 H35 V28 H21 Z"
              fill="#B9D9E8"
            />

            <path
              d="M38 22 H44 Q47 22 50 28 H38 Z"
              fill="#B9D9E8"
            />

            {/* FAROS */}
            <rect x="13" y="30" width="4" height="3" rx="1" fill="#FFD76A"/>
            <rect x="59" y="30" width="4" height="3" rx="1" fill="#E51B40"/>

            {/* RUEDAS DEL AUTOMÓVIL */}
            <circle cx="24" cy="35" r="4" fill="#111"/>
            <circle cx="24" cy="35" r="1.8" fill="#BFC4CA"/>

            <circle cx="52" cy="35" r="4" fill="#111"/>
            <circle cx="52" cy="35" r="1.8" fill="#BFC4CA"/>

          </g>

          {/* CABINA DEL CAMIÓN */}
          <path d="M65 24 H80 L94 38 V48 H65 Z" fill="#C8102E"/>
          <path d="M70 28 H79 L88 38 H70 Z" fill="#DCE7EF"/>
          <path d="M65 24 H80 L94 38 H65 Z" fill="#E51B40"/>

          {/* DETALLES DEL CAMIÓN */}
          <rect x="8" y="31" width="8" height="5" rx="1" fill="#C8102E"/>
          <rect x="89" y="41" width="5" height="4" rx="1" fill="#F8D46A"/>
          <rect x="3" y="39" width="4" height="5" rx="1" fill="#F5F5F5"/>

          <path d="M65 48 H96" stroke="#777" stroke-width="2"/>

          {/* RUEDA TRASERA */}
          <g class="truck-wheel">
            <circle cx="23" cy="49" r="8" fill="#111"/>
            <circle cx="23" cy="49" r="3.5" fill="#BFC4CA"/>
            <path d="M23 45 V53 M19 49 H27" stroke="#555" stroke-width="1.5"/>
          </g>

          {/* RUEDA DELANTERA */}
          <g class="truck-wheel">
            <circle cx="76" cy="49" r="8" fill="#111"/>
            <circle cx="76" cy="49" r="3.5" fill="#BFC4CA"/>
            <path d="M76 45 V53 M72 49 H80" stroke="#555" stroke-width="1.5"/>
          </g>

        </svg>
      </div>
    </div>
  `,

  iconSize: [130, 95],
  iconAnchor: [65, 65],
  popupAnchor: [0, -65],
});

export default function MapaUbicacion() {
  const [mapaListo, setMapaListo] = useState(false);

  useEffect(() => {
    setMapaListo(true);
  }, []);

  if (!mapaListo) {
    return (
      <div className="flex h-full min-h-[420px] w-full items-center justify-center bg-[#222222]">
        <span className="text-sm font-bold text-gray-400">
          Cargando ubicación...
        </span>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[420px] w-full">
      <MapContainer
        center={[4.6647247, -74.1445229]}
        zoom={18}
        scrollWheelZoom={false}
        className="h-full min-h-[420px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[4.6647247, -74.1445229]}
          icon={camionIcon}
        >
          <Popup>
            <strong>TransMaldonificos.</strong>
            <br />
            Nuestra sede · Bogotá D.C.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
