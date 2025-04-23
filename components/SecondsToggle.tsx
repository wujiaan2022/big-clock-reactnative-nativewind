// SecondsToggle.tsx
import useToggle from 'hooks/useToggle';
import { Pressable, Text } from 'react-native';

type Props = {
  showSeconds: boolean;
  toggleShowSeconds: () => void;
};

const SecondsToggle = ({ showSeconds, toggleShowSeconds }: Props) => {
  return (
    <Pressable onPress={toggleShowSeconds}>
      <Text className="font-semibold text-gray-700">
        {showSeconds ? 'Hide Seconds' : 'Show Seconds'}
      </Text>
    </Pressable>
  );
};

export default SecondsToggle;
