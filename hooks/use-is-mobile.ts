import { useWindowDimensions } from "react-native";

export const useIsMobile = (): boolean => {
    const {width, height} = useWindowDimensions();
    return width < height;
};