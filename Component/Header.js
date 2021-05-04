import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
const Header = props =>{
		return (
		    <View style={styles.Header}>
		    	<Text style={styles.HeaderTitle}>{props.title}</Text>
		    </View>
		  );
};
