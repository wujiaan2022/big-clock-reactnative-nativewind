// useToggle.tsx
import { useState } from "react";

export const useToggle = () => {
    const [state, setState] = useState<boolean>(false);
    const handlePress = () => {
        setState(prev => !prev)
    }

    return [state, setState, handlePress] as const
}

