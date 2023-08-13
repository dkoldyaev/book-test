import { useCallback } from "react";
import { Dimensions, View, PointerEvent } from "react-native";
import { IMouseMoveViewProps } from "./types";

const MouseMoveView: React.FC<IMouseMoveViewProps> = ({
    style,
    onMouseMove,
    children,
}) => {
    const { width, height } = Dimensions.get('window');
    const handlePointerMovie = useCallback(({ nativeEvent: { clientX, clientY } }: PointerEvent) => {
        onMouseMove({
            clientX: (-width / 2) + clientX,
            clientY: (-height / 2) + clientY
        });
    }, [width, height, onMouseMove]);


    return (
        <View
            style={style}
            onPointerMove={handlePointerMovie}
        >
            {children}
        </View>
    );
};

export default MouseMoveView;