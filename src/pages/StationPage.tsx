import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { stations } from "../data/stations";
import "../styles/StationPage.css";

export default function StationPage() {
  const { id } = useParams<{ id: string }>();
  const station = stations.find((s) => s.id === Number(id));

  // локальний стан статусу
  const [status, setStatus] = useState(station ? station.status : "");

  if (!station) {
    return <h2>Станція не знайдена</h2>;
  }

  const isBusy = status === "Зайнята";
  const isCharging = status === "Заряджається";
  const isFree = status === "Вільна";

  const handleStartCharging = () => {
    if (isFree) setStatus("Заряджається");
  };

  const handleStopCharging = () => {
    if (isCharging) setStatus("Вільна");
  };

  return (
    <div className="station_container">
      <div>
        <h2>{station.name}</h2>
        <p><b>Адреса:</b> {station.address}</p>
        <p><b>Опис:</b> {station.description}</p>
        <p>
          <b>Статус:</b>{" "}
          <span
            className={
              isBusy
                ? "status-busy"
                : isCharging
                ? "status-charging"
                : "status-free"
            }
          >
            {status}
          </span>
        </p>

        <div className="buttons-row">
          <button
            onClick={handleStartCharging}
            disabled={!isFree}
            className={isFree ? "active-btn" : "disabled-btn"}
          >
            Почати зарядку
          </button>

          <button
            onClick={handleStopCharging}
            disabled={!isCharging}
            className={isCharging ? "active-btn" : "disabled-btn"}
          >
            Завершити зарядку
          </button>
        </div>

        {isCharging && (
          <p className="charging-info">⚡ Зарядка триває...</p>
        )}

        <br />
        <Link to="/">⬅ Назад на карту</Link>
      </div>
    </div>
  );
}
