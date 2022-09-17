import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';

function WelcomeNavigator(props)
{
    const Stack = createNativeStackNavigator();

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name='Login'  component={LoginScreen}/>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
}