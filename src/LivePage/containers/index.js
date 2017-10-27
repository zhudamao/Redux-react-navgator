
import React ,{Component} from 'react';
import {View, StyleSheet,Platform} from 'react-native';
import {connect} from 'react-redux';


class LivePage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <View style= {styles.container}>



            </View>
        );
    }

}


const mapStateToProps = (state)=>{
    return {

    }
};

const mapDispatchToProps = (dispatch)=>{
    return {

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(LivePage);


const  styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS == 'ios'? 20:0,
    },

});