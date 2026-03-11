import React, { useState } from 'react';
import { CardPanel } from './components/CardPanel';
import { Hand } from './components/Hand';
import { Board } from './components/Board';
import { useZoom } from './hooks/useZoom';
import { cardsData } from './data/cards';
import { ZoneData, HandCard } from './types';
import styles from './App.module.css';

// Definición de las zonas del tablero
const initialZones: ZoneData[] = [
  { id: 'o-m1', type: 'monster', hasCard: true, cardId: '1', defense: false },
  { id: 'o-m2', type: 'monster', hasCard: false },
  { id: 'o-m3', type: 'monster', hasCard: true, cardId: '4', defense: true },
  { id: 'o-m4', type: 'monster', hasCard: false },
  { id: 'o-m5', type: 'monster', hasCard: false },
  { id: 'o-st1', type: 'spell', hasCard: false },
  { id: 'o-st2', type: 'spell', hasCard: false },
  { id: 'o-st3', type: 'spell', hasCard: false },
  { id: 'o-st4', type: 'spell', hasCard: false },
  { id: 'o-st5', type: 'spell', hasCard: false },
  { id: 'p-st1', type: 'trap', hasCard: true, cardId: '3' },
  { id: 'p-st2', type: 'spell', hasCard: false },
  { id: 'p-st3', type: 'spell', hasCard: false },
  { id: 'p-st4', type: 'spell', hasCard: false },
  { id: 'p-st5', type: 'spell', hasCard: false },
  { id: 'p-m1', type: 'monster', hasCard: true, cardId: '2', defense: false },
  { id: 'p-m2', type: 'monster', hasCard: false },
  { id: 'p-m3', type: 'monster', hasCard: false },
  { id: 'p-m4', type: 'monster', hasCard: false },
  { id: 'p-m5', type: 'monster', hasCard: false },
  { id: 'o-deck', type: 'deck', hasCard: true, cardId: 'deck' },
  { id: 'o-grave', type: 'grave', hasCard: false },
  { id: 'o-extra', type: 'extra', hasCard: true, cardId: 'extra' },
  { id: 'o-field', type: 'field', hasCard: false },
  { id: 'p-deck', type: 'deck', hasCard: true, cardId: 'deck' },
  { id: 'p-grave', type: 'grave', hasCard: false },
  { id: 'p-extra', type: 'extra', hasCard: true, cardId: 'extra' },
  { id: 'p-field', type: 'field', hasCard: false },
  { id: 'center-left', type: 'field', hasCard: false }, // placeholder
  { id: 'center-right', type: 'field', hasCard: false } // placeholder
];

function App() {
  const [zones] = useState<ZoneData[]>(initialZones);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [opponentHandSize, setOpponentHandSize] = useState(5);
  const [playerHandSize, setPlayerHandSize] = useState(5);
  const { zoomFactor, setZoomFactor } = useZoom(1);

  const selectedCard = selectedZoneId
    ? zones.find(z => z.id === selectedZoneId && z.hasCard)?.cardId
    : null;

  const opponentHand: HandCard[] = Array.from({ length: opponentHandSize }, (_, i) => ({
    id: `opp-${i}`,
    image: 'https://ms.yugipedia.com//5/5c/Back-EN.png'
  }));

  const playerHand: HandCard[] = Array.from({ length: playerHandSize }, (_, i) => ({
    id: `player-${i}`,
    image: 'https://ms.yugipedia.com//5/5c/Back-EN.png'
  }));

  return (
    <div className={styles.app}>
      <CardPanel selectedCard={selectedCard ? cardsData[selectedCard] : null} />
      <main className={styles.boardContainer}>
        <div className={styles.hud}>
          <div className={`${styles.lpBox} ${styles.opponent}`}>
            <span className={styles.lpValue}>8000</span>
            <img src="https://i.pravatar.cc/100?img=11" alt="Oponente" className={styles.avatar} />
            <span className={styles.playerName}>Carly</span>
          </div>
          <div className={styles.lpBox}>
            <span className={styles.lpValue}>8000</span>
            <img src="https://i.pravatar.cc/100?img=12" alt="Jugador" className={styles.avatar} />
            <span className={styles.playerName}>Tú</span>
          </div>
        </div>

        <Hand cards={opponentHand} />

        <Board
          zones={zones}
          cards={cardsData}
          selectedZoneId={selectedZoneId}
          onSelectZone={setSelectedZoneId}
          zoomFactor={zoomFactor}
        />

        <Hand cards={playerHand} />

        <div className={styles.controls}>
          <div className={styles.sliderGroup}>
            <span>Opo:</span>
            <input
              type="range"
              min="0"
              max="9"
              value={opponentHandSize}
              onChange={(e) => setOpponentHandSize(parseInt(e.target.value))}
            />
            <span>{opponentHandSize}</span>
          </div>
          <div className={styles.sliderGroup}>
            <span>Jgd:</span>
            <input
              type="range"
              min="0"
              max="9"
              value={playerHandSize}
              onChange={(e) => setPlayerHandSize(parseInt(e.target.value))}
            />
            <span>{playerHandSize}</span>
          </div>
          <div className={styles.sliderGroup}>
            <span>Tamaño:</span>
            <input
              type="range"
              min="0.7"
              max="1.5"
              step="0.05"
              value={zoomFactor}
              onChange={(e) => setZoomFactor(parseFloat(e.target.value))}
            />
            <span>{zoomFactor.toFixed(2)}x</span>
          </div>
        </div>

        <div className={styles.logArea}>
          {selectedCard ? `Último: ${cardsData[selectedCard].name}` : 'Toca una carta'}
        </div>

        <button className={styles.fullscreenBtn} onClick={() => document.documentElement.requestFullscreen()}>
          ⛶
        </button>
      </main>
    </div>
  );
}

export default App;
