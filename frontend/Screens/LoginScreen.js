import react from 'react';
import {View, StyleSheet,ImageBackground} from 'react-native';
import LoginCard from '../components/Login/LoginCard';

function LoginScreen(props){
    return(
        <ImageBackground style={styles.container} source={require('../assets/login_background.jpg')}>
            <LoginCard/>
        </ImageBackground>
    );
}
// Hi my name is James
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})

export default LoginScreen;