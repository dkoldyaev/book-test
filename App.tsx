import { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SpaceBackground } from './components/space-background';
import { Hydrogen, THydrogenProps } from './components/hydrogen/hydrogen';
import { HydrogenCloud, THydrogenCloudStepEnum } from './components/hydrogen-cloud/hydrogen-cloud';
import { TextBaloon } from './components/text-baloon/text-baloon';
import { useIsMobile } from './hooks/use-is-mobile';

const timeout = 3000;

export default function App() {
  const [mode, setMode] = useState<THydrogenCloudStepEnum>(THydrogenCloudStepEnum.stage1);

  useEffect(() => {
    setTimeout(
      () => setMode(THydrogenCloudStepEnum.stage2),
      3000
    );
    setTimeout(
      () => setMode(THydrogenCloudStepEnum.stage3),
      6000
    );
  }, []);

  return (
    <View style={styles.container}>
      <SpaceBackground>
        <HydrogenCloud mode={mode} />
        {/* <View style={{ position: 'absolute', top: '27px', ...contentStyle, borderWidth: 1, borderColor: 'red', borderStyle: 'solid' }}>
          <Hydrogen
            visible
            state={mode}
            {...styles.HPosition}
          />
          <TextBaloon />
        </View> */}
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
