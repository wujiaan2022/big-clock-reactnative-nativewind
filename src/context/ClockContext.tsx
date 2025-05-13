import { createContext, useContext } from 'react';
import { useToggle, useOrientation, useFontResize } from '../hooks';
import { useTheme } from '~/hooks/useTheme';

// 1️⃣ Create Context
export const ClockContext = createContext<any>(null);

// 2️⃣ Create Provider
export function ClockProvider({ children }: { children: React.ReactNode }) {
  const [showSeconds, , toggleShowSeconds] = useToggle();
  const isLandscape = useOrientation();
  const { fontSize, increase, decrease, reset } = useFontResize(
    isLandscape,
    showSeconds
  );
  const {
    theme,
    setTheme,
    showThemes,
    setShowThemes,
    toggleShowThemes,
    themeStyle,
    selectTheme,
  } = useTheme();
  return (
    <ClockContext.Provider
      value={{
        showSeconds,
        toggleShowSeconds,
        isLandscape,
        fontSize,
        increase,
        decrease,
        reset,
        theme,
        setTheme,
        showThemes,
        setShowThemes,
        toggleShowThemes,
        themeStyle,
        selectTheme,
      }}
    >
      {children}
    </ClockContext.Provider>
  );
}

// 3️⃣ Optional: Export a custom hook to access it easily
export function useClock() {
  return useContext(ClockContext);
}
