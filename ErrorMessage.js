import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

function ErrorMessage({error,visible}) {

    if (!error || !visible) return null;

    return(
        <View style={styles.errorView}>
            <Text style={styles.errorMessage}>{error}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    errorView: {
        width:'100%',
        margin: 3
    },
    errorMessage: {
        color:'red',
        fontSize:12
    },
});

export default ErrorMessage;