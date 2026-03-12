import React from 'react';
import { Card } from '../types';
import styles from './CardPanel.module.css';

interface CardPanelProps {
  selectedCard: Card | null;
  opponentHandSize: number;
  playerHandSize: number;
  zoomFactor: number;
  onOpponentHandChange: (value: number) => void;
  onPlayerHandChange: (value: number) => void;
  onZoomChange: (value: number) => void;
}

export const CardPanel: React.FC<CardPanelProps> = ({
  selectedCard,
  opponentHandSize,
  playerHandSize,
  zoomFactor,
  onOpponentHandChange,
  onPlayerHandChange,
  onZoomChange
}) => {
  return (
    <aside className={styles.panel}>
      <div className={styles.imageWrapper} style={{ borderColor: selectedCard?.color || '#3a4a5a' }}>
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

      <div className={styles.controls}>
        <div className={styles.sliderGroup}>
          <label>Oponente</label>
          <input
            type="range"
            min="0"
            max="9"
            value={opponentHandSize}
            onChange={(e) => onOpponentHandChange(parseInt(e.target.value))}
          />
          <span>{opponentHandSize}</span>
        </div>
        <div className={styles.sliderGroup}>
          <label>Jugador</label>
          <input
            type="range"
            min="0"
            max="9"
            value={playerHandSize}
            onChange={(e) => onPlayerHandChange(parseInt(e.target.value))}
          />
          <span>{playerHandSize}</span>
        </div>
        <div className={styles.sliderGroup}>
          <label>Tamaño</label>
          <input
            type="range"
            min="0.8"
            max="2.5"
            step="0.05"
            value={zoomFactor}
            onChange={(e) => onZoomChange(parseFloat(e.target.value))}
          />
          <span>{zoomFactor.toFixed(2)}x</span>
        </div>
      </div>

      <div className={styles.logArea}>
        {selectedCard ? `Último: ${selectedCard.name}` : 'Toca una carta'}
      </div>
    </aside>
  );
};