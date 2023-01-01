import {useState} from 'react';
import {StyleSheet,View,Text,TextInput,Image, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import AppTextInput from './AppTextInput';
import AppButton from './AppButton';
import LinkButton from './LinkButton';
import LoginToSignup from './LoginToSignup';
import {Formik} from 'formik';
import ErrorMessage from './ErrorMessage';
import {Entypo} from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import * as yup from 'yup';
import axios from 'axios'

const loginValidationSchema = yup.object().shape({
    NetID: yup.string().required('NetID is required'),
    password: yup.string().required('Password is a required field')
})

// attempt to login

async function Login (values) {

   
    let res = undefined
    try {
        
        const BACKEND_URL = process.env.BACKEND_URL
        const LOGIN_ROUTE = process.env.LOGIN_ROUTE
        console.log(BACKEND_URL + LOGIN_ROUTE)
        // attempt to login by sending axios post request to backend

                await axios
                    .post(BACKEND_URL + LOGIN_ROUTE, {

                            username : values.NetID,
                            password : values.password

                    }) // if it works then show the response
                    .then(function (response) {

                       res = response
                  

                    }) // if it doesnt work then show the error
                    .catch(function(error) { 

                       res = error.response
                     

                    })
    } catch(error){

        // if there is an error report error message

        res = error
    }
    
    return res
}


function LoginCard({onChangeText, formPress}){


    const [showPassword,setShowPassword] = useState(true);

    const navigation = useNavigation();

    return(

        <View style={styles.container}>
            <Image source={require('../assets/login_icon.png')} style={styles.image}/>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{NetID:'', password: ''}}
                onSubmit={
                    async (values, actions) => {

                        

                    // set submitting as true
                    actions.setSubmitting(true)
                    // perform call to to login

                    console.log("Login")

                    let response = await Login(values)


                        if(response.status < 299 ){
    
                            console.log(`User ${response.data.message.username} logged in`)
    
                        }else {
                        
                           
                            console.log(response.data.errors)
    
                        }

                            // after submission set it to false
                            actions.setSubmitting(false)
                    
                    
                    }
                  

                }
            >
                {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                    <View style={styles.smaller_container}>
                        <AppTextInput
                            onChangeText={handleChange('NetID')}
                            placeHolder={'NetID'}
                            onBlur={handleBlur('NetID')}
                            value={values.NetID}
                        />
                        <ErrorMessage error={errors.NetID} visible={touched.NetID}/>
                        <View style={styles.spacer}></View>
                        <AppTextInput
                            onChangeText={handleChange('password')}
                            placeHolder={'Password'}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={showPassword}
                            icon={
                                <TouchableOpacity onPress={() => {setShowPassword((prev) => !prev)}} style={{paddingLeft:4}}>
                                    {showPassword ? <Entypo name="eye-with-line" size={22} color="black" />  : <Entypo name="eye" size={22} color="black" />}
                                </TouchableOpacity>
                            }
                        />
                        <ErrorMessage error={errors.password} visible={touched.password}/>
                        <View style={{flexDirection:'row-reverse', width:'100%'}}>
                            <LinkButton
                                text={'Forgot Password?'}
                            />
                        </View>
                        <View style={styles.spacer}></View>
                        <AppButton
                            text={'LOGIN'}
                            onPress={handleSubmit}
                        />
                        <View style={styles.signupTextContainer}>
                            <LoginToSignup
                                text={"Don't have an account?"}
                                onPress={()=> navigation.navigate('Signup')}
                            />
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
    forgotPasswordContainer: {
        flexDirection:'row-reverse'
    }

})

export default LoginCard;