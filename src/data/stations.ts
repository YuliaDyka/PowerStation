import type { LatLngExpression } from "leaflet";

export interface Station {
    id: number;
    name: string;
    coords: LatLngExpression;
    description: string;
    status: string;
    address: string;
}

export const stations: Station[] = [
   {
    id: 1,
    name: "Station 1",
    coords: [50.4501, 30.5234,],
    description: "Швидка зарядка 50 кВт, доступна 24/7",
    status: "Вільна",
    address: "Хрещатик 67"
  },
  {
    id: 2,
    name: "Station 2",
    coords: [50.4601, 30.5134],
    description: "Зарядка 22 кВт, парковка платна",
    status: "Зайнята",
    address: "Андріївський узвіз 43"
  },

  {
  id: 3,
  name: "Станція №3",
  coords: [50.3960, 30.6334],
  description: "Зарядка 100 кВт, парковка для 2 авто",
  address: "м. Київ, проспект Григоренка, 38А",
  status: "Вільна",
},
];