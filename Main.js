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
