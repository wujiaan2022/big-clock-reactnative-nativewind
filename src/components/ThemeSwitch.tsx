import { Pressable, View, Text } from 'react-native';

import { useClock } from '~/context/ClockContext';

export default function ThemeSwitch() {
  const { theme, setTheme, showThemes, setShowThemes, toggleShowThemes, themeStyle, selectTheme } =
    useClock();
  return (
    <View>
      <Text className="items-center justify-center font-bold" style={{ color: themeStyle.color }}>
        <Pressable onPress={toggleShowThemes}>
          <Text>🎨 Theme</Text>
        </Pressable>
        {showThemes && (
          <View>
            <Pressable onPress={() => selectTheme('light')}>
              <Text>🌞 Light</Text>
            </Pressable>
            <Pressable onPress={() => selectTheme('medium')}>
              <Text>🧘 Medium</Text>
            </Pressable>
            <Pressable onPress={() => selectTheme('dark')}>
              <Text>🌑 Dark</Text>
            </Pressable>
          </View>
        )}
      </Text>
    </View>
  );
}
