import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import Profile from '../assets/Icon/avater.jpg';
import Post from '../assets/Logo/Content/Background.jpg';
const Feed = props =>{
		return (
		    <View style={styles.Feed}>
		    	<View style={styles.FeedContent} >
		    		<View style={styles.FeedColum2} >
		    			<View style={styles.FeedColum}>
			    		    <Image source={Profile} style={styles.ProfilePic} />
			    		    <Text style={{marginTop: 13}} > MD Raihan</Text>
		    		    </View>
		    		    <View >
		    		    	<Text style={styles.PostDot} >. . .</Text>
		    		    </View>
		    		</View>
		    		<View style={styles.PostImageLayout}>
		    			<Image source={Post} style={styles.PostImage} />
		    		</View>
		    		<View style={styles.FeedColum2} >
		    			<View style={styles.FeedColum}>
			    		    <Image source={Profile} style={styles.ProfilePic} />
			    		    <Text style={{marginTop: 13}} > MD Raihan</Text>
		    		    </View>

		    		</View>
		    		<View>
		    		</View>
		    		<View>
		    		</View>
		    	</View>
		   	    </View>
		  );
};
const styles = StyleSheet.create({
Feed:{
		width: '100%',
		height: 500,
},
FeedContent:{
	marginTop: 5,
	marginLeft: 5,
	textAlign:  'center',

},
FeedColum2:{
	flexDirection: "row",
	width: '100%'
},
FeedColum:{
	flexDirection: "row",
	 textAlign:  'center',
},
PostDot:{
	marginLeft: 150,
	fontSize: 30
},
ProfilePic:{
	width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "gray"
},
PostImageLayout:{
	marginRight: 5,
	marginTop: 3
},
PostImage:{
	height:200,
	width: '100%',
	borderRadius: 5,
	borderColor: 'red',
	borderWidth: 1

},
PostDownNav:{},
PostText:{},
	height: 50,
PostComment:{
	height: 50,
	width: 60,
},
    marginRight:0,
    width: 50,
    marginTop:5,
    backgroundColor:'#68a0cf',
    borderRadius:20,
    textAlign:  'center' , 
    borderWidth: 1,
    borderColor: '#fff'
  }
});
export default Feed;