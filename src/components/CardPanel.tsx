import React from 'react';
import { Card } from '../types';
import styles from './CardPanel.module.css';

interface CardPanelProps {
  selectedCard: Card | null;
}

export const CardPanel: React.FC<CardPanelProps> = ({ selectedCard }) => {
  return (
    <aside className={styles.panel}>
      <div className={styles.imageWrapper} style={{ borderColor: selectedCard?.color || '#2a3a4a' }}>
        <img src={selectedCard?.image || 'https://ms.yugipedia.com//5/5c/Back-EN.png'} alt={selectedCard?.name || 'Card back'} />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.title}>{selectedCard?.name || 'Selecciona una carta'}</div>
        <div className={styles.stats}>
          <span>{selectedCard?.type || '---'}</span>
          <span>{selectedCard?.stats || 'ATK/0 DEF/0'}</span>
        </div>
        <div className={styles.desc}>
          {selectedCard?.desc || 'Pulsa sobre cualquier carta del tablero para ver sus datos.'}
        </div>
      </div>
    </aside>
  );
};
