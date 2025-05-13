// src/hooks/useNavBar.tsx
import { useEffect } from 'react';
import * as SystemUI from 'expo-system-ui';
import { useClock } from '~/context/ClockContext';

export function useNavBar() {
  const { themeStyle } = useClock();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(themeStyle.backgroundColor);
  }, [themeStyle.backgroundColor]);
}
