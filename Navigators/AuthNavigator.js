

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';


function AuthNavigator({navigation})
{
    const Stack = createNativeStackNavigator();
    
    return(

            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen  name='Login'  component={LoginScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
            </Stack.Navigator>

    );
}

export default AuthNavigator;