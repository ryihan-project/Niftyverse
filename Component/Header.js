import React from 'react';
import {StyleSheet,Text,View,Image,Button,Alert } from 'react-native';
import SearchIcon from '../assets/Icon/Search.png';
import MenuIcon from '../assets/Icon/meno.png';
import LessthenIcon from '../assets/Icon/less.png';
import GreterthenIcon from '../assets/Icon/Finallogo.png';
const Header = props =>{
const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );


		return (
		    <View style={styles.Header}>
		    	<Image source={SearchIcon} style={styles.SearchIcon}  />
		    	<Image source={MenuIcon} style={styles.MenuIcon} />
		    	<Image source={LessthenIcon} style={styles.LessthenIcon} />
		    	<Image source={GreterthenIcon} style={styles.GreterthenIcon} />
		    	<Button title="Right button" onPress={createThreeButtonAlert} />
		    </View>
		  );
};
const styles = StyleSheet.create({
Header:{
		width: '100%',
		height: 85,
		paddingTop: 36,
		backgroundColor: 'white',
		flexDirection: "row",
		borderColor: '#f3f3f3',
		borderWidth: 3,
		//alignItems:  'center',
		//justifyContent: 'center',
		borderRadius: 20,
		shadowColor: '#000',
	    shadowOffset: { width: 0, height: 1 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2,  
	    elevation: 5
},
SearchIcon:{
	padding: 5,
	marginLeft: 6,
	marginRight:5,
	height: 30,
	width: 30
},
MenuIcon:{
	padding: 5,
	marginLeft: 2,
	marginRight:5,
	height: 30,
	width: 30
},
LessthenIcon:{
	padding: 5,
	marginLeft: 2,
	marginRight:5,
	height: 30,
	width: 30
},
GreterthenIcon:{
	padding: 5,
	marginLeft: 2,
	marginRight:5,
	height: 30,
	width: 30
}
});
export default Header;