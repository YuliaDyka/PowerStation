import { useParams, Link } from "react-router-dom";
import { stations } from "../data/stations";

export default function StationPage() {
  const { id } = useParams<{ id: string }>();
  const station = stations.find((s) => s.id === Number(id));

  if (!station) {
    return <h2>Станція не знайдена</h2>;
  }

  return (
    <div style={{ height:"50vh", width:"56.7vw", paddingTop:"160px", paddingLeft:"340px" }}>
      <h2>{station.name}</h2>
      <p><b>Адреса:</b> {station.address}</p>
      <p><b>Опис:</b> {station.description}</p>
      <p><b>Статус:</b> {station.status}</p>
      <button onClick={() => alert("Оплата ще в розробці 😅")}>
        Pay
      </button>
      <br /><br />
      <Link to="/">⬅ Назад на карту</Link>
    </div>
  );
}