

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from './AuthNavigator'
import { BottomTabsNavigator } from './BottomTabsNavigator'


const RootStack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="Home" component={BottomTabsNavigator} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
}

export default RootNavigator;