import { useEffect, useMemo, useState } from "react";
import { ViewStyle, Animated, StyleSheet, Easing } from "react-native";
import { HydroImage } from "./hydrogen-image";
import { THydrogenMode } from "./types";



export type THydrogenProps = {
    mode: THydrogenMode;
    style: Pick<ViewStyle, 'left' | 'right' | 'top' | 'bottom' | 'margin' | 'width' | 'height'>;
};

export function Hydrogen({
    mode,
    style: styleProps
}: THydrogenProps) {
    const [size] = useState(new Animated.Value(sizes[mode]));
    useEffect(() => {
        Animated.timing(
            size,
            {
                toValue: sizes[mode],
                duration: 3000,
                useNativeDriver: true,
                easing: Easing.ease
            }
        ).start();
    }, [mode]);

    return (
        <Animated.View style={{ ...styleProps, ...styles.container, width: size, height: size }}>
            <HydroImage active={mode === "huge"} mode="huge" style={{ width: size, height: size }} />
            <HydroImage active={mode === "medium"} mode="medium" style={{ width: size, height: size }} />
            <HydroImage active={mode === "point"} mode="point" style={{ width: size, height: size }} />
        </Animated.View>
    );
}

const sizes: Record<THydrogenProps['mode'], number> = {
    huge: 255,
    medium: 71,
    point: 25,
}

const styles = StyleSheet.create({
    container: {
        position: "absolute"
    }
});