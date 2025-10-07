import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression, LatLngTuple } from "leaflet";
import { Link } from "react-router-dom";
import { stations } from "../data/stations";
import { useEffect } from "react";
import "../styles/map.css"

// Компонент, який масштабує карту так, щоб влізли всі станції
function FitBounds() {
  const map = useMap();

  useEffect(() => {
    if (stations.length > 0) {
      const bounds = stations.map((s) => s.coords as LatLngTuple);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map]);

  return null;
}

// Окремий маркер станції
function StationMarker({ station }: { station: any }) {
  const map = useMap();

  return (
    <Marker
      key={station.id}
      position={station.coords as LatLngExpression}
      eventHandlers={{
        click: () => {
          map.flyTo(station.coords as LatLngTuple, 15, {
            duration: 0.5,
          });
        },
      }}
    >
      <Popup>
        <b>{station.name}</b>
        <p>{station.address}</p>
        <p>{station.status}</p>
        <Link to={`/station/${station.id}`}>Детальніше</Link>
      </Popup>
    </Marker>
  );
}

export default function Map() {
  const initialCenter: LatLngExpression = [49.0, 31.0]; // геоцентр України умовно

  return (
    <div style={{ height: "91.5vh", width: "100vw" }}>
      <MapContainer center={initialCenter} zoom={6} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* автоматичне підлаштування масштабу під всі станції */}
        <FitBounds />

        {stations.map((station) => (
          <StationMarker key={station.id} station={station} />
        ))}
      </MapContainer>
    </div>
  );
}



// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import type { LatLngExpression, LatLngBoundsExpression } from "leaflet";
// import { Link } from "react-router-dom";
// import { stations } from "../data/stations";
// import  { useState, useEffect } from "react"

// function MapCenter({ center, zoom = 15 }: { center: LatLngExpression; zoom?: number }) {
//   const map = useMap();
//   useEffect(() => {
//     if (center) {
//       map.setView(center, zoom);
//     }
//   }, [center, zoom, map]);
//   return null;
// }

// function FitBoundsToStations() {
//   const map = useMap();

//   useEffect(() => {
//     if (stations.length > 0) {
//       const bounds: LatLngBoundsExpression = stations.map((s) => s.coords) as LatLngBoundsExpression;
//       map.fitBounds(bounds, { padding: [50, 50] }); // padding щоб маркери не були впритул до краю
//     }
//   }, [map]);

//   return null;
// }

// export default function Map() {
//   // Задаємо тип явно
//   const initialCenter: LatLngExpression = [50.4501, 30.5234];
//   const [center, setCenter] = useState<LatLngExpression>(initialCenter);


//    return (
//     <div style={{ height: "91.5vh", width: "100vw" }}>
//       <MapContainer center={[48.3794, 31.1656]} zoom={6} style={{ height: "100%", width: "100%" }}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Компонент, що керує реальним переміщенням карти */}
//         <MapCenter center={center} zoom={15} />
//         <FitBoundsToStations />

//         {stations.map((station) => (
//           <Marker
//             key={station.id}
//             position={station.coords as LatLngExpression}
//             eventHandlers={{
//               click: () => {
//                 // при кліку центруємо карту на цю станцію
//                 setCenter(station.coords as LatLngExpression);
//               },
//             }}
//           >
//             <Popup>
//               <b style={{ fontSize: "18px" }}>{station.name}</b>
//               <p>{station.address}</p>
//               <p>{station.status}</p>
//               <Link to={`/station/${station.id}`}>Детальніше</Link>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }
