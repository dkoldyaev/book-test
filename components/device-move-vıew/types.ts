import { StyleProp, ViewProps, ViewStyle } from "react-native";

export interface IMouseMoveViewProps extends ViewProps {
    onMouseMove: (event: { clientX: number, clientY: number }) => void;
}