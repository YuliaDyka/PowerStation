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
    coords: [50.4336, 30.5308,], 
    description: "Швидка зарядка 50 кВт, доступна 24/7",
    status: "Вільна",
    address: "Бульвар Лесі Українки 16"
  },

  {
    id: 2,
    name: "Station 2",
    coords: [50.4657, 30.5111], 
    description: "Зарядка 22 кВт, парковка платна",
    status: "Зайнята",
    address: "вул. Нижній Вал 17"
  },

  {
    id: 3,
    name: "Станція №3",
    coords: [50.3924, 30.6324], 
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "проспект Григоренка, 38А",
    status: "Вільна",
  },

  {
    id: 4,
    name: "Станція №4",
    coords: [50.5191, 30.6080], 
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Оноре Де Бальзака 64А",
    status: "Вільна",
  },

  {
    id: 5,
    name: "Станція №5",
    coords: [50.4096, 30.3495],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Соборна 13",
    status: "Вільна",
  },

  {
    id: 6,
    name: "Станція №3",
    coords: [49.8038, 23.9930],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Наукова 45Б",
    status: "Вільна",
  },

  {
    id: 7,
    name: "Станція №7",
    coords: [49.8159, 24.0196],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Стрийська 134",
    status: "Вільна",
  },

  {
    id: 8,
    name: "Станція №8",
    coords: [48.4594, 35.0457],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Січових стрільців 17",
    status: "Вільна",
  },

  {
    id: 9,
    name: "Станція №9",
    coords: [48.4213, 35.0032],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Енергетична 11",
    status: "Вільна",
  },

  {
    id: 10,
    name: "Станція №10",
    coords: [48.4404, 34.9887],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Криворізька 3",
    status: "Вільна",
  },

  {
    id: 11,
    name: "Станція №11",
    coords: [49.4126, 26.9864],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. І. Франка 36",
    status: "Вільна",
  },

 {
    id: 12,
    name: "Станція №12",
    coords: [51.4775, 31.2785],
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Олександра Довженка 94",
    status: "Вільна",
  },

 {
    id: 13,
    name: "Станція №13",
    coords: [48.7429, 30.2173], 
    description: "Зарядка 100 кВт, парковка для 2 авто",
    address: "вул. Незалежності 26",
    status: "Вільна",
  },
];