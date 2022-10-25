import react from 'react';
import {TouchableHighlight,View,StyleSheet,Text} from 'react-native';

function AppButton({onPress,text,...otherProps}){
    return(
        <TouchableHighlight onPress={onPress} style={{width:'100%',height:40,backgroundColor:'green',borderRadius:10,justifyContent:'center',alignItems:'center',...otherProps}} underlayColor={'#f4841d'}>
            <View>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        color:'white',
        fontWeight:'bold'
    }
});

export default AppButton;