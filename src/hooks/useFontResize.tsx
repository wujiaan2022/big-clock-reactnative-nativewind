import { useState, useEffect } from 'react';
import { useClock } from '~/context/ClockContext';

export function useFontResize(isLandscape: boolean, showSeconds: boolean) {
  // const { isLandscape, showSeconds } = useClock();

  const minFont = isLandscape && showSeconds ? 9 : isLandscape ? 12 : 3;
  const maxFont = isLandscape && showSeconds ? 15 : isLandscape ? 18 : 6;

  const [fontSize, setFontSize] = useState<number>(maxFont);

  const increase = () => {
    setFontSize(prev => (prev < maxFont ? prev + 1 : prev));
    // setFontSize((prev) => Math.min(prev + 1, maxFont));
  };

  const decrease = () => {
    setFontSize(prev => (prev > minFont ? prev - 1 : prev));
    // setFontSize((prev) => Math.max(prev - 1, minFont));
  };

  const reset = () => {
    setFontSize(minFont);
  };

  // 🔥 Add this useEffect
  useEffect(() => {
    setFontSize(maxFont);
  }, [isLandscape, showSeconds]); // ✅ Runs whenever orientation and show seconds changes!

  // ✅ Add this to log every time the font size changes
  useEffect(() => {
    console.log('🔍 Current font size:', fontSize);
  }, [fontSize]);

  return { fontSize, setFontSize, increase, decrease, reset };
}
