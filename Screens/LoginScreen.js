import react from 'react';
import {View, StyleSheet,ImageBackground} from 'react-native';
import LoginCard from '../components/LoginCard';

function LoginScreen(props){
    return(
        <ImageBackground style={styles.container} source={require('../assets/login_background.jpg')}>
            <LoginCard/>
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

export default LoginScreen;