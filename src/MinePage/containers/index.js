/**
 * Created by zhudamao on 2017/10/26.
 */

import React ,{Component} from 'react';
import {View, StyleSheet,Platform,Button} from 'react-native';
import {connect} from 'react-redux';

import {navgationNagative} from '../actions/index'
import {FILTER_ACTION} from '../../appnavigatorreducer';
import RightItems from '../components/rightButtonItem'

class MinePage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style= {styles.container}>
                <Button title={this.props.navigation.state.routeName} onPress={()=>{
                   this.props.navigate('FirstTab')
                }}
            >

            </Button>

            </View>
        );
    }

    static  navigationOptions = ({navigation,screenProps})=>({
        headerStyle:{
            //backgroundColor:'red',
            elevation:0,
            shadowOpacity:0,
        },
        headerRight:(<RightItems  settingAction = { ()=>{
                    navigation.dispatch({type:FILTER_ACTION.Navigate,DEST:'Setting'})
                }}
                msgAction = { ()=>{
                    navigation.dispatch({type:FILTER_ACTION.Navigate,DEST:'Msg'})}
                }
        /> ),
    })
}

const mapStateToProps = (state)=>{
    return {

    };
};


const mapDispatchToProps = (dispatch)=>{
    return {
        navigate: (dest)=> {
            dispatch(navgationNagative(dest));

        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MinePage);


const  styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS == 'ios'? 0:0,
    },

});