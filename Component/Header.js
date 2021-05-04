import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import SearchIcon from '../assets/Icon/search.png';
import MenuIcon from '../assets/Icon/menu.png';
import LessthenIcon from '../assets/Icon/lessthen.png';
import GreterthenIcon from '../assets/Icon/greterthen.png';
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
	    shadowOffset: { width: 0, height: 1 },
	    shadowOpacity: 0.8,
},
SearchIcon:{
	padding: 5,
	marginRight:5,
	height: 45,
	height: 30,
}
});
export default Header;