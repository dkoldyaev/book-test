import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { TPositionProps } from '../../types/unit.types';
import { THydrogenMode } from './types';

const sizes = {
    huge: 255,
    medium: 71,
    point: 25,
}

const background = {
    huge: require('../../assets/images/components/hydrogen/hydrogen-huge.png'),
    medium: require('../../assets/images/components/hydrogen/hydrogen-medium.png'),
    point: require('../../assets/images/components/hydrogen/hydrogen-dot.png'),
};

const animationConfig = { duration: 1000, easing: Easing.ease };

export type THydrogenProps = {
    visible?: boolean;
    state: THydrogenMode;
    left: TPositionProps;
    top: TPositionProps;
    marginTop?: number;
    marginLeft?: number;
    marginBottom?: number;
    marginRight?: number;
};

export const Hydrogen: React.FC<THydrogenProps> = ({
    visible = true,
    state,
    left,
    top,
    marginTop,
    marginLeft,
    marginBottom,
    marginRight
}) => {
    const [prevState, setPrevState] = useState(state);
    const opacity = useSharedValue(visible ? 1 : 0);
    const sizeValue = useSharedValue(sizes[state]);
    const imageOpacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(visible ? 1 : 0, animationConfig);
        sizeValue.value = withTiming(sizes[state], animationConfig);
    }, [visible, state]);

    useEffect(() => {
        if (state !== prevState) {
            imageOpacity.value = withTiming(1, animationConfig, () => {
                setPrevState(state);
                imageOpacity.value = 0;
            });
        }
    }, [state]);

    const containerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            width: sizeValue.value,
            height: sizeValue.value,
        };
    }, [opacity, sizeValue]);

    const imageAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: imageOpacity.value,
        };
    }, [imageOpacity]);

    return (
        <Animated.View
            style={[
                styles.container,
                { top: top, left: left, marginTop, marginLeft, marginBottom, marginRight },
                containerAnimatedStyle
            ]}
        >
            <Image source={background[prevState]} style={styles.image} resizeMode="cover" />
            {state !== prevState && (
                <Animated.Image source={background[state]} style={[styles.image, imageAnimatedStyle]} resizeMode="cover" />
            )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
});

export default Hydrogen;
