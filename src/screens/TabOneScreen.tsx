import * as React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from '../components/Themed';
import { StackScreenProps } from '@react-navigation/stack';



export default function TabOneScreen({ navigation } : StackScreenProps<{Game: any }>) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dificuldade</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight style={styles.box}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate('Game', { numbersColumns: 3, numbersRows: 4 })}>
          <Text style={styles.boxText}>3x4</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate('Game', { numbersColumns: 4, numbersRows: 4})}>
          <Text style={styles.boxText}>4x5</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <Text style={styles.boxText}>6x6</Text>
        </TouchableHighlight>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
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
  box: {     
    height: 100,
    margin: 2, 
    backgroundColor: "#C4C4C4", 
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1
  },
  boxText: {
    fontSize: 24, 
    color: 'white'
  }
});
