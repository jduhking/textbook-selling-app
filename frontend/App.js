import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import LoginCard from './components/LoginCard';

import BottomTabsNavigator from './Navigators/BottomTabsNavigator';
import AppNavigator from './Navigators/AppNavigator'
import AuthNavigator from './Navigators/AuthNavigator';


// Authentication flow


isSignedIn = true;


export default function App() {

  return (
  < NavigationContainer>
    {
    isSignedIn ? (
      <>
    <BottomTabsNavigator/>
      </>
    ) : (
      <>
      <AuthNavigator/>
      </>
    )
    }
  </ NavigationContainer>
  );
} 