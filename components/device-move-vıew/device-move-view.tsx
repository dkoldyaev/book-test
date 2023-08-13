import React, {  } from 'react';
import { Platform } from 'react-native';
import { IMouseMoveViewProps } from './types';

const MouseMoveView = React.lazy(() => import('./mouse-move-view'));
const AccelerometerMoveView = React.lazy(() => import('./accelerometer-move-view'));


const DeviceMovieView: React.FC<IMouseMoveViewProps> = ({ children, ...props }: IMouseMoveViewProps) => {
    if (Platform.OS === 'web') {
        return <MouseMoveView {...props}>{children}</MouseMoveView>;
    }
    return <AccelerometerMoveView {...props}>{children}</AccelerometerMoveView>;
};

export default DeviceMovieView;
