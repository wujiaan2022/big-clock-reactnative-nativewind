// useToggle.tsx
import { useState } from 'react';

export const useToggle = () => {
  const [state, setState] = useState<boolean>(false);

  const handlePress = (value?: boolean) => {
    if (typeof value === 'boolean') {
      setState(value); // Directly set to true or false
    } else {
      setState(prev => !prev); // Toggle like before
    }
  };

  return [state, setState, handlePress] as const;
};
