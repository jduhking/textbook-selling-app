import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

function CircleButton(props){
    return(
        <TouchableOpacity style={{
           position:'absolute',
           width:30,
           height:30,
           borderRadius:17,
           shadowColor:'black',
           shadowOpacity:0.5,
           shadowRadius: 14 
        }}>

        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    container: {

    }
})

export default CircleButton;