import React from 'react';
import { ZoneData } from '../types';
import styles from './Zone.module.css';

interface ZoneProps {
  zone: ZoneData;
  isSelected: boolean;
  onSelect: (id: string) => void;
  cardImage?: string;
  defense?: boolean;
  className?: string;
}

export const Zone: React.FC<ZoneProps> = ({
  zone,
  isSelected,
  onSelect,
  cardImage,
  defense,
  className = ''
}) => {
  return (
    <div
      className={`${styles.zone} ${styles[zone.type]} ${isSelected ? styles.selected : ''} ${zone.hasCard ? styles.hasCard : ''} ${className}`}
      onClick={() => onSelect(zone.id)}
      data-type={zone.type}
    >
      {zone.hasCard && cardImage && (
        <div
          className={`${styles.card} ${defense ? styles.defense : ''}`}
          style={{ backgroundImage: `url(${cardImage})` }}
        />
      )}
    </div>
  );
};