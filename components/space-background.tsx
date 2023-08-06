import { useCallback, useEffect, useState } from "react";
import { Animated, Easing, ImageBackground, StyleSheet, View, useWindowDimensions } from "react-native";

const imageBackground1 = require('../assets/images/components/space-background/background-space.png');
const imageBackground2 = require('../assets/images/components/space-background/background-dust.png');

export function SpaceBackground() {
    const { width } = useWindowDimensions();
    const percent = width / 100;

    const [[
        leftSpace,
        topSpace,
        leftDust,
        topDust,
    ]] = useState<[Animated.Value, Animated.Value, Animated.Value, Animated.Value]>([
        new Animated.Value(-3 * percent),
        new Animated.Value(-3 * percent),
        new Animated.Value(-9 * percent),
        new Animated.Value(-8 * percent),
    ]);

    const moveToRandom = useCallback((animation: Animated.Value, margin: number) => {
        const randomTiming = Math.random() * 10000 + 3000;
        Animated.timing(
            animation,
            {
                toValue: (Math.random() * margin * -1) * percent,
                duration: randomTiming,
                useNativeDriver: true,
                easing: Easing.linear
            }
        ).start(() => moveToRandom(animation, margin));
    }, [percent]);

    useEffect(() => {
        moveToRandom(leftSpace, 3);
        moveToRandom(topSpace, 3);
        moveToRandom(leftDust, 9);
        moveToRandom(topDust, 7);
    }, []);

    return <View style={{ width: '100vw', height: '100vh', position: "absolute", }}>
        <Animated.View style={{ ...styles.background, ...styles.spaceBackground, left: leftSpace, top: topSpace }}>
            <ImageBackground
                style={{ ...styles.backgroundImage }}
                imageStyle={{ resizeMode: "cover" }}
                source={imageBackground1}
                resizeMode='cover'
            />
        </Animated.View>
        <Animated.View style={{ ...styles.background, ...styles.spaceBackground, left: leftDust, top: topDust }}>
            <ImageBackground
                style={{ ...styles.backgroundImage }}
                imageStyle={{ resizeMode: "cover" }}
                source={imageBackground2}
                resizeMode='cover'
            />
        </Animated.View>
    </View>;
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
    },
    backgroundImage: {
        position: "absolute",
        width: '100%',
        height: '100%',
    },
    spaceBackground: {
        aspectRatio: '1366 / 953',
        width: '106%',
        minWidth: 1366
    },
    dustBackground: {
        aspectRatio: '1666 / 1163',
        width: '130%',
        minWidth: 1666,
    }
});