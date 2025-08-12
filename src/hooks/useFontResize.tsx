import { useState, useEffect } from 'react';

export function useFontResize(isLandscape: boolean, showSeconds: boolean) {
  const minFont = isLandscape && showSeconds ? 9 : isLandscape ? 12 : 3;
  const maxFont = isLandscape ? (showSeconds ? 12 : 23) : showSeconds ? 6 : 9;

  const [fontSize, setFontSize] = useState<number>(maxFont);
  const [notice, setNotice] = useState<string | null>(null);

  const increase = () => {
    if (fontSize < maxFont) {
      setFontSize(prev => prev + 1);
      setNotice(null);
    } else {
      setNotice('📏 Max size reached');
    }
  };

  const decrease = () => {
    if (fontSize > minFont) {
      setFontSize(prev => prev - 1);
      setNotice(null);
    } else {
      setNotice('🪶 Min size reached');
    }
  };

  const reset = () => {
    setFontSize(maxFont);
  };

  useEffect(() => {
    setFontSize(maxFont);
  }, [isLandscape, showSeconds]);

  useEffect(() => {
    if (notice) {
      const timeout = setTimeout(() => setNotice(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [notice]);

  useEffect(() => {
    console.log('🔍 Current font size:', fontSize);
  }, [fontSize]);

  return { fontSize, increase, decrease, reset, notice };
}
