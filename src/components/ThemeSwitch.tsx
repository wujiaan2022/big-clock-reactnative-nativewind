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
        <Text
          className="text-2xl font-bold"
          style={{ color: themeStyle.color }}
        >
          🎨
        </Text>
      </Pressable>
      {showThemes && (
        <View
          className={clsx(
            `absolute z-10 ${
              isLandscape
                ? 'left-[-80px] bottom-0 items-start gap-7'
                : 'bottom-full  mb-5 gap-5'
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
