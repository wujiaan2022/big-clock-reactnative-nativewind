import { Pressable, View, Text } from 'react-native';
import clsx from 'clsx';
import { useClock } from '~/context/ClockContext';

export default function ThemeSwitch() {
  const {
    isLandscape,
    theme,
    setTheme,
    showThemes,
    setShowThemes,
    toggleShowThemes,
    themeStyle,
    selectTheme,
  } = useClock();
  return (
    <View className="relative items-center justify-center">
      <Pressable onPress={toggleShowThemes}>
        <Text className="w-full font-bold" style={{ color: themeStyle.color }}>
          🎨 Theme
        </Text>
      </Pressable>
      {showThemes && (
        <View
          className={clsx(
            `absolute z-10 ${
              isLandscape
                ? 'left-[-80px] bottom-0 items-start gap-5'
                : 'bottom-full right-0  mb-3 gap-2'
            }`
          )}
        >
          <Pressable onPress={() => selectTheme('light')}>
            <Text style={{ color: themeStyle.color }}>Light</Text>
          </Pressable>
          <Pressable onPress={() => selectTheme('medium')}>
            <Text style={{ color: themeStyle.color }}>Medium</Text>
          </Pressable>
          <Pressable onPress={() => selectTheme('dark')}>
            <Text style={{ color: themeStyle.color }}>Dark</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
