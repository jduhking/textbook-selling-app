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
import * as yup from 'yup';
import axios from 'axios'

const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required'),
})

function ForgotPassword({onChangeText, formPress}){


    const navigation = useNavigation();


    return(

        <View style={styles.container}>
            <Image source={require('../../assets/login_icon.png')} style={styles.image}/>
            <Formik
                validationSchema={validationSchema}
                initialValues={{NetID:'', password: ''}}
                onSubmit={
                    async (values, actions) => {

                    console.log("Attempting to log in...")
                    // set submitting as true
                    actions.setSubmitting(true)
                    // perform call to to logi
                            // after submission set it to false
                            actions.setSubmitting(false)         
                    }
                }>
            
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                    <View style={styles.smaller_container}>
                        <View>
                            <Text style={styles.forgotPasswordTitle}>
                                Forgot Password?
                            </Text>
                            <Text style={styles.prompt}>Enter your email</Text>
                        </View>
                        <View style={styles.passwordResetContainer}>
                        <AppTextInput
                            onChangeText={handleChange('email')}
                            placeHolder={'Email'}
                            onBlur={handleBlur('Email')}
                            value={values.email}
                        />
                        <ErrorMessage error={errors.email} visible={touched.email}/>
                        <View style={styles.spacer}></View>
                        <AppButton
                            text={'RESET PASSWORD'}
                            onPress={() => navigation.navigate('EnterPin')}
                        />
                        < BackLink
                        text={'Back'} 
                        onPress={() => navigation.navigate('Login')} />
                        </View>
                     
                    </View>
                )}
            </Formik>
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
    spacer: {
        marginTop: 20
    },
    signupTextContainer: {
        marginTop:15,
    },
    prompt: {

        marginTop: 20,
        fonsize: '16',
        marginLeft: 55

    },
    passwordResetContainer: {
     
        marginTop: 5,

    },
    forgotPasswordTitle: {

        fontSize: '24',
        marginLeft: 20,
       
    }

})

export default ForgotPassword


