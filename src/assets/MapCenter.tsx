import { useMap } from "react-leaflet";
import { useEffect } from "react";

interface MapCenterProps {
  coords: [number, number];
}

const MapCenter: React.FC<MapCenterProps> = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.setView(coords, 15); // zoom 15 для гарного наближення
    }
  }, [coords, map]);

  return null;
};

export default MapCenter;
