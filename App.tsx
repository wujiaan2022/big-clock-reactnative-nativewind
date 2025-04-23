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
    <View
      className={`flex-1 items-center justify-center bg-amber-100 ${
        isLandscape ? 'flex-row' : 'flex-col'
      }`}>
      <View>
        <DisplayClock showSeconds={showSeconds} />
      </View>
      <View>
        <SecondsToggle showSeconds={showSeconds} toggleShowSeconds={toggleShowSeconds} />
      </View>
    </View>
  );
};

export default App;
