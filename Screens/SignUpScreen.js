import Reat from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,ImageBackground} from '@react-navigation/native-stack';

function SignUpScreen({navigation}){
    return(
       <ImageBackground style={styles.container} source={require('../assets/login_background.jpg')}>
            
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})

export default SignUpScreen;