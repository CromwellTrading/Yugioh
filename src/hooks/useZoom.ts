import { useState, useEffect } from 'react';

export function useZoom(initialFactor = 1) {
  const [zoomFactor, setZoomFactor] = useState(initialFactor);

  // Guardar en localStorage si se desea
  useEffect(() => {
    const saved = localStorage.getItem('zoomFactor');
    if (saved) setZoomFactor(parseFloat(saved));
  }, []);

  const handleZoomChange = (value: number) => {
    setZoomFactor(value);
    localStorage.setItem('zoomFactor', value.toString());
  };

  return { zoomFactor, setZoomFactor: handleZoomChange };
}
