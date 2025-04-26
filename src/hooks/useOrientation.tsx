import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  useEffect(() => {
    const onChange = () => {
      const { width, height } = Dimensions.get('window');
      const landscape = width > height;
      setIsLandscape(landscape);
      console.log('Orientation changed to:', landscape ? 'Landscape' : 'Portrait');
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    onChange();
    return () => subscription.remove();
  }, []);

  return isLandscape;
};


