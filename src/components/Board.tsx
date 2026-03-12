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

export const Board: React.FC<BoardProps> = ({
  zones,
  cards,
  selectedZoneId,
  onSelectZone,
  zoomFactor
}) => {
  const getZoneClass = (zone: ZoneData): string => {
    return styles[zone.id] || '';
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
            className={getZoneClass(zone)}
          />
        );
      })}
      <PhaseIndicator />
      <div className={styles['center-left']}></div>
      <div className={styles['center-right']}></div>
    </div>
  );
};