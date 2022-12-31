

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Fontisto, FontAwesome5, Octicons, Feather } from '@expo/vector-icons';
import colors from '../components/colors';
import { color } from 'react-native-reanimated';

import AppNavigator from './AppNavigator'


const BottomTabs = createBottomTabNavigator();

function BottomTabsNavigator({navigation})
{


    return(
        
        <BottomTabs.Navigator screenOptions={{ headerShown: false}} >

        <BottomTabs.Screen name=
        'Feed' component={AppNavigator} 
        initialParams={{ initialRoute: "FeedScreen"}}
        options={{ tabBarIcon: ({focused, color, size}) => 
        <Octicons name="home" size={24} color={focused ? colors.green : colors.gray} />, gestureEnabled:false, tabBarActiveTintColor: colors.green}}/>
        <BottomTabs.Screen name='Wishlist' component={AppNavigator} 
        initialParams={{ initialRoute: "WishlistScreen"}}
        options={{ tabBarIcon: ({focused, color, size}) => 
        <FontAwesome5 name="heart" size={24} color={focused ? colors.green : colors.gray} />, gestureEnabled:false, tabBarActiveTintColor: colors.green}}/>
        <BottomTabs.Screen name='Sell' component={AppNavigator} 
        initialParams={{ initialRoute: "SellScreen"}}
        options={{ tabBarIcon: ({focused, color, size}) => 
        <Feather name="camera" size={24} color={focused ? colors.green : colors.gray} />, gestureEnabled:false, tabBarActiveTintColor: colors.green}}/>
        <BottomTabs.Screen name='Transactions' component={AppNavigator} 
        initialParams={{ initialRoute: "TransactionsScreen"}}
        options={{ tabBarIcon: ({focused, color, size}) =>
        <Fontisto name="arrow-swap" size={24} color={focused ? colors.green : colors.gray} />, gestureEnabled:false, tabBarActiveTintColor: colors.green}}/>
        <BottomTabs.Screen name='Account' component={AppNavigator} 
        initialParams={{ initialRoute: "AccountScreen"}}
        options={{ tabBarIcon: ({focused, color, size}) => 
        <FontAwesome5 name="user" size={24} color={focused ? colors.green : colors.gray} />, 
         gestureEnabled:false, tabBarActiveTintColor: colors.green}}/>
        </BottomTabs.Navigator>
       

    );
}

export default BottomTabsNavigator;