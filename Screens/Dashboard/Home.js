import React from 'react'
import { View, Text,Image,StatusBar } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login'
import SignUp from '../SignUp/SignUp'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BoxShadow} from 'react-native-shadow'
import { ProgressBar, Colors } from 'react-native-paper';
const shadowOpt = {
  width:RFValue(165),
  height:RFValue(150),
  color:"#000",
  border:0,
  radius:RFValue(25),
  opacity:0.04,
  x:0,
  y:0,
  style:{margin:RFValue(10),}
}
const shadowHeader = {
  width:RFValue(330),
  height:RFValue(200),
  color:"#fff",
  border:0,
  radius:RFValue(1),
  opacity:0.2,
  x:6,
  y:28,
  style:{margin:RFValue(10),}
}
 
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
  
export default class  Home extends React.Component {
   render(){
    return (
        
<View style={{ flex:100,flexDirection:'column',backgroundColor:'#ff443a'}}>
          
          <View  style={{ flex:80,flexDirection:'column',backgroundColor:'#404FFC' ,borderBottomLeftRadius:RFValue(150),borderBottomRightRadius:RFValue(150)}}>
          <BoxShadow setting={shadowHeader}>
         <View style={{width:RFValue(330),marginLeft:RFValue(10),marginTop:RFValue(20),
         height:RFValue(200),backgroundColor:'white'}}>
           <View  style={{flexDirection:"row",height:RFValue(100),backgroundColor:'white'}}>
             <View style={{ width:RFValue(165) ,borderRightColor:'grey',borderRightWidth:0.5}}>

               <Text style={{color:'#757574',fontWeight:'bold',alignSelf:'center',marginTop:RFValue(10)}}> Your Earnings</Text>
               <Text style={{color:'#404FFC',fontWeight:'bold',fontSize:32,alignSelf:'center',marginTop:RFValue(5)}}> $5,385</Text>
             </View>
             <View style={{ width:RFValue(165) ,borderLeftColor:'grey',borderLeftWidth:0}}>

             <Text style={{color:'#757574',fontWeight:'bold',alignSelf:'center',marginTop:RFValue(10)}}> Potential Earnings</Text>
               <Text style={{color:'#404FFC',fontWeight:'bold',fontSize:32,alignSelf:'center',marginTop:RFValue(5)}}> $1,385</Text>
      
             </View>
           </View>
           <View style={{height:RFValue(100)}}>
           <View style={{borderRadius:RFValue(10), width:RFValue(330),alignSelf:'center' ,height:RFValue(32),justifyContent:"space-between",flexDirection:"row",backgroundColor:'#F9F8F0',borderLeftWidth:0}}>
   <Text style={{fontWeight:'bold',fontSize:18,alignSelf:'center',marginLeft:RFValue(5)}}> Referals</Text>
   <Text style={{color:'#404FFC',fontWeight:'bold',fontSize:18,alignSelf:'center',marginRight:RFValue(15)}}>All Referals</Text>

</View>
<Text style={{color:'#757574',fontWeight:'bold',alignSelf:'flex-start',marginLeft:RFValue(5),marginTop:RFValue(10)}}>Progress</Text>
            
<ProgressBar style={{height:RFValue(20),width:RFValue(320),alignSelf:"center",borderRadius:RFValue(5),marginTop:RFValue(10)}} progress={0.5} color={'#404FFC'} />
            
           </View>
          
     
           </View>
</BoxShadow>
<View style={{flexDirection:'row',justifyContent:"center" ,marginTop:RFValue(40)}}>

<BoxShadow setting={  shadowOpt}>
<View   style={{width:RFValue(150),height:RFValue(135) ,backgroundColor:'white' ,justifyContent:"center",
elevation:RFValue(15) ,margin:RFValue(10),borderRadius:RFValue(20)}}>
<Image
        style={{ resizeMode: 'contain', height:RFValue(50) , width:RFValue(90),alignSelf:"center"}}
        source={require('../../Images/referral.png')}
      />
<Text style={{fontSize:RFValue(20),fontWeight:'bold',alignSelf:"center",color:'#ff443a'}}>Refers</Text>

</View>
</BoxShadow>
<BoxShadow setting={shadowOpt}>
<View   style={{width:RFValue(150),height:RFValue(135) ,backgroundColor:'white', borderColor:'white',justifyContent:"center",
elevation:RFValue(20) ,margin:RFValue(10),borderRadius:RFValue(20)
   }}>
<Image
        style={{ resizeMode: 'contain', height:RFValue(50) , width:RFValue(90),alignSelf:"center"}}
        source={require('../../Images/purse.png')}
      />
<Text style={{fontSize:RFValue(20),fontWeight:'bold',alignSelf:"center",color:'#ff443a'}}>Points</Text>

</View>
</BoxShadow>
</View>

<View style={{flexDirection:'row',justifyContent:"center"}}> 
<BoxShadow setting={shadowOpt}>
<View   style={{width:RFValue(150),height:RFValue(135),backgroundColor:'white',borderColor:'white',
elevation:RFValue(5),justifyContent:"center",margin:RFValue(10),borderRadius:RFValue(20)}}>
<Image
        style={{ resizeMode: 'contain', height:RFValue(50) , width:RFValue(90),alignSelf:"center"}}
        source={require('../../Images/friend-request.png')}
      />
<Text style={{fontSize:RFValue(20),fontWeight:'bold',alignSelf:"center",color:'#ff443a'}}>Requests</Text>

</View>
</BoxShadow>
<BoxShadow setting={shadowOpt}>
<View   style={{width:RFValue(150),height:RFValue(135),backgroundColor:'white' ,borderColor:'white',
elevation:RFValue(5),justifyContent:"center",margin:RFValue(10),borderRadius:RFValue(20)}}>

<Image
        style={{ resizeMode: 'contain', height:RFValue(50) , width:RFValue(90),alignSelf:"center"}}
        source={require('../../Images/coupon.png')}
      />
<Text style={{fontSize:RFValue(20),fontWeight:'bold',alignSelf:"center",color:'#ff443a'}}>Coupon</Text>
</View>
</BoxShadow>
 
 
</View>

 

          </View>
         <View style={{ flex:20,flexDirection:'column' }}>
      
</View>
    </View>
 
    )}
}
