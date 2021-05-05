//import { StatusBar } from 'expo-status-bar';
//import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';
import logo from './assets/Logo/Logo-72_x_72.png'; 
//Header Import
import Header from './Component/Header';
import Feed from './Screen/Feed';

export default function App() {
  return (
    <View style={styles.container}>
        
      <Header/>
      <ScrollView style={styles.scrollView}>
      	<Feed/>
      	<Feed/>
      	</View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  
/*
|Input Style...
*/
  input:{ 
            marginTop: 50,
            height: 40,
            borderColor: 'white',
            borderWidth: 1,
            borderRadius:15,
            textAlign:  'center' 
            
        },
  LeftInput:{
            color:'white',
            width: '45%',
            marginRight: 8,

  },
  RightInput:{
            color:'white',
            width: '45%',
  },
/*
|Input And Button Row Style...
*/
  row: {
    marginTop: 10,
    marginLeft: '5%',
    flexDirection: "row",
  },
  submit:{
    marginRight:3,
    width: '45%',
    marginTop:10,
    paddingTop:10,
    paddingBottom:20,
    height: 45,
    //backgroundColor:'#68a0cf',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{

      color:'#fff',
      textAlign:'center',
  },
  forget:{
    textAlign:   'center',
    color:'gray',
    marginTop: 10 
  }
});
