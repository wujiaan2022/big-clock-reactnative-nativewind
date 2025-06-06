import { createContext, useContext } from 'react';
import {
  useToggle,
  useTheme,
  useOrientation,
  useFontResize,
  useDelayedToggle,
} from '../hooks';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import type { ImageSourcePropType } from 'react-native';
import type { ThemeMode } from '~/hooks/useTheme';

export interface ClockContextType {
  showSeconds: boolean;
  toggleShowSeconds: () => void;

  isLandscape: boolean;

  fontSize: number;
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

  isSettingsLoaded: boolean;
}

// 1️⃣ Create Context
export const ClockContext = createContext<ClockContextType | null>(null);

// 2️⃣ Create Provider
export function ClockProvider({ children }: { children: React.ReactNode }) {
  const [isSettingsLoaded, setIsSettingsLoaded] = useState(false);
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

  // Only load non-font settings
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await AsyncStorage.getItem('clock-settings');
        if (settings) {
          const parsed = JSON.parse(settings);

          if (typeof parsed.showSeconds === 'boolean') {
            toggleShowSeconds(parsed.showSeconds);
          }

          if (typeof parsed.theme === 'string') {
            setTheme(parsed.theme);
          }
        }
      } catch (error) {
        console.log('Error loading settings:', error);
      } finally {
        setIsSettingsLoaded(true);
      }
    };
    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        const settings = {
          showSeconds,
          theme,
        };
        await AsyncStorage.setItem('clock-settings', JSON.stringify(settings));
      } catch (error) {
        console.log('Error saving settings:', error);
      }
    };

    saveSettings();
  }, [showSeconds, theme]); // ✅ Save when either changes

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
        isSettingsLoaded,
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
