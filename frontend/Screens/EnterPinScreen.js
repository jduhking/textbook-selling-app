import react from 'react';
import {View, StyleSheet,ImageBackground} from 'react-native';
import EnterPin from '../components/ForgotPass/EnterPin'


function EnterPinScreen(props){
    return(
        <ImageBackground style={styles.container} source={require('../assets/login_background.jpg')}>
            <EnterPin />
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

export default EnterPinScreen;