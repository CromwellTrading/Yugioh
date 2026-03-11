import { Card } from '../types';

export const cardsData: Record<string, Card> = {
  "1": {
    id: "1",
    name: "Shi En",
    type: "Guerrero / Sincronía",
    stats: "ATK 2500 / DEF 1400",
    desc: "Efecto de negación.",
    image: "https://ms.yugipedia.com//8/80/ShiEn-SPWA-EN-SR-1E.png",
    color: "#f0f0f0"
  },
  "2": {
    id: "2",
    name: "Apollousa",
    type: "Hada / Enlace",
    stats: "ATK ? / LINK-4",
    desc: "Niega efectos.",
    image: "https://ms.yugipedia.com//4/4f/ApollousaBowoftheGoddess-MAGO-EN-PGR-1E.png",
    color: "#00f0ff"
  },
  "3": {
    id: "3",
    name: "Carta Colocada",
    type: "Magia/Trampa",
    stats: "---",
    desc: "Boca abajo.",
    image: "https://ms.yugipedia.com//5/5c/Back-EN.png",
    color: "#ff5e7a"
  },
  "4": {
    id: "4",
    name: "Shi En (Defensa)",
    type: "Guerrero / Sincronía",
    stats: "ATK 2500 / DEF 1400",
    desc: "Defensa.",
    image: "https://ms.yugipedia.com//8/80/ShiEn-SPWA-EN-SR-1E.png",
    color: "#f0f0f0"
  },
  "deck": {
    id: "deck",
    name: "Mazo",
    type: "Deck",
    stats: "34 cartas",
    desc: "Mazo principal.",
    image: "https://ms.yugipedia.com//5/5c/Back-EN.png",
    color: "#ffd966"
  },
  "extra": {
    id: "extra",
    name: "Extra Deck",
    type: "Deck Extra",
    stats: "15 cartas",
    desc: "Fusión, Sincronía, etc.",
    image: "https://ms.yugipedia.com//5/5c/Back-EN.png",
    color: "#b77eff"
  }
};
