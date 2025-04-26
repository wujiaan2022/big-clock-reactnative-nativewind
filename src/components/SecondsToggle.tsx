// SecondsToggle.tsx

import { Pressable, Text } from 'react-native';
import { useClock } from '../context/ClockContext';

const SecondsToggle = () => {
  const { toggleShowSeconds, showSeconds } = useClock();
  return (
    <Pressable onPress={toggleShowSeconds}>
      <Text className="items-center justify-center font-bold text-red-900">
        {showSeconds ? 'Hide Seconds' : 'Show Seconds'}
      </Text>
    </Pressable>
  );
};

export default SecondsToggle;
