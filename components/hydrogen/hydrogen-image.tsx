import { useEffect, useState } from "react";
import { ViewStyle, Animated, Easing, ImageBackground, ImageSourcePropType, StyleSheet, Text } from "react-native";
import { THydrogenProps } from "./hydrogen";

const hydrogenHuge = require('../../assets/images/components/hydrogen/hydrogen-huge.png');
const hydrogenDot = require('../../assets/images/components/hydrogen/hydrogen-dot.png');
const hydrogenMedium = require('../../assets/images/components/hydrogen/hydrogen-medium.png');

export function HydroImage({
    active,
    mode,
    style
}: {
    active: boolean,
    mode: THydrogenProps['mode'],
    style: {
        width: Animated.Value,
        height: Animated.Value,
    },
}) {
    const [opacity] = useState(new Animated.Value(active ? 1 : 0));

    useEffect(() => {
        Animated.timing(
            opacity,
            {
                toValue: active ? 1 : 0,
                duration: 3000,
                useNativeDriver: true,
                easing: Easing.ease,
            },
        ).start();
    }, [active]);

    return (
        <Animated.View style={{ opacity, ...style, ...styles.container }}>
            <ImageBackground
                style={styles.image}
                source={background[mode]}
            >
                {/* <Text style={styles.debugText}>{mode}</Text> */}
            </ImageBackground>
        </Animated.View>
    );
}

const background: Record<THydrogenProps['mode'], ImageSourcePropType> = {
    huge: hydrogenHuge,
    medium: hydrogenMedium,
    point: hydrogenDot,
};

const styles = StyleSheet.create({
    image: {
        position: "absolute",
        width: '100%',
        height: '100%'
    },
    container: {
        position: "absolute",
    },
    debugText: {
        color: 'red',
        textAlign: 'center',
        position: 'absolute',
    }
})