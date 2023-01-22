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
<View style={styles.grayLeft}>
     <View style={styles.grayMiddle}>
        <View style={styles.grayRight}>
        </View>
      </View>
    </View>
  <View style={styles.bottomRight}>
  </View>
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
width: 346,
borderBottomWidth:29,
borderTopWidth:2,
borderColor: 'white',
},  

grayLeft: {
  marginLeft: 12,
  marginTop: 13,
  backgroundColor: colors.darkGrey,
  width: 95,
  height: 50,
  alignItems: "baseline",
  justifyContent: 'center',
  borderRadius: 10,
  // //borderTopRightRadius: 105,
  // borderWidth: 4,
  // borderColor: colors.darkGrey,
  // //borderBottomWidth: 5,
  },

grayMiddle: {
  marginLeft: 115,
 
  backgroundColor: colors.darkGrey,
  width: 95,
  height: 50,
  alignItems: "center",
  justifyContent: 'center',
  borderRadius: 10,
    // //borderRadius: 10,
    // //borderTopRightRadius: 105,
    // borderWidth: 4,
    // borderColor: colors.darkGrey,
    // //
    // borderBottomWidth: 5,
    },
grayRight: {
  marginLeft: 230,
  backgroundColor: colors.darkGrey,
  width: 95,
  height: 50,
  alignItems: "center",
  justifyContent: 'center',
  borderRadius: 10,
      //borderRadius: 10,
      //borderTopRightRadius: 105,
      // borderWidth: 4,
      // borderColor: colors.darkGrey,
      //borderBottomWidth: 5,
      },

bottomRight: {
  backgroundColor: colors.teal,
  width: 70,
  height: 250,
  marginLeft: 260,
  marginTop: 275,
  alignItems: "baseline",
  justifyContent: 'center',
  //borderRadius: 10,
  //borderTopRightRadius: 105,
  borderWidth: 4,
  borderColor: colors.darkGrey,
  //borderBottomWidth: 5,
  },
});