import React from 'react';
import { HandCard } from '../types';
import styles from './Hand.module.css';

interface HandProps {
  cards: HandCard[];
  title?: string;
}

export const Hand: React.FC<HandProps> = ({ cards, title }) => {
  return (
    <div className={styles.handContainer}>
      {cards.map((card, index) => (
        <div key={index} className={`${styles.handSlot} ${styles.hasCard}`}>
          <div className={styles.handCard} style={{ backgroundImage: `url(${card.image})` }} />
        </div>
      ))}
      {cards.length === 0 && <div className={styles.handSlot} />}
    </div>
  );
};
