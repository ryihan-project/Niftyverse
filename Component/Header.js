import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import SearchIcon from '../assets/Icon/Search.png';
import MenuIcon from '../assets/Icon/521077-200.png';
import LessthenIcon from '../assets/Icon/download-removebg-preview.png';
const Header = props =>{
		return (
		    <View style={styles.Header}>
		    	<Image source={SearchIcon} style={styles.SearchIcon} />
		    	<Image source={MenuIcon} style={styles.SearchIcon} />
		    	<Image source={LessthenIcon} style={styles.SearchIcon} />
		    	<Image source={GreterthenIcon} style={styles.SearchIcon} />
		    </View>
		  );
};
const styles = StyleSheet.create({
Header:{
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: 'white',
		flexDirection: "row",
		borderColor: 'black',
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
	marginRight:5,
	height: 30,
	width: 30
}
});
export default Header;