import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

function LinkButton({onPress,text}){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 3
    },
    textStyle: {
        textDecorationLine:'underline',
        color:'green',
        fontSize:13
    }
});

export default LinkButton;