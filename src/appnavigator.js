
import React from 'react';
import { StackNavigator, TabNavigator,addNavigationHelpers } from 'react-navigation';
import { Platform }  from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';


import MainPage from './MainPage/containers/index';
import LivePage from './LivePage/containers/index';
import DisCoveryPage from  './DiscoveryPage/containers/index';
import MinePage from  './MinePage/containers/index';

import SettingPage from  './MinePage/containers/SettingScreen'
import MsgPage from './MinePage/containers/MsgScreen'



const  TabNav = TabNavigator(
    {
        FirstTab:{
            screen : MainPage,
            path : '/home',
            navigationOptions:{
                title:'主页',
                tabBarLabel : 'Home',
                tabBarIcon : ({tintColor,focused})=>(
                    <Ionicons
                        name = {focused? 'ios-home':'ios-home-outline'}
                        size = {26}
                        style = {{color:tintColor}}
                    />
                ),

            }
        },
        SecondTab:{
            screen : LivePage,
            path : '/live',
            navigationOptions:{
                title:'生活',
                tabBarLabel : 'live',
                tabBarIcon : ({tintColor,focused})=>(
                    <Ionicons
                        name = {focused? 'ios-restaurant':'ios-restaurant-outline'}
                        size = {26}
                        style = {{color:tintColor}}
                    />
                ),

            }
        },
        DisCoveryPage:{
            screen : DisCoveryPage,
            path : '/discoverypage',
            navigationOptions:{
                title:'发现',
                tabBarLabel : 'discovery',
                tabBarIcon : ({tintColor,focused})=>(
                    <Ionicons
                        name = {focused? 'ios-pricetags':'ios-pricetags-outline'}
                        size = {26}
                        style = {{color:tintColor}}
                    />
                ),

            }
        },

        MinePage:{
            screen : MinePage,
            path : '/mine',
            navigationOptions:{
                title:'我的',
                tabBarLabel : 'mine',
                tabBarIcon : ({tintColor,focused})=>(
                    <Ionicons
                        name = {focused? 'ios-person':'ios-person-outline'}
                        size = {26}
                        style = {{color:tintColor}}
                    />
                ),

            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#ff6900' : '#fff',
            indicatorStyle:{height:0},
        },
        swipeEnabled: true,
        animationEnabled: false,
    }
);


export const StatckNav = StackNavigator(
    {
        Root: {
            screen: TabNav,
        },
        Msg:{
            screen:MsgPage,
        },
        Setting:{
            screen:SettingPage,
            navigationOptions:{
                headerTitle:'设置',
            }
        }
    },
);


const AppWithNavigationState = ({dispatch,navState}) =>(
    <StatckNav navigation = {addNavigationHelpers({dispatch,state:navState})} />
)

const mapStateToProps= (state)=>{
   return {
       navState:state.nav,
   }
}


export  default connect(mapStateToProps)(AppWithNavigationState);

