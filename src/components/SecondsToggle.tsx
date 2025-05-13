// SecondsToggle.tsx
import { Pressable, Text } from 'react-native';
import { useClock } from '../context/ClockContext';

const SecondsToggle = () => {
  const { toggleShowSeconds, showSeconds, themeStyle } = useClock();
  return (
    <Pressable onPress={toggleShowSeconds}>
      <Text
        className="items-center justify-center text-2xl"
        style={{ color: themeStyle.color }}
      >
        {showSeconds ? '00:00' : '0:0:0'}
      </Text>
    </Pressable>
  );
};

export default SecondsToggle;
