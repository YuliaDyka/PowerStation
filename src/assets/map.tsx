import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
import { Link } from "react-router-dom";
import { stations } from "../data/stations";

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
       <Marker
          key={station.id}
          position={station.coords as LatLngExpression}
        >
          <Popup>
            <b style={{fontSize:"23px"}}>{station.name}</b>
            <br />
            <b>*Street name</b>
            <br />
            <Link to={`/station/${station.id}`}>Детальніше</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
