/**
 * Created by zhudamao on 2017/10/27.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class SettingScreen extends Component{
    constructor(props) {
        super(props);
    }

    render = ()=> (
        <View style={styles.container}>


        </View>
    )

    static  navigationOptions = ({navigation,screenProps})=>({
        headerTitle:'SettingScreen',
    })
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff8989',
        },

    }
);