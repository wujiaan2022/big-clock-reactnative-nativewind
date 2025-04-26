import { useState } from 'react';

const MIN_FONT = 7;
const MAX_FONT = 19;

export function useFontResize() {
  const [fontSize, setFontSize] = useState<number>(MIN_FONT);

  const increase = () => {
    setFontSize((prev) => (prev < MAX_FONT ? prev + 1 : prev));
  };

  const decrease = () => {
    setFontSize((prev) => (prev > MIN_FONT ? prev - 1 : prev));
  };

  const reset = () => {
    setFontSize(MIN_FONT);
  };

  return { fontSize, setFontSize, increase, decrease, reset };
}
