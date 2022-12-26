import {useState} from 'react';
import {StyleSheet,ImageBackground,View,Text,Image, TouchableOpacity,ScrollView} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from '../components/ErrorMessage';
import AppButton from '../components/AppButton';
import {Entypo} from '@expo/vector-icons';

const signUpValidationSchema = yup.object().shape({
    Email: yup.string().email('Please enter a valid email').required('Email is required'),
    Username: yup.string().required('Username is required'),
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

    return(
       <ImageBackground style={styles.background} source={require('../assets/login_background.jpg')}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/login_icon.png')}/>
                <Formik
                    validationSchema={signUpValidationSchema}
                    initialValues={{Username:'', Email:'', password:'', confirmPassword:''}}
                    onSubmit={Values => console.log(Values)}
                >
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                        <View style={{width:'100%'}}>

                            <AppTextInput
                                placeHolder={'Username'}
                                onChangeText={handleChange('Username')}
                                onBlur={handleBlur('Username')}
                                value={values.Username}
                            />
                            <ErrorMessage error={errors.Username} visible={touched.Username}/>
                            <View style={styles.spacer}></View>
                            <AppTextInput
                                placeHolder={'Email'}
                                onChangeText={handleChange('Email')}
                                onBlur={handleBlur('Email')}
                                keyboardType={'email-address'}
                                value={values.Email}
                            />
                            <ErrorMessage error={errors.Email} visible={touched.Email}/>
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
                                placeHolder={'confirm Password'}
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