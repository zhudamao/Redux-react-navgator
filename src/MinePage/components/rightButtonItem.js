
import React ,{Component} from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export  default  RightItems = ({msgAction,settingAction})=>  {
   return(
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress = {msgAction}>
                <Ionicons name = {  'ios-settings-outline'}
                          size ={24}/>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button} onPress = {settingAction}>
                <Ionicons name = { 'ios-mail-open-outline'}
                          size = {24}/>
            </TouchableOpacity>
        </View>

    );

}


const  styles = StyleSheet.create(
    {
        container:{
            flex:1,
            flexDirection:'row',
            margin:5,
            padding:5,
        },
        button:{
            margin:5,

        }

    }

);