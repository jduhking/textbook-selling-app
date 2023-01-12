import react from 'react';
import {View, StyleSheet,ImageBackground} from 'react-native';
import ForgotPassword from '../components/ForgotPass/ForgotPassword';


function ForgotPasswordScreen(props){
    return(
        <ImageBackground style={styles.container} source={require('../assets/login_background.jpg')}>
            <ForgotPassword />
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

export default ForgotPasswordScreen;