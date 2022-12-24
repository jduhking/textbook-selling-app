import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import LoginCard from './components/LoginCard';
import AuthNavigator from './Navigators/AuthNavigator';
import BottomTabsNavigator from './Navigators/BottomTabsNavigator';
import HomeScreen from './Screens/HomeScreen';
import SignUpScreen from './Screens/SignUpScreen';
import FeedScreen from './Screens/FeedScreen';
import LoginScreen from './Screens/LoginScreen';
import RootNavigator from './Navigators/RootNavigator';

// Authentication flow


isSignedIn = false;


export default function App() {

  return (
  < NavigationContainer>
  
    <RootNavigator />

  </ NavigationContainer>
  );
} 