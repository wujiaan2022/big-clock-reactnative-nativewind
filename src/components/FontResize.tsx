import { View, Pressable, Text } from 'react-native';
import { useClock } from '../context/ClockContext';

export default function FontResize() {
  const { increase, decrease, reset, isLandscape } = useClock();
  return (
    <View className={`items-center justify-center gap-4 ${isLandscape ? 'flex-col' : 'flex-row'}`}>
      {/* Increase */}
      <Pressable onPress={increase}>
        <Text className="text-3xl">➕</Text>
      </Pressable>

      {/* Reset */}
      <Pressable onPress={reset}>
        <Text className="text-3xl">♻️</Text>
      </Pressable>

      {/* Decrease */}
      <Pressable onPress={decrease}>
        <Text className="text-3xl">➖</Text>
      </Pressable>
    </View>
  );
}
