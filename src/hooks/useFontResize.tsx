import { useState, useEffect } from 'react';
import { useClock } from '~/context/ClockContext';

export function useFontResize(isLandscape: boolean, showSeconds: boolean) {
  // const { isLandscape, showSeconds } = useClock();

  const minFont = isLandscape && showSeconds ? 9 : isLandscape ? 12 : 3;
  const maxFont = isLandscape ? (showSeconds ? 13 : 18) : showSeconds ? 6 : 9;

  const [fontSize, setFontSize] = useState<number | undefined>(undefined);

  const [notice, setNotice] = useState<string | null>(null);

  const increase = () => {
    if (fontSize !== undefined && fontSize < maxFont) {
      setFontSize(prev => (prev !== undefined ? prev + 1 : maxFont));
      setNotice(null);
    } else {
      setNotice('📏 Max size reached');
      setTimeout(() => setNotice(null), 3000);
    }
  };

  const decrease = () => {
    if (fontSize !== undefined && fontSize > minFont) {
      setFontSize(prev => (prev !== undefined ? prev - 1 : minFont));
      setNotice(null);
    } else {
      setNotice('🪶 Min size reached');
    }
  };

  const reset = (size?: number) => {
    if (typeof size === 'number') {
      setFontSize(size);
    } else {
      setFontSize(maxFont); // fallback to your initial size
    }
  };

  useEffect(() => {
    if (fontSize === undefined) {
      setFontSize(maxFont); // initial default only once
    }
  }, [isLandscape, showSeconds]); // ✅ Runs whenever orientation and show seconds changes!

  useEffect(() => {
    if (notice) {
      const timeOut = setTimeout(() => setNotice(null), 3000);
      return () => clearTimeout(timeOut);
    }
  }, [notice]);

  // ✅ Add this to log every time the font size changes
  useEffect(() => {
    console.log('🔍 Current font size:', fontSize);
  }, [fontSize]);

  return { fontSize, setFontSize, increase, decrease, reset, notice };
}
