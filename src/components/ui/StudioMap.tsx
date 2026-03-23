"use client";

import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

const LOCATIONS = [
  { name: "Silicon Valley", lng: -122.0322, lat: 37.3688 },
  { name: "Hollywood", lng: -118.3287, lat: 34.0928 },
] as const;

export default function StudioMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current || !MAPBOX_TOKEN) return;

    let cancelled = false;

    import("mapbox-gl")
      .then((mapboxgl) => {
        if (cancelled || !mapContainer.current) return;

        mapboxgl.default.accessToken = MAPBOX_TOKEN;

        const map = new mapboxgl.default.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/dark-v11",
          center: [-120.1, 35.8],
          zoom: 5.5,
          interactive: false,
          attributionControl: false,
        });

        map.on("load", () => {
          LOCATIONS.forEach(({ name, lng, lat }) => {
            const el = document.createElement("div");
            el.className = "studio-marker";
            el.innerHTML = `
              <div style="display:flex;flex-direction:column;align-items:center">
                <div style="width:14px;height:14px;border-radius:50%;background:#d4a843;border:2px solid rgba(212,168,67,0.3);box-shadow:0 0 20px rgba(212,168,67,0.4)"></div>
                <span style="margin-top:6px;font-size:11px;font-weight:600;color:#d4a843;letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap;text-shadow:0 1px 3px rgba(0,0,0,0.8)">${name}</span>
              </div>
            `;

            new mapboxgl.default.Marker({ element: el })
              .setLngLat([lng, lat])
              .addTo(map);
          });
          setLoaded(true);
        });

        mapRef.current = map;
      })
      .catch(() => {
        // Mapbox failed to load — silently degrade
      });

    return () => {
      cancelled = true;
      if (
        mapRef.current &&
        typeof (mapRef.current as { remove: () => void }).remove === "function"
      ) {
        (mapRef.current as { remove: () => void }).remove();
        mapRef.current = null;
      }
    };
  }, []);

  if (!MAPBOX_TOKEN) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
      <div ref={mapContainer} className="h-[300px] w-full md:h-[400px]" />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-cinema-dark">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/[0.04]" />
    </div>
  );
}
