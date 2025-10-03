import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import { Link } from "react-router-dom";
import { stations } from "../data/stations";
import  { useState, useEffect } from "react"

function MapCenter({ center, zoom = 15 }: { center: LatLngExpression; zoom?: number }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
}


export default function Map() {
  // Задаємо тип явно
  const initialCenter: LatLngExpression = [50.4501, 30.5234];
  const [center, setCenter] = useState<LatLngExpression>(initialCenter);


   return (
    <div style={{ height: "91.5vh", width: "100vw" }}>
      <MapContainer center={center} zoom={12} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Компонент, що керує реальним переміщенням карти */}
        <MapCenter center={center} zoom={15} />

        {stations.map((station) => (
          <Marker
            key={station.id}
            position={station.coords as LatLngExpression}
            eventHandlers={{
              click: () => {
                // при кліку центруємо карту на цю станцію
                setCenter(station.coords as LatLngExpression);
              },
            }}
          >
            <Popup>
              <b style={{ fontSize: "18px" }}>{station.name}</b>
              <p>{station.address}</p>
              <p>{station.status}</p>
              <Link to={`/station/${station.id}`}>Детальніше</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
