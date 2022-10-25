import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import LoginCard from './components/LoginCard';
import WelcomeNavigator from './Navigators/WelcomNavigator';
import HomeScreen from './Screens/HomeScreen';
import SignUpScreen from './Screens/SignUpScreen';

export default function App() {
  return (
    <SignUpScreen/>
  );
} 