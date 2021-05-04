		    		<View style={styles.FeedColum2} >
		    			<View style={styles.FeedColum}>
			    		    <Image source={SearchIcon} style={styles.ProfilePic} />
			    		    <Text style={{marginTop: 13}} > MD Raihan</Text>
		    		    </View>
		    		    <View >
		    		    	<Text style={styles.PostDot} >. . .</Text>
		    		    </View>
		    		</View>
		    		<View style={styles.PostImageLayout}>
		    			<Image source={SearchIcon} style={styles.PostImage} />
		    		</View>
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
});
export default Feed;