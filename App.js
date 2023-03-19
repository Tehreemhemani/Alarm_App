import { Text, StyleSheet, View,SafeAreaView } from 'react-native'
import React from 'react'
import ListAlarms from './Screens/ListAlarms'
import TimePicker from './Screens/TimePicker'

export default function App(){
return (
 <View style={styles.mainContainer}>
  <Text style={styles.heading}>ALARM</Text>

<SafeAreaView style={styles.listAlarms}>
      <ListAlarms/>
</SafeAreaView>

<View style={styles.timePicker}>
    <TimePicker />
</View>
  </View>
      
)}

const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  alignItems: 'center'
},

heading:{
  fontSize: 25,
  padding: 20,
  color: 'black'
},

timePicker: {
  paddingTop: "10%",
  width: "50%",
  bottom: 20,
},

listAlarms:{
  flex: 1,
  width: "100%",
},

buttonStyle: {
  alignItems: 'center',
  justifyContent: 'center',
    elevation: 25,
},

})

