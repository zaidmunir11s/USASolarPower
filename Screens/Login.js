 
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,Image
} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
 
function mapStateToProps(state) {
  return {
      counter: state.counter
  }
}
  function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'Change' }),
        decreaseCounter: () => dispatch({ type: 'change2' }),
    }
}
  

 
 class Login extends React.Component{
    render(){
  return (
    <ScrollView  contentContainerStyle={{backgroundColor:'#404FFC',height:RFValue(690)}}>
 
     
<View style={{width:RFValue(40),height:RFValue(40)}}>

</View>

<LinearGradient start={{ x: -0.7, y: 0 }}
 colors={['white', '#404FFC', '#404FFC']} style={styles.linearGradient,
  [{zIndex:RFValue(15), width:RFValue(300),height:RFValue(400),marginTop:RFValue(100),shadowOpacity:100,shadowOffset:100,
  shadowColor:'white',backgroundColor:'#404FFC',elevation:RFValue(20),width:RFValue(330),alignSelf:"center",
  borderBottomLeftRadius:RFValue(300)}]}>
<Image
        style={{ resizeMode: 'contain', height:RFValue(80) , width:RFValue(300)  }}
        source={require('../Images/USA.png')}
      />
 
 <Text style={{fontSize:RFValue(16),marginLeft:RFValue(38),margin:RFValue(5),marginTop:RFValue(15) ,fontWeight:'bold',color:'white'}}>
     Username or Email</Text>
<TextInput 
style={{paddingLeft:RFValue(15), backgroundColor:'#404FFC', margin:RFValue(10),width:RFValue(250),
fontSize:RFValue(16),paddingTop:RFValue(-5),
height:RFValue(30),alignSelf:"center",borderTopColor:'#404FFC',color:'white',
borderRightColor:'#404FFC',borderBottomColor:'white',borderLeftColor:'white',
borderWidth:2,borderBottomLeftRadius:RFValue(30)}}>


</TextInput>
<Text style={{fontSize:RFValue(16),marginLeft:RFValue(38),margin:RFValue(5) ,fontWeight:'bold',color:'white'}}>Password</Text>
<TextInput 
style={{paddingLeft:RFValue(15), backgroundColor:'#404FFC', margin:RFValue(10),width:RFValue(250),
fontSize:RFValue(16),paddingTop:RFValue(-5),
height:RFValue(30),alignSelf:"center",borderTopColor:'#404FFC',color:'white',
borderRightColor:'#404FFC',borderBottomColor:'white',borderLeftColor:'white',
borderWidth:2,borderBottomLeftRadius:RFValue(30)}}>


</TextInput>

<TouchableOpacity 
onPress={()=>{  
    console.log('pressed')
    }}
style={{alignSelf:"center",margin:RFValue(10),marginLeft:RFValue(60),borderColor:'white',backgroundColor:'#404FFC',
borderWidth:RFValue(2),width:RFValue(200),borderBottomLeftRadius:RFValue(30),height:RFValue(50),justifyContent:"center"}}>
 
  <Text style={{fontSize:RFValue(16),alignSelf:"center",fontWeight:'bold',color:'white'}}>Login</Text>
 
</TouchableOpacity>
<Text style={{fontSize:RFValue(16),marginLeft:RFValue(120),alignSelf:"center",fontWeight:'bold',color:'white'}}>Forgot Password?</Text>

</LinearGradient>
<View style={{flex:15,flexDirection:"column",marginTop:RFValue(-300) }}>
<LinearGradient start={{ x: -0.5, y: 0 }}
 colors={['#d12115', '#d12115', '#404FFC']} style={{
 borderTopLeftRadius:RFValue(100),backgroundColor:'#d12115',flex:15 }}>

<TouchableOpacity 
onPress={()=>{  
   this.props.navigation.navigate('SignUp')
    }}
style={{alignSelf:"center",marginTop:RFValue(330),marginLeft:RFValue(0),borderColor:'white',backgroundColor:'white',
borderWidth:RFValue(2),width:RFValue(200),borderBottomLeftRadius:RFValue(30),height:RFValue(50),justifyContent:"center"}}>
 <LinearGradient start={{ x: 0.3, y: -0.5 }}
 colors={['#d12115', '#d12115', '#404FFC']} style={{
 borderBottomLeftRadius:RFValue(28),backgroundColor:'#d12115',flex:15,justifyContent:"center" }}>

  <Text style={{fontSize:RFValue(20),alignSelf:"center",fontWeight:'bold',color:'white'}}>SignUp</Text>
  </LinearGradient>
</TouchableOpacity> 
   
 </LinearGradient>
 
</View>

 
    </ScrollView>
   
  
  );
}};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex:100
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)