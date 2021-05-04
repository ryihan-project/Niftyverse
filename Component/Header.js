import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import SearchIcon from '../assets/Icon/search.png';
import GreterthenIcon from '../assets/Icon/greterthen.png';
const Header = props =>{
		return (
		    <View style={styles.Header}>
		    	<Image source={SearchIcon} style={styles.SearchIcon} />
		    </View>
		  );
};
const styles = StyleSheet.create({
Header:{
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: 'red',
		alignItems:  'center',
		justifyContent: 'center',
},
HeaderTitle:{
		color: 'black',
		fontSize: 18,
},
});
export default Header;