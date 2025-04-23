// useToggle.tsx
import { useState } from "react";

const useToggle = () => {
    const [state, setState] = useState<boolean>(false);
    const handlePress = () => {
        setState(prev => !prev)
    }

    return [state, setState, handlePress] as const
}

export default useToggle