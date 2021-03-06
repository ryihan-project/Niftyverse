//import { StatusBar } from 'expo-status-bar';
//import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';
import logo from './assets/Logo/Logo-72_x_72.png'; 
//Header Import
import Header from './Component/Header';
import Feed from './Screen/Feed';

function renderConditionalText() {
    if (this.state.isSignUp) {
        return <Text> Sign Up </Text>;
    }
     return <Text> Forgot Password </Text>; 
}




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

 }
});
