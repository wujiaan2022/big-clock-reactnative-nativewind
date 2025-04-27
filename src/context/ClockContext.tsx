import { createContext, useContext } from 'react';
import { useToggle, useOrientation, useFontResize } from '../hooks';

// 1️⃣ Create Context
export const ClockContext = createContext<any>(null);

// 2️⃣ Create Provider
export function ClockProvider({ children }: { children: React.ReactNode }) {
  const [showSeconds, , toggleShowSeconds] = useToggle();
  const isLandscape = useOrientation();
  const { fontSize, increase, decrease, reset } = useFontResize(isLandscape);
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
      }}>
      {children}
    </ClockContext.Provider>
  );
}

// 3️⃣ Optional: Export a custom hook to access it easily
export function useClock() {
  return useContext(ClockContext);
}
