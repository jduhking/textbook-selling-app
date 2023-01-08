import {useState} from 'react';
import {StyleSheet,ImageBackground,View,Text,Image, TouchableOpacity,ScrollView} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from '../components/ErrorMessage';
import AppButton from '../components/AppButton';
import {Entypo} from '@expo/vector-icons';
import axios from "axios"

   // state

   import { useSelector, useDispatch } from 'react-redux'
   import { login, isLogin } from '../components/Login/LoginSlice'
   import { retrieve, store } from '../components/Login/LoginSlice'

const signUpValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

function SignUpScreen(props){

    const [showPassword,setShowPassword] = useState(true);
    const [showConfirmPassword,setShowConfirmPassword] = useState(true);

    // state 

    // state variables

    const isLoggedin = useSelector(isLogin) // login state variable 
    const dispatch = useDispatch() // only way to update the login state

    async function SignUp(values) {

        let res = undefined
        
        try {

            // perform axios post request to server

            const BACKEND_URL = process.env.BACKEND_URL
            const SIGNUP_ROUTE = process.env.SIGNUP_ROUTE

            await axios
              .post(BACKEND_URL + SIGNUP_ROUTE, {

                username : values.username,
                email : values.email,
                password : values.password

              })
              .then(function(response){

                res = response

              })
              .catch( function(error){

                res = error
              })
        }catch(error){

            res = error

        }

        return res

    }
    return(
       <ImageBackground style={styles.background} source={require('../assets/login_background.jpg')}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/login_icon.png')}/>
                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{username:'', email:'', password:'', confirmPassword:''}}
                    onSubmit={ 

                        async (values, actions ) => {

                        // begin submitting

                        actions.setSubmitting(true)

                        // perform api call to signup route

                        SignUp(values)
                        .then((response) => {

                            if(response.status < 299){

                                // it was a success
                                username = response.data.result.username
                                email = response.data.result.email
                                password = response.data.result.password
    
                                console.log(`User ${username} created with email: ${email} and password: ${password}`)
    
                                dispatch(login()) // login the user after signup
    
                            } else {
    
                                console.log(response.data.errors)
    
                            }

                        }).catch((error) => // catch any errors 
                        {
                            console.log(error)
                        })
                       
                        // stop submitting
                
                        actions.setSubmitting(false)           

                    }
                       }
                >
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                        <View style={{width:'100%'}}>

                            <AppTextInput
                                placeHolder={'Username'}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            <ErrorMessage error={errors.username} visible={touched.username}/>
                            <View style={styles.spacer}></View>
                            <AppTextInput
                                placeHolder={'Email'}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                keyboardType={'email-address'}
                                value={values.email}
                            />
                            <ErrorMessage error={errors.email} visible={touched.email}/>
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
                            <View style={styles.spacer}></View>
                            <AppTextInput
                                onChangeText={handleChange('confirmPassword')}
                                placeHolder={'Confirm Password'}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={showPassword}
                                icon={
                                    <TouchableOpacity onPress={() => {showConfirmPassword((prev) => !prev)}} style={{paddingLeft:4}}>
                                        {showConfirmPassword ? <Entypo name="eye-with-line" size={22} color="black" />  : <Entypo name="eye" size={22} color="black" />}
                                    </TouchableOpacity>
                                }
                            />
                            <ErrorMessage error={errors.confirmPassword} visible={touched.confirmPassword}/>
                            <View style={styles.spacer}></View>
                            <AppButton
                                text={'SIGN UP'}
                                onPress={handleSubmit}
                            />
                        </View>
                    )}

                </Formik>
            </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        width:'80%',
        padding: 29,
        shadowColor:'black',
        borderRadius: 15,
        shadowOpacity: 0.4,
        shadowRadius: 20,
        backgroundColor:'white',
        alignItems:'center'
    },
    logo: {
        width:140,
        height:110,
        marginBottom:10
    },
    spacer: {
        marginTop: 20
    },
})

export default SignUpScreen