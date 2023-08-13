import React, { useState, useEffect, PropsWithChildren, useCallback } from 'react';
import { View, Animated, ImageBackground, PanResponder, Dimensions, Platform, ImageStyle, StyleProp, ViewStyle } from 'react-native';
import DeviceMovieView, { IMouseMoveViewProps } from './device-move-vıew';
// import { accelerometer } from 'react-native-sensors';
// import { Platform } from 'react-native';

const imageBackground1 = require('../assets/images/components/space-background/background-space.png');
const imageBackground2 = require('../assets/images/components/space-background/background-dust.png');

const { width, height } = Dimensions.get('window');
const BACKGROUND_ENLARGE_FACTOR = 1.3; // to enlarge the background

export const SpaceBackground: React.FC<PropsWithChildren> = ({ children }) => {
    const [offsetX, setOffsetX] = useState<number>(0);
    const [offsetY, setOffsetY] = useState<number>(0);

    useEffect(() => {
        // We can add the sensors logic here later
    }, []);

    const handleMouseMove = useCallback<IMouseMoveViewProps['onMouseMove']>(({ clientX, clientY }) => {
        console.log('handleMouseMove', { clientX, clientY });
        setOffsetX(clientX * 12 / 100);
        setOffsetY(clientY * 12 / 100);
    }, []);

    return (
        <DeviceMovieView onMouseMove={handleMouseMove} style={styles.container}>
            <Animated.View
                style={{
                    ...styles.background,
                    transform: [
                        { translateX: offsetX },
                        { translateY: offsetY },
                    ],
                } as StyleProp<ViewStyle>}
            >
                <ImageBackground source={imageBackground1} style={styles.backgroundImage as ImageStyle} />
            </Animated.View>
            <Animated.View
                style={{
                    ...styles.background,
                    transform: [
                        { translateX: offsetX / 4 },
                        { translateY: offsetY / 4 },
                    ],
                } as StyleProp<ViewStyle>}
            >
                <ImageBackground source={imageBackground2} style={styles.backgroundImage} />
            </Animated.View>
            <View style={styles.childrenContainer}>{children}</View>
        </DeviceMovieView>
    );
};

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    } as StyleProp<ViewStyle>,
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        width: `${BACKGROUND_ENLARGE_FACTOR * 100}%`,
        height: `${BACKGROUND_ENLARGE_FACTOR * 100}%`,
        marginLeft: `${-(BACKGROUND_ENLARGE_FACTOR - 1) * 100 / 2}%`,
        marginTop: `${-(BACKGROUND_ENLARGE_FACTOR - 1) * 100 / 2}%`
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    } as StyleProp<ViewStyle>,
    childrenContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    } as StyleProp<ViewStyle>,
};