
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';


function WelcomeNavigator({navigation})
{
    const Stack = createNativeStackNavigator();
    
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen  name='Login'  component={LoginScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='SignUp' component={SignUpScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default WelcomeNavigator;