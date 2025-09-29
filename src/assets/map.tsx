import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";

type Station = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  status: string;
};

const stations: Station[] = [
  { id: 1, name: "Station 1", lat: 50.4501, lng: 30.5234, status: "Вільна" },
  { id: 2, name: "Station 2", lat: 50.4601, lng: 30.5134, status: "Зайнята" },
];

export default function Map() {
  // Задаємо тип явно
  const position: LatLngExpression = [50.4501, 30.5234];

  return (
    <MapContainer center={position} zoom={12} style={{ height: "91.5vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stations.map((station) => (
        <Marker key={station.id} position={[station.lat, station.lng] as LatLngExpression}>
          <Popup>
            <b>{station.name}</b>
            <br />
            Статус: {station.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
