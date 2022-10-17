import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import LoginCard from './components/LoginCard';
import WelcomeNavigator from './Navigators/WelcomNavigator';
import HomeScreen from './Screens/HomeScreen';

export default function App() {

  return (
    <WelcomeNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
