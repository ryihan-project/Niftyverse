import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View ,
  Image ,
  Button,
  TextInput,
  TouchableHighlight
   } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './assets/Logo/Logo-72_x_72.png'; 

export default function Login() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#99f8ed', '#b6c1f6', '#e3bbf9']} style={styles.container} >
        <View style={
          {
            marginTop: '50%',
            alignItems: 'center',
          }
          }>

            <Image source={logo} style={styles.logo} />
          </View>
      <View  >
        <Text
          style={{
            textAlign:  'center' ,
            fontSize:65,
            color: 'white'

            }}
          >Niftyverse</Text>
      </View>
          <View style={styles.row}>
              <TextInput style={[styles.input,styles.LeftInput]}value={'email'}/>
              <TextInput style= {[styles.input,styles.RightInput]} value={'password'} />
         </View>


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
      
      <View>
        <Text style={ styles.forget}> Skip</Text>

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
