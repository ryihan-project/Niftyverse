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
      	<View>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	<Feed/>
      	</View>
      	
      </ScrollView>
      

    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
 },
 scrollView:{

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
