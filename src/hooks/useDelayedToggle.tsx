// src/hooks/useDelayedToggle.ts
import { useEffect, useState } from 'react';

export const useDelayedToggle = (initial = true, delay = 8000) => {
  const [value, setValue] = useState(initial);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  const resetTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setValue(true);
    const newTimer = setTimeout(() => setValue(false), delay);
    setTimer(newTimer);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return { value, setValue, resetTimer };
};
