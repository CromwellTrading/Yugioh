import React, { useState } from 'react';
import { CardPanel } from './components/CardPanel';
import { Hand } from './components/Hand';
import { Board } from './components/Board';
import { useZoom } from './hooks/useZoom';
import { cardsData } from './data/cards';
import { ZoneData, HandCard } from './types';
import styles from './App.module.css';

const initialZones: ZoneData[] = [
  { id: 'o-deck', type: 'deck', hasCard: true, cardId: 'deck' },
  { id: 'o-st1', type: 'spell', hasCard: false },
  { id: 'o-st2', type: 'spell', hasCard: false },
  { id: 'o-st3', type: 'spell', hasCard: false },
  { id: 'o-st4', type: 'spell', hasCard: false },
  { id: 'o-st5', type: 'spell', hasCard: false },
  { id: 'o-extra', type: 'extra', hasCard: true, cardId: 'extra' },
  { id: 'o-grave', type: 'grave', hasCard: false },
  { id: 'o-m1', type: 'monster', hasCard: true, cardId: '1', defense: false },
  { id: 'o-m2', type: 'monster', hasCard: false },
  { id: 'o-m3', type: 'monster', hasCard: true, cardId: '4', defense: true },
  { id: 'o-m4', type: 'monster', hasCard: false },
  { id: 'o-m5', type: 'monster', hasCard: false },
  { id: 'o-field', type: 'field', hasCard: false },
  { id: 'p-field', type: 'field', hasCard: false },
  { id: 'p-m1', type: 'monster', hasCard: true, cardId: '2', defense: false },
  { id: 'p-m2', type: 'monster', hasCard: false },
  { id: 'p-m3', type: 'monster', hasCard: false },
  { id: 'p-m4', type: 'monster', hasCard: false },
  { id: 'p-m5', type: 'monster', hasCard: false },
  { id: 'p-grave', type: 'grave', hasCard: false },
  { id: 'p-extra', type: 'extra', hasCard: true, cardId: 'extra' },
  { id: 'p-st1', type: 'trap', hasCard: true, cardId: '3' },
  { id: 'p-st2', type: 'spell', hasCard: false },
  { id: 'p-st3', type: 'spell', hasCard: false },
  { id: 'p-st4', type: 'spell', hasCard: false },
  { id: 'p-st5', type: 'spell', hasCard: false },
  { id: 'p-deck', type: 'deck', hasCard: true, cardId: 'deck' },
  { id: 'center-left', type: 'field', hasCard: false },
  { id: 'center-right', type: 'field', hasCard: false }
];

function App() {
  const [zones] = useState<ZoneData[]>(initialZones);
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const [opponentHandSize, setOpponentHandSize] = useState(5);
  const [playerHandSize, setPlayerHandSize] = useState(5);
  const { zoomFactor, setZoomFactor } = useZoom(1.5); // Zoom inicial más grande

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
      <CardPanel
        selectedCard={selectedCard ? cardsData[selectedCard] : null}
        opponentHandSize={opponentHandSize}
        playerHandSize={playerHandSize}
        zoomFactor={zoomFactor}
        onOpponentHandChange={setOpponentHandSize}
        onPlayerHandChange={setPlayerHandSize}
        onZoomChange={setZoomFactor}
      />
      <main className={styles.boardContainer}>
        <div className={styles.hud}>
          <div className={styles.hudLeft}>
            <div className={styles.lpBox}>
              <span className={styles.lpValue}>8000</span>
              <span className={styles.lpLabel}>LP</span>
            </div>
            <div className={styles.turnBox}>
              <span>Turno 3</span>
            </div>
          </div>
          <div className={styles.hudRight}>
            <div className={styles.lpBoxOpponent}>
              <span className={styles.lpValue}>8000</span>
              <span className={styles.lpLabel}>LP</span>
            </div>
            <div className={styles.phaseBox}>
              <span>BP</span>
            </div>
          </div>
        </div>

        <div className={styles.opponentHandWrapper}>
          <Hand cards={opponentHand} />
        </div>

        <div className={styles.boardWrapper}>
          <Board
            zones={zones}
            cards={cardsData}
            selectedZoneId={selectedZoneId}
            onSelectZone={setSelectedZoneId}
            zoomFactor={zoomFactor}
          />
        </div>

        <div className={styles.playerHandWrapper}>
          <Hand cards={playerHand} />
        </div>
      </main>
    </div>
  );
}

export default App;