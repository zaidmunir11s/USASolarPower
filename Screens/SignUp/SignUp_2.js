 
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image
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
  
    

 class SignUp_2 extends React.Component{
 

    render(){
      console.log(this.props.counter)


  return (
    <ScrollView  contentContainerStyle={{backgroundColor:'#404FFC',height:RFValue(685)}}>
   <StatusBar backgroundColor='#404FFC' barStyle="light-content" />
      
     
<View style={{width:RFValue(40),height:RFValue(40),justifyContent:'flex-start'}}>
<Image
        style={{ resizeMode: 'contain', height:RFValue(80) , width:RFValue(300),marginLeft:RFValue(30),marginTop:RFValue(40)  }}
        source={require('../../Images/USA.png')}
      />
</View>

<View  style={ {
  
  zIndex:RFValue(15),
  width:RFValue(290),height:RFValue(450),marginTop:RFValue(120), 
   backgroundColor:'#404FFC',elevation:RFValue(30),borderWidth:RFValue(5),borderColor:'#404FFC',
 alignSelf:"center",
  borderBottomLeftRadius:RFValue(300)  }}>
  
 
 <Text style={{fontSize:RFValue(16),marginLeft:RFValue(15),margin:RFValue(5),marginTop:RFValue(15) ,
    fontWeight:'bold',color:'white'}}>Cell Number</Text>
<TextInput 
placeholderTextColor='white'
placeholder='Enter Cell Number'
onChangeText={() => {this.props.increaseCounter()
  }
  }
style={{paddingLeft:RFValue(15), backgroundColor:'#404FFC', margin:RFValue(10),width:RFValue(250),
fontSize:RFValue(16),paddingTop:RFValue(-5),
height:RFValue(30),alignSelf:"center",borderTopColor:'#404FFC',color:'white',
borderRightColor:'#404FFC',borderBottomColor:'white',borderLeftColor:'white',
borderWidth:2,borderBottomLeftRadius:RFValue(30)}}>


</TextInput> 
<Text style={{fontSize:RFValue(16),marginLeft:RFValue(15),margin:RFValue(5),marginTop:RFValue(15) ,
    fontWeight:'bold',color:'white'}}>Address</Text>
<TextInput 
placeholderTextColor='white'
placeholder='E.g H#00,ST#00'
style={{paddingLeft:RFValue(15), backgroundColor:'#404FFC', margin:RFValue(10),width:RFValue(250),
fontSize:RFValue(16),paddingTop:RFValue(-5),
height:RFValue(30),alignSelf:"center",borderTopColor:'#404FFC',color:'white',
borderRightColor:'#404FFC',borderBottomColor:'white',borderLeftColor:'white',
borderWidth:2,borderBottomLeftRadius:RFValue(30)}}>


</TextInput> 
<View style={{flexDirection:"row"}}>
<Text style={{fontSize:RFValue(16),marginLeft:RFValue(20),margin:RFValue(5),marginTop:RFValue(15) ,
    fontWeight:'bold',color:'white'}}>State</Text>
    <Text style={{fontSize:RFValue(16),marginLeft:RFValue(90),margin:RFValue(5),marginTop:RFValue(15) ,
    fontWeight:'bold',color:'white'}}>Postal Code</Text>
</View>
<View style={{flexDirection:"row",marginLeft:RFValue(13)}}>

<TextInput 
placeholderTextColor='white'
placeholder='State'
style={{paddingLeft:RFValue(15), backgroundColor:'#404FFC', margin:RFValue(10),width:RFValue(110),
fontSize:RFValue(16),paddingTop:RFValue(-5),
height:RFValue(30),alignSelf:"center",borderTopColor:'#404FFC',color:'white',
borderRightColor:'#404FFC',borderBottomColor:'white',borderLeftColor:'white',
borderWidth:2,borderBottomLeftRadius:RFValue(30)}}>


</TextInput> 
 
<TextInput 
placeholderTextColor='white'
placeholder='Postal Code'
style={{paddingLeft:RFValue(15), backgroundColor:'#404FFC', margin:RFValue(10),width:RFValue(110),
fontSize:RFValue(16),paddingTop:RFValue(-5),
height:RFValue(30),alignSelf:"center",borderTopColor:'#404FFC',color:'white',
borderRightColor:'#404FFC',borderBottomColor:'white',borderLeftColor:'white',
borderWidth:2,borderBottomLeftRadius:RFValue(30)}}>


</TextInput> 
</View>
<Text style={{fontSize:RFValue(16),marginLeft:RFValue(115),margin:RFValue(5),marginTop:RFValue(15) ,
    fontWeight:'bold',color:'white'}}>Ref ID</Text>
<TextInput 
placeholderTextColor='white'
placeholder='112#2'
style={{paddingLeft:RFValue(15), backgroundColor:'#404FFC', margin:RFValue(10),width:RFValue(150),
fontSize:RFValue(16),paddingTop:RFValue(-5),marginLeft:RFValue(110),
height:RFValue(30),alignSelf:"center",borderTopColor:'#404FFC',color:'white',
borderRightColor:'#404FFC',borderBottomColor:'white',borderLeftColor:'white',
borderWidth:2,borderBottomLeftRadius:RFValue(30)}}>


</TextInput> 
<TouchableOpacity

onPress={()=>{  
    this.props.navigation.navigate('Dashboard')
     }}
  
 style={{alignSelf:"center",margin:RFValue(10),marginLeft:RFValue(160),borderColor:'white',backgroundColor:'#d12115',
borderWidth:RFValue(2),width:RFValue(100),borderBottomLeftRadius:RFValue(30),height:RFValue(40),justifyContent:"center"}}


>
 
  <Text style={{fontSize:RFValue(16),alignSelf:"center",fontWeight:'bold',color:'white'}}>Finish</Text>
 
</TouchableOpacity>
 

</View>
<View style={{flex:15,flexDirection:"row",marginTop:RFValue(-300) }}>
<LinearGradient start={{ x: -0.5, y: 0 }}
 colors={['#d12115', '#d12115', '#404FFC']} style={{
 borderTopLeftRadius:RFValue(100),backgroundColor:'#d12115',flex:15}}></LinearGradient>
 
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp_2)
 