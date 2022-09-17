import react from 'react';
import {TouchableHighlight,View,StyleSheet,Text} from 'react-native';

function AppButton({onPress,text}){
    return(
        <TouchableHighlight onPress={onPress} style={styles.container} underlayColor={'#f4841d'}>
            <View>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:40,
        backgroundColor:'green',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle: {
        color:'white',
        fontWeight:'bold'
    }
});

export default AppButton;