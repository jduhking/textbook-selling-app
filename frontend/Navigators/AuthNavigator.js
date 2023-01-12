
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, SignUpScreen, ForgotPasswordScreen, EnterPinScreen } from '../Screens';



const AuthStack = createNativeStackNavigator();


function AuthNavigator({navigation}) {

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> 
      <AuthStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}} />
      <AuthStack.Screen name='EnterPin' component={EnterPinScreen} options={{ headerShown: false}} />
      <AuthStack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} /> 

    </AuthStack.Navigator>
  );
}


export default AuthNavigator;

