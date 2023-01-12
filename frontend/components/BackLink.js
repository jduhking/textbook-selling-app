import React from 'react';
import {Text, StyleSheet,View} from 'react-native';
import LinkButton from './LinkButton';

function BackLink({text,onPress}){

    return(
        <View style={styles.container}>
            <LinkButton
                onPress={onPress}
                text={text}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent:'center',
        flexDirection:'row-reverse'
    },
    textStyle: {
        fontSize:13,
        marginTop:3,
        marginRight:2
    }
});

export default BackLink