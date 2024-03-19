"use client";
import L, { LatLngBounds, LatLngExpression, Map, Marker, Polyline } from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported
import { LocationProp } from "@/types/types";

const MapComponent = ({ locations }: { locations: Array<LocationProp> }) => {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map
      const mapInstance = L.map("map", {
        attributionControl: false,
        zoomSnap: 0.1,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance);

      mapRef.current = mapInstance;
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // Add markers and polyline when locations change
      const bounds = new LatLngBounds();
      const icon = L.icon({
        iconUrl: "/../img/pin.png",
        iconSize: [20, 25],
        iconAnchor: [10, 25],
        popupAnchor: [0, -25],
      });
      const latLngs: LatLngExpression[] = [];
      locations.forEach((loc) => {
        const coord: LatLngExpression = loc.coordinates.slice().reverse();
        latLngs.push(coord);
        bounds.extend(coord);
        L.marker(coord, { icon })
          .bindPopup(`<p className=" text-3xl">Day: ${loc.day}</p><p>${loc.description}</p>`)
          .addTo(mapRef.current!);
      });
      new Polyline(latLngs, { color: "white" }).addTo(mapRef.current!).addTo(mapRef.current!);
      // Fit map to bounds of all markers
      mapRef.current.fitBounds(bounds.pad(0.2));
    }
  }, [locations]);

  return <div id="map" style={{ height: "65rem" }} />;
};

export default MapComponent;
