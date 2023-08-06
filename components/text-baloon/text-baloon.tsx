import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { useIsMobile } from "../../hooks/use-is-mobile";

const desktopBackground = require('../../assets/images/components/text-baloon/text-baloon-desktop.svg');
const mobileBackground = require('../../assets/images/components/text-baloon/text-baloon-mobile.svg');

export function TextBaloon() {
    const isMobile = useIsMobile();
    return <ImageBackground
        style={{ ...styles.container, ...(isMobile ? styles.mobileView : styles.desktopView) }}
        source={isMobile ? mobileBackground : desktopBackground}
    >
        <Text style={{ ...styles.text, ...(isMobile ? styles.mobileText : styles.desktopText) }}>
            Все начинается с&nbsp;самого легкого и&nbsp;самого распространенного элемента во&nbsp;вселенной&nbsp;&mdash; водорода.
            Изначально вся наша вселенная состояла только из&nbsp;этого газа.
            Затем под воздействием гравитации этот газ стал сжиматься во&nbsp;все более плотные области.
            <br />
            <br />
            Чем сильнее он&nbsp;сжимался, тем сильнее становилось притяжение, и&nbsp;притягивалось еще больше газа.
        </Text>
    </ImageBackground>;
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontWeight: '400',
    },
    desktopText: {
        fontSize: 24,
    },
    mobileText: {
        fontSize: 20,
    },
    desktopView: {
        width: 613,
        height: 363,
        paddingTop: 53,
        paddingRight: 40,
        paddingLeft: 40,
        paddingBottom: 35,
    },
    mobileView: {
        width: 337,
        height: 469,
        paddingTop: 70,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    container: {
        position: 'absolute',
        display: 'flex',
    }
});