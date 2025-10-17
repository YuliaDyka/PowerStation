import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { stations } from "../data/stations";
import "../styles/StationPage.css";

export default function StationPage() {
  const { id } = useParams<{ id: string }>();
  const station = stations.find((s) => s.id === Number(id));

  // локальний стан статусу та таймера
  const [status, setStatus] = useState(station ? station.status : "");
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  if (!station) {
    return <h2>Станція не знайдена</h2>;
  }

  const isBusy = status === "Зайнята";
  const isCharging = status === "Заряджається";
  const isFree = status === "Вільна";

  // ⏱️ Таймер: використовуємо window.setInterval (повертає number)
  useEffect(() => {
    let intervalId: number | null = null;

    if (timerActive) {
      intervalId = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [timerActive]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const handleStartCharging = () => {
    if (isFree) {
      setStatus("Заряджається");
      setSeconds(0);
      setTimerActive(true);
    }
  };

  const handleStopCharging = () => {
    if (isCharging) {
      setStatus("Вільна");
      setTimerActive(false);
      setSeconds(0);
    }
  };

  return (
    <div className="station_container">
      <div>
        <h2>{station.name}</h2>
        <p>
          <b>Адреса:</b> {station.address}
        </p>
        <p>
          <b>Опис:</b> {station.description}
        </p>
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

        <div className="station-buttons">
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
          <div className="charging-info">
            ⚡ Зарядка триває: <b>{formatTime(seconds)}</b>
          </div>
        )}

        <br />
        <Link to="/">⬅ Назад на карту</Link>
      </div>
    </div>
  );
}
