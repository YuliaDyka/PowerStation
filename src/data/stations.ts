import type { LatLngExpression } from "leaflet";

export interface Station {
    id: number;
    name: string;
    coords: LatLngExpression;
    description: string;
}

export const stations: Station[] = [
   {
    id: 1,
    name: "Station 1",
    coords: [50.4501, 30.5234,],
    description: "Швидка зарядка 50 кВт, доступна 24/7",
  },
  {
    id: 2,
    name: "Station 2",
    coords: [50.4601, 30.5134],
    description: "Зарядка 22 кВт, парковка платна",
  },
];