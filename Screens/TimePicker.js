import React,{useState} from 'react'
import { Text, StyleSheet, View,Pressable ,Alert} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker';


export default function TimePicker(){

const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    
const showDateTimePicker = () => {
   setIsDateTimePickerVisible(true);
    }
const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    }
const handleDatePicker = (dateTime) => {
  var currentTime = Date.now();
  if (dateTime.getTime() < currentTime) {
   Alert.alert("Please choose future time");
   hideDateTimePicker();
   return; 
  }
 hideDateTimePicker();
}

return(
<View>
 <Pressable
style={styles.buttonStyle}
 onPress={() => { showDateTimePicker();}}>    
            
<Text style={styles.buttonText}>+ Add Alarm</Text>

</Pressable>

 <DateTimePicker
    mode='datetime'
    isVisible={isDateTimePickerVisible}
    onConfirm={handleDatePicker}
    onCancel={hideDateTimePicker}/>
           
</View>
      
);
  }

const styles = StyleSheet.create({

buttonStyle: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'blue',
  paddingHorizontal: 10,
  paddingVertical: 10,
 },
   
buttonText:{
  fontSize: 15,
  color: 'white',
 }
 
})

// + add alarm funcationality


// const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    
//  const showDateTimePicker = () => {
//    setIsDateTimePickerVisible(true);
//     }
//     const hideDateTimePicker = () => {
//         setIsDateTimePickerVisible(false);
//     }


// const handleDatePicker = (dateTime) => {
//     var currentTime = Date.now();
//     if (dateTime.getTime() < currentTime) {
//         Alert.alert("Please choose future time");
//         hideDateTimePicker();
//         return; 
//         }
//         hideDateTimePicker();
//     }