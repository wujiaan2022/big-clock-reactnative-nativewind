import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import { DisplayClock, FontResize, SecondsToggle } from './';
import { ClockProvider, useClock } from '../context/ClockContext';
import ThemeSwitch from './ThemeSwitch';
import { useNavBar } from '~/hooks/useNavBar';

export default function OrientationBlock() {
  useNavBar(); // ✅ Fully safe here

  const {
    isLandscape,
    theme,
    themeBackground,
    themeStyle,
    showControls,
    resetHideControlsTimer,
    notice,
  } = useClock();

  const controls = [SecondsToggle, FontResize, ThemeSwitch];

  const LayoutContent = () => (
    <>
      <View className="relative flex-1 flex-col items-center justify-evenly">
        <DisplayClock />
        {notice && (
          <View
            className={`absolute z-10 ${
              isLandscape
                ? 'right-10 top-6' // 📺 Landscape: Top-right
                : 'bottom-6' // 📱 Portrait: Above control bar
            }`}
          >
            <Text
              className="text-base font-bold"
              style={{ color: themeStyle.color }}
            >
              {notice}
            </Text>
          </View>
        )}
      </View>

      {showControls && (
        <View
          className={`items-center justify-evenly ${isLandscape ? 'flex-col mr-3' : 'flex-row mb-3'}`}
        >
          {controls.map((Control, index) => (
            <View
              key={index}
              className="w-full flex-1 items-center justify-evenly"
            >
              <Control />
            </View>
          ))}
        </View>
      )}
    </>
  );

  console.log('🖼️ Theme background:', themeBackground);

  return theme === 'dark' && themeBackground ? (
    <ImageBackground
      source={themeBackground}
      resizeMode="cover"
      style={{
        width: '100%',
      }}
    >
      <TouchableWithoutFeedback onPress={resetHideControlsTimer}>
        <View className={`flex-1 ${isLandscape ? 'flex-row' : 'flex-col'}`}>
          <LayoutContent />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  ) : (
    <View
      className="flex-1"
      style={{ backgroundColor: themeStyle.backgroundColor }}
    >
      <TouchableWithoutFeedback onPress={resetHideControlsTimer}>
        <View className={`flex-1 ${isLandscape ? 'flex-row' : 'flex-col'}`}>
          <LayoutContent />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
