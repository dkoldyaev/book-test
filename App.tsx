import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SpaceBackground } from './components/space-background';
import { Hydrogen, THydrogenProps } from './components/hydrogen/hydrogen';
import { TextBaloon } from './components/text-baloon/text-baloon';
import { useIsMobile } from './hooks/use-is-mobile';

const timeout = 3000;

export default function App() {
  const [mode, setMode] = useState<THydrogenProps['state']>('huge');
  const isMobile = useIsMobile();
  const contentStyle = useMemo(() => {
    if (isMobile) {
      return {
        left: 0,
        width: '100%'
      }
    }
    return {
      left: '50%',
      marginLeft: -76,
      right: 0,
    };
  }, [isMobile]);

  useEffect(() => {
    setTimeout(
      () => setMode('medium'),
      3000
    );
    setTimeout(
      () => setMode('point'),
      6000
    );
  }, []);

  return (
    <View style={styles.container}>
      <SpaceBackground>
        <View style={{ position: 'absolute', top: '27px', ...contentStyle, borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>
          <Hydrogen
            visible
            state={mode}
            {...styles.HPosition}
          />
          <TextBaloon />
        </View>
      </SpaceBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  background: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  HPosition: {
    left: 40,
    top: 150,
  }
});
