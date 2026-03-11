export interface Card {
  id: string;
  name: string;
  type: string;
  stats: string;
  desc: string;
  image: string;
  color: string;
}

export interface ZoneData {
  id: string;
  type: 'monster' | 'spell' | 'trap' | 'extra' | 'deck' | 'grave' | 'field';
  hasCard: boolean;
  cardId?: string;
  defense?: boolean;
}

export interface HandCard {
  id: string;
  image: string;
}
