import { SafeAreaView, StatusBar, StyleSheet, Dimensions, 
  Text, View } from 'react-native';

import colors  from './app/config/colors';

export default function App() {
console.log("Stephen, your app works!");



return (
<SafeAreaView style={styles.container}>
<View style={styles.top}>
  <View style={styles.middle}>
    <Text style={styles.topText}>
      <Text>React Native Task 2</Text>
    </Text>
  </View>
</View>
<View style={styles.bottom}>
</View>
<StatusBar style="auto" />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: colors.primaryColor,
alignItems: 'center',
justifyContent: 'center',
paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},

top: {
backgroundColor: colors.primary,
width: 350,
height: 100,
alignItems: 'center',
justifyContent: 'center',
//borderRadius: 10,
//borderTopRightRadius: 105,
borderColor: 'white',
borderWidth: 2,
//borderBottomWidth: 10,
},

middle: {
  backgroundColor: colors.primary,
  width: 250,
  height: 55,
  alignItems: 'center',
  justifyContent: 'center',
  //borderRadius: 10,
  //borderTopRightRadius: 105,
  backgroundColor: colors.secondary,
  //borderBottomWidth: 10,
  },

topText: {
  fontSize: 25,
  fontWeight: "bold",
}
,

bottom: {
backgroundColor: colors.secondary,
flex: 2,
width: 349,
borderBottomWidth:29,
borderTopWidth:2,
borderColor: 'white',
},  
});