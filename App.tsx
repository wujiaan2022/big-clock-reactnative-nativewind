import { View } from 'react-native';
import './global.css';

import DisplayClock from 'components/DisplayClock';
import SecondsToggle from 'components/SecondsToggle';
import useToggle from 'hooks/useToggle';
import useOrientation from 'hooks/useOrientation';

const App = () => {
  const [showSeconds, , toggleShowSeconds] = useToggle();
  const isLandscape = useOrientation();

  return (
    <View className={`flex-1 bg-amber-100 ${isLandscape ? 'flex-row' : 'flex-col'}`}>
      {/* Clock section */}
      <View className="flex-1 items-center justify-center">
        <DisplayClock showSeconds={showSeconds} />
      </View>

      {/* Settings section */}
      <View className="items-center justify-center p-4">
        <SecondsToggle showSeconds={showSeconds} toggleShowSeconds={toggleShowSeconds} />
      </View>
    </View>
  );
};

export default App;
