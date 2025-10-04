// src/pages/StationsPage.tsx
import { Link } from "react-router-dom";
import { stations } from "../data/stations";

export default function StationsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Список станцій</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {stations.map((station) => (
          <li key={station.id} style={{ margin: "10px 0" }}>
            <Link 
              to={`/station/${station.id}`} 
              style={{ fontSize: "18px", color: "blue", textDecoration: "underline" }}
            >
              {station.name} — {station.address}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
