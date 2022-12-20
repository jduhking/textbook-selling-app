

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Fontisto, FontAwesome5, Octicons, Feather } from '@expo/vector-icons';


import FeedScreen from '../Screens/FeedScreen';
import WishList from '../Screens/WishList';
import CreateListingScreen from '../Screens/CreateListingScreen';
import TransactionsScreen from '../Screens/TransactionsScreen';
import AccountScreen from '../Screens/AccountScreen';
import colors from '../components/colors';


function BottomTabsNavigator({navigation})
{

const BottomTabs = createBottomTabNavigator();

    return(
        
        <BottomTabs.Navigator screenOptions={{headerShown: false}}>

        
        <BottomTabs.Screen name=
        'Home' component={FeedScreen} 
        options={{ tabBarIcon: ({color, size}) => 
        <Octicons name="home" size={24} color={colors.gray} />, gestureEnabled:false}}/>
        <BottomTabs.Screen name='Wishlist' component={WishList} 
        options={{ tabBarIcon: ({color, size}) => 
        <FontAwesome5 name="heart" size={24} color={colors.gray} />, gestureEnabled:false}}/>
        <BottomTabs.Screen name='Sell' component={CreateListingScreen} 
        options={{ tabBarIcon: ({color, size}) => 
        <Feather name="camera" size={24} color={colors.gray} />, gestureEnabled:false}}/>
        <BottomTabs.Screen name='Transactions' component={TransactionsScreen} 
        options={{ tabBarIcon: ({color, size}) =>
        <Fontisto name="arrow-swap" size={24} color={colors.gray} />, gestureEnabled:false}}/>
        <BottomTabs.Screen name='Account' component={AccountScreen} 
        options={{ tabBarIcon: ({color, size}) => 
        <FontAwesome5 name="user" size={24} color={colors.gray} />, gestureEnabled:false}}/>
        </BottomTabs.Navigator>
       

    );
}

export default BottomTabsNavigator;