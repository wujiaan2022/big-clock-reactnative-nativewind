import useFontResize from "hooks/useFontResize";
import { Pressable, Text } from "react-native";


export default function FontResize() {
    const {fontSize, setFontSize, increase, decrease, reset} = useFontResize()

    return (
        <Pressable>
            <Text onPress={increase}>Increase</Text>
            <Text onPress={reset}>Reset</Text>
            <Text onPress={decrease}>Decrease</Text>
        </Pressable>
    )
}