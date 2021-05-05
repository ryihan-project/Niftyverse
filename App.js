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
      <LinearGradient colors={['#99f8ed', '#b6c1f6', '#e3bbf9']} style={styles.container} >
        <View style={
          {
            fontSize:65,
        <View style={styles.row}>
        
        <TouchableHighlight style={styles.submit}>
          <Text style={styles.submitText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.submit} >
          <Text style={styles.submitText}>Register</Text>
      </TouchableHighlight>
      </View>

      <View>
        <Text style={ styles.forget}> forget password</Text>

      </View>
      </LinearGradient>
      
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   // flex: 1,
    // backgroundColor: '#C6BCF7' ,//C6BCF7
   // alignItems: 'center',
    //justifyContent: 'center',
  width: '100%',
  height:'100%'
  },
  logo: {
   
    padding: 80,
    //backgroundColor: '#C6BCF7',
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
  
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
