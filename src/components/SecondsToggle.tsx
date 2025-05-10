// SecondsToggle.tsx
import { Pressable, Text } from 'react-native';
import { useClock } from '../context/ClockContext';

const SecondsToggle = () => {
  const { toggleShowSeconds, showSeconds, themeStyle } = useClock();
  return (
    <Pressable onPress={toggleShowSeconds}>
      <Text className="items-center justify-center font-bold" style={{ color: themeStyle.color }}>
        {showSeconds ? 'Hide Seconds' : 'Show Seconds'}
      </Text>
    </Pressable>
  );
};

export default SecondsToggle;
