// src/pages/StationDetails.tsx
import { useParams, Link } from "react-router-dom";
import { stations } from "../data/stations";

export default function StationDetails() {
  const { id } = useParams();
  const station = stations.find((s) => s.id.toString() === id);

  if (!station) {
    return <h2>Станцію не знайдено</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{station.name}</h1>
      <p><b>Адреса:</b> {station.address}</p>
      <p><b>Статус:</b> {station.status}</p>
      <button>Pay</button>
      <br /><br />
      <Link to="/stations">⬅ Назад до списку</Link>
    </div>
  );
}
