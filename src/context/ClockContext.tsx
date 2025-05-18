import { createContext, useContext } from 'react';
import {
  useToggle,
  useTheme,
  useOrientation,
  useNavBar,
  useFontResize,
  useDelayedToggle,
} from '../hooks';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

import type { ImageSourcePropType } from 'react-native'; // for image
import type { ThemeMode } from '~/hooks/useTheme'; // reuse your type

export interface ClockContextType {
  showSeconds: boolean;
  toggleShowSeconds: () => void;

  isLandscape: boolean;

  fontSize: number | undefined;
  increase: () => void;
  decrease: () => void;
  reset: () => void;

  notice: string | null;

  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;

  showThemes: boolean;
  setShowThemes: (val: boolean) => void;
  toggleShowThemes: () => void;

  themeStyle: {
    backgroundColor: string;
    color: string;
  };

  themeBackground: ImageSourcePropType | null;

  selectTheme: (theme: ThemeMode) => void;

  showControls: boolean;
  resetHideControlsTimer: () => void;
}

// 1️⃣ Create Context
export const ClockContext = createContext<ClockContextType | null>(null);

// 2️⃣ Create Provider
export function ClockProvider({ children }: { children: React.ReactNode }) {
  const [showSeconds, , toggleShowSeconds] = useToggle();
  const isLandscape = useOrientation();
  const { fontSize, increase, decrease, reset, notice } = useFontResize(
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
    themeBackground,
    selectTheme,
  } = useTheme();
  const { value: showControls, resetTimer: resetHideControlsTimer } =
    useDelayedToggle();

  // ⬇️ AFTER ALL HOOKS ARE CALLED

  const maxFont = isLandscape ? (showSeconds ? 13 : 18) : showSeconds ? 6 : 9;
  const safeFontSize = fontSize ?? maxFont;

  type ClockSettings = {
    showSeconds: boolean;
    theme: string;
    fontSize?: number; // ← ✅ optional
  };

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await AsyncStorage.getItem('clock-settings');
        if (settings) {
          const parsed = JSON.parse(settings);

          if (
            typeof parsed.showSeconds === 'boolean' &&
            typeof parsed.theme === 'string' &&
            typeof parsed.fontSize === 'number'
          ) {
            toggleShowSeconds(parsed.showSeconds);
            setTheme(parsed.theme);
            reset(parsed.fontSize);
          }
        }
      } catch (error) {
        console.log('Error loading settings:', error);
      }
    };
    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        const settings: ClockSettings = {
          showSeconds,
          theme,
          fontSize: safeFontSize,
        };
        await AsyncStorage.setItem('clock-settings', JSON.stringify(settings));
      } catch (error) {
        console.log('Error saving settings:', error);
      }
    };
    saveSettings();
  }, [showSeconds, theme, fontSize]);

  return (
    <ClockContext.Provider
      value={{
        showSeconds,
        toggleShowSeconds,
        isLandscape,
        fontSize: safeFontSize,
        increase,
        decrease,
        reset,
        notice,
        theme,
        setTheme,
        showThemes,
        setShowThemes,
        toggleShowThemes,
        themeStyle,
        themeBackground,
        selectTheme,
        showControls,
        resetHideControlsTimer,
      }}
    >
      {children}
    </ClockContext.Provider>
  );
}

// 3️⃣ Export a custom hook to access it easily
export function useClock() {
  const context = useContext(ClockContext);
  if (!context) {
    throw new Error('useClock must be used within a ClockProvider');
  }
  return context;
}
