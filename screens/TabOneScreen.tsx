import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';

// a few lines later ...


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
        <View
      style={{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        
      }}>
        <View style={{marginHorizontal:10}}>
      <Speedometer
      
       width={100}
        value={100}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
      </Speedometer>
      </View>
      <View style={{marginHorizontal:10}}>
      <Speedometer width={100}
        value={128}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
      </Speedometer>
      </View>
      </View>
      <View
      style={{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        
      }}>
        <View style={{marginHorizontal:10}}>
      <Speedometer
      
       width={100}
        value={100}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
      </Speedometer>
      </View>
      <View style={{marginHorizontal:10}}>
      <Speedometer width={100}
        value={128}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
      </Speedometer>
      </View>
      </View>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
