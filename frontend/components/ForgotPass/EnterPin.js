import React, {useState} from 'react';
import {StyleSheet,View,Text,TextInput,Image, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import AppTextInput from '../AppTextInput';
import AppButton from '../AppButton';
import BackLink from '../BackLink'
import {Formik} from 'formik';
import ErrorMessage from '../ErrorMessage';
import {Entypo} from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import axios from 'axios'

import CodeInputfield from './CodeInputField'


function EnterPin({onChangeText, formPress}){

    const [code, setCode] = useState('')
    const [isPinReady, setIsPinReady] = useState(false)

    const MAX_CODE_LENGTH = 4; // We're using a code length of four
     

    const navigation = useNavigation();

    return(

        <View style={styles.container}>
            <Image source={require('../../assets/login_icon.png')} style={styles.image}/>
            
                    <View style={styles.One_Time_Pass}>
                    <CodeInputfield
                        setIsPinReady={setIsPinReady}
                        code={code}
                        setCode={setCode}
                        maxLength={MAX_CODE_LENGTH}

                    />
                    </View>
                <View style={styles.smaller_container}>

                    <AppButton
                        text={'Enter PIN'}
                        onPress={() => { console.log('Enter pin!') }}
                    />
                   
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        shadowOpacity: 0.4,
        shadowRadius: 20,
        width:'80%',
        height:'50%',
        backgroundColor:'white',
        alignItems:'center'

    },
    
    smaller_container: {
        width:'75%',
        height:'65%',
        marginTop: 20,
   
    },

    image: {
        width:140,
        height:110,

    },

    One_Time_Pass: {

        marginTop: 20

    },

    spacer: {
        marginTop: 20
    },
 

})

export default EnterPin


