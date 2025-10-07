import { Link } from "react-router-dom";
import { stations } from "../data/stations";
import "../styles/StationListPage.css";

export default function StationsPage() {
  return (
    <div className="stations-page">
      <h1>Список станцій</h1>
      <div className="stations-list">
        {stations.map((station) => (
          <Link 
            key={station.id}
            to={`/station/${station.id}`}
            className="station-card"
          >
            <h3>{station.name}</h3>
            <p className="station-address">{station.address}</p>
            <p className={`station-status ${station.status === "Вільна" ? "free" : "busy"}`}>
              {station.status}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
