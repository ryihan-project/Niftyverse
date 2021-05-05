//import { StatusBar } from 'expo-status-bar';
//import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import logo from './assets/Logo/Logo-72_x_72.png'; 
//Header Import
import Header from './Component/Header';
import Feed from './Screen/Feed';

export default function App() {
  return (
    <View style={styles.container}>
        
      <Header/>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
 },
});