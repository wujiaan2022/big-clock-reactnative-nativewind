import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

type Props = { showSeconds: boolean };

const DisplayClock = ({ showSeconds }: Props) => {
  const [time, setTime] = useState<string>('');

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

  return (
    <View>
      <Text className="px-4 py-6 text-7xl font-bold text-gray-800">{time}</Text>
    </View>
  );
};

export default DisplayClock;
