import { useEffect } from "react";
import { View } from "react-native";
import { Accelerometer } from 'expo-sensors';
import { IMouseMoveViewProps } from "./types";

const AccelerometerMoveView: React.FC<IMouseMoveViewProps> = ({
    style,
    onMouseMove,
    children
}) => {
    Accelerometer.setUpdateInterval(16);

    useEffect(() => {
        const subscription = Accelerometer.addListener(({ x, y }) => onMouseMove({ clientX: x, clientY: y }));
        return () => subscription.remove();
    }, [onMouseMove]);

    return (
        <View style={style}>
            {children}
        </View>
    );
};

export default AccelerometerMoveView;