import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useClock } from '../context/ClockContext';

export default function DisplayClock() {
  const [time, setTime] = useState<string>('');
  const {
    isLandscape,
    showSeconds,
    fontSize,
    theme,
    setTheme,
    showThemes,
    setShowThemes,
    toggleShowThemes,
    themeStyle,
    selectTheme,
  } = useClock();

  useEffect(() => {
    const fetchTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const secondsFormat = () => (showSeconds ? ` : ${seconds}` : '');

      setTime(`${hours} : ${minutes}${secondsFormat()}`);
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000);
    return () => clearInterval(interval);
  }, [showSeconds]);

  // const sizeClass = sizeClasses[fontSize as keyof typeof sizeClasses] || 'text-[110px]';

  useEffect(() => {
    console.log('🧪 Current theme class:', theme);
  }, [themeStyle]);

  const maxFont = isLandscape ? (showSeconds ? 13 : 18) : showSeconds ? 6 : 9;
  const safeFontSize = fontSize ?? maxFont;

  return (
    <View className="w-full flex-1 items-center justify-center">
      <Text
        style={{ fontSize: safeFontSize * 10, color: themeStyle.color }}
        className="text-center font-bold"
        numberOfLines={1}
        adjustsFontSizeToFit={false}
      >
        {time}
      </Text>
    </View>
  );
}
