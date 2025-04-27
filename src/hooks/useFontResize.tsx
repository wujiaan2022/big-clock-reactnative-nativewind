import { useState, useEffect } from 'react';
import { useClock } from '~/context/ClockContext';

export function useFontResize(isLandscape: boolean) {
  // const [fontSize, setFontSize] = useState<number>(isLandscape ? 11 : 3);

  const minFont = isLandscape ? 9 : 3;
  const maxFont = isLandscape ? 15 : 6;

  const [fontSize, setFontSize] = useState<number>(minFont);

  const increase = () => {
    setFontSize((prev) => (prev < maxFont ? prev + 1 : prev));
    // setFontSize((prev) => Math.min(prev + 1, maxFont));
  };

  const decrease = () => {
    setFontSize((prev) => (prev > minFont ? prev - 1 : prev));
    // setFontSize((prev) => Math.max(prev - 1, minFont));
  };

  const reset = () => {
    setFontSize(minFont);
  };

  // 🔥 Add this useEffect
  useEffect(() => {
    setFontSize(minFont);
  }, [isLandscape]); // ✅ Runs whenever orientation changes!

  return { fontSize, setFontSize, increase, decrease, reset };
}
