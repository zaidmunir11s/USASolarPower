import React from 'react'
import { View, Text,Image ,StatusBar} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login'
import SignUp from '../SignUp/SignUp'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
 

export default function Rewards() {
    return (
              
<LinearGradient start={{ x: -0.5, y: 0 }}
 colors={['#d12115', '#d12115', '#404FFC']} style={{ flex:100,flexDirection:'column',backgroundColor:'#404FFC'}}>
       <StatusBar backgroundColor='#d12115' barStyle="light-content" />
<Text style={{alignSelf:"center",marginTop:RFValue(300),fontSize:RFValue(28),color:'white',fontWeight:'bold'}}>No Rewards</Text>

 </LinearGradient>
    )
}
