import React, { useState, useEffect } from 'react';
import styles from './PhaseIndicator.module.css';

const phases = ['DP', 'SP', 'MP1', 'BP', 'MP2', 'EP'];

export const PhaseIndicator: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2); // MP1

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.phaseIndicator}>
      {phases.map((phase, index) => (
        <div
          key={phase}
          className={`${styles.phaseSegment} ${index === activeIndex ? styles.active : ''}`}
        >
          {phase}
        </div>
      ))}
    </div>
  );
};
