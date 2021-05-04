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
HeaderTitle:{
		fontSize: 18,
		flexDirection: "row",
		//alignItems:  'center',
},
	height: 45,
}
});
export default Header;