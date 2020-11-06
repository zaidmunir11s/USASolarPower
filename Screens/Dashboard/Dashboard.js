import React from 'react'
import { View, Text } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import DrawerContent from './DrawerContent';
import SignUp from '../SignUp/SignUp';
import Rewards from './Rewards'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();



const Drawer = createDrawerNavigator();
 
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
  
export default class  Dashboard extends React.Component {
  /*

 */
MainTabNavigator(){
return(
  <Tab.Navigator
  initialRouteName="Home"
  activeColor="#fff"
  shifting={true}
>
  <Tab.Screen
    name="Home"
    component={Home}
    options={{
      tabBarLabel: 'Home',
      tabBarColor: '#ff443a',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-home" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Notifications"
    component={Rewards}
    options={{
      tabBarLabel: 'Rewards',
      tabBarColor: '#d12115',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-notifications" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Profile"
    component={SignUp}
    options={{
      tabBarLabel: 'Profile',
      tabBarColor: '#694fad',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-person" color={color} size={26} />
      ),
    }}
  />
   </Tab.Navigator>)
}
    render(){
    return (
      <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={this.MainTabNavigator} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
    )}
}


  