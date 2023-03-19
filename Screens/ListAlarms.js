import React from 'react'
import { Text, StyleSheet, View ,Pressable} from 'react-native'
import {ListItem} from 'react-native-elements'


export default function ListAlarms(){
return(
<View>
<ListItem>
<ListItem.Content>
   <ListItem.Title style={styles.titleStyle}>2:36PM</ListItem.Title>
   <ListItem.Subtitle>8/21/2021</ListItem.Subtitle>
 </ListItem.Content>

<Pressable style={styles.buttonStyle}
  onPress={() => {    }}>

  <Text style={styles.buttonText}>REMOVE</Text>

</Pressable>
 </ListItem>
</View>
   
)
  }


const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 23
  },
  container:{
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    elevation: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
    //fontWeight:'bold',
    color: 'white'
  }
})