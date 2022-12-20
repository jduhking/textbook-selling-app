

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import FeedScreen from '../Screens/FeedScreen';


function BottomTabsNavigator({navigation})
{
    
const BottomTabs = createBottomTabNavigator();

    return(
        
            <BottomTabs.Navigator screenOptions={{headerShown: false}}>
     
                <BottomTabs.Screen name='Home' component={HomeScreen} options={{gestureEnabled:false}}/>
                <BottomTabs.Screen name='FeedScreen' component={FeedScreen} options={{gestureEnabled:false}}/>

            </BottomTabs.Navigator>
       

    );
}

export default BottomTabsNavigator;