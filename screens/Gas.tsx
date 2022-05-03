import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
  DangerPath
} from 'react-native-cool-speedometer';

// a few lines later ...


export default function Gas({navigation,name,data}) {
  return (
    <View style={{margin:2, marginHorizontal:'auto'}}>
        <View
      style={{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        
      }}>
        <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer
      
       width={100}
        value={data.m1}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath  angle={30}/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>R</Text>
      </View>
      </View>
      <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer width={100}
        value={data.m2}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>R</Text>
      </View>
      
      </View>
      </View>
      <View
      style={{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        
      }}>
        <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer
      
       width={100}
        value={data.m3}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>R</Text>
      </View>
      </View>
      <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer width={100}
        value={data.m4}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={10} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>R</Text>
      </View>
      </View>
      </View>
     
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
