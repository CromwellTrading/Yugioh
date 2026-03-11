import React from 'react';
import { Zone } from './Zone';
import { PhaseIndicator } from './PhaseIndicator';
import { ZoneData, Card } from '../types';
import styles from './Board.module.css';

interface BoardProps {
  zones: ZoneData[];
  cards: Record<string, Card>;
  selectedZoneId: string | null;
  onSelectZone: (id: string) => void;
  zoomFactor: number;
}

export const Board: React.FC<BoardProps> = ({ zones, cards, selectedZoneId, onSelectZone, zoomFactor }) => {
  // Mapeo de ids a posiciones grid
  const gridAreas: Record<string, string> = {
    'o-m1': 'o-m1', 'o-m2': 'o-m2', 'o-m3': 'o-m3', 'o-m4': 'o-m4', 'o-m5': 'o-m5',
    'o-st1': 'o-st1', 'o-st2': 'o-st2', 'o-st3': 'o-st3', 'o-st4': 'o-st4', 'o-st5': 'o-st5',
    'p-st1': 'p-st1', 'p-st2': 'p-st2', 'p-st3': 'p-st3', 'p-st4': 'p-st4', 'p-st5': 'p-st5',
    'p-m1': 'p-m1', 'p-m2': 'p-m2', 'p-m3': 'p-m3', 'p-m4': 'p-m4', 'p-m5': 'p-m5',
    'o-deck': 'o-deck', 'o-grave': 'o-grave', 'o-extra': 'o-extra', 'o-field': 'o-field',
    'p-deck': 'p-deck', 'p-grave': 'p-grave', 'p-extra': 'p-extra', 'p-field': 'p-field',
    'center-left': 'center-left', 'center-right': 'center-right'
  };

  return (
    <div className={styles.playmat} style={{ '--zoom-factor': zoomFactor } as React.CSSProperties}>
      {zones.map(zone => {
        const card = zone.hasCard && zone.cardId ? cards[zone.cardId] : undefined;
        return (
          <Zone
            key={zone.id}
            zone={zone}
            isSelected={selectedZoneId === zone.id}
            onSelect={onSelectZone}
            cardImage={card?.image}
            defense={zone.defense}
          />
        );
      })}
      <PhaseIndicator />
      <div className={styles.centerLeft}></div>
      <div className={styles.centerRight}></div>
    </div>
  );
};
