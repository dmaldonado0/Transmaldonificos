
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
        <svg viewBox="0 0 100 65" width="100" height="65" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 39 H65 V48 H5 Z" fill="#C8102E"/>
          <path d="M5 36 H65 V40 H5 Z" fill="#F04455"/>

          <path d="M65 24 H80 L94 38 V48 H65 Z" fill="#C8102E"/>
          <path d="M70 28 H79 L88 38 H70 Z" fill="#DCE7EF"/>
          <path d="M65 24 H80 L94 38 H65 Z" fill="#E51B40"/>

          <rect x="8" y="31" width="8" height="5" rx="1" fill="#C8102E"/>
          <rect x="89" y="41" width="5" height="4" rx="1" fill="#F8D46A"/>
          <rect x="3" y="39" width="4" height="5" rx="1" fill="#F5F5F5"/>
          <path d="M65 48 H96" stroke="#777" stroke-width="2"/>

          <g class="truck-wheel">
            <circle cx="23" cy="49" r="8" fill="#111"/>
            <circle cx="23" cy="49" r="3.5" fill="#BFC4CA"/>
            <path d="M23 45 V53 M19 49 H27" stroke="#555" stroke-width="1.5"/>
          </g>

          <g class="truck-wheel">
            <circle cx="76" cy="49" r="8" fill="#111"/>
            <circle cx="76" cy="49" r="3.5" fill="#BFC4CA"/>
            <path d="M76 45 V53 M72 49 H80" stroke="#555" stroke-width="1.5"/>
          </g>
        </svg>
      </div>
    </div>
  `,
  iconSize: [110, 85],
  iconAnchor: [55, 55],
  popupAnchor: [0, -55],
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
