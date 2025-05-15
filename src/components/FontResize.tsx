import { View, Pressable, Text } from 'react-native';
import { useClock } from '../context/ClockContext';

export default function FontResize() {
  const { increase, decrease, reset, isLandscape, themeStyle } = useClock();
  return (
    <View
      className={`items-center gap-9 ${isLandscape ? 'flex-col' : 'flex-row'}`}
    >
      {/* Increase */}
      <Pressable onPress={increase}>
        <Text
          className="text-3xl font-bold"
          style={{ color: themeStyle.color }}
        >
          +
        </Text>
      </Pressable>

      {/* Reset */}
      {/* <Pressable onPress={reset}>
        <Text className="text-2xl">♻️</Text>
      </Pressable> */}

      {/* Decrease */}
      <Pressable onPress={decrease}>
        <Text
          className="text-5xl font-bold"
          style={{ color: themeStyle.color }}
        >
          -
        </Text>
      </Pressable>
    </View>
  );
}
