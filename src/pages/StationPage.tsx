import { useParams, Link } from "react-router-dom";
import { stations } from "../data/stations";

export default function StationPage() {
  const { id } = useParams<{ id: string }>();
  const station = stations.find((s) => s.id === Number(id));

  if (!station) {
    return <h2>Станція не знайдена</h2>;
  }

  return (
    <div style={{ height:"50vh", width:"56.7vw", paddingTop:"160px", paddingLeft:"660px" }}>
      <h2>{station.name}</h2>
      <p>{station.description}</p>
      <button>pay</button>
      <br></br>
      <Link to="/">⬅ Назад на карту</Link>
    </div>
  );
}