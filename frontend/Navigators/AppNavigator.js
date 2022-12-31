
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FeedScreen, WishList, CreateListingScreen, TransactionsScreen, AccountScreen  } from '../Screens/'



const AppStack = createNativeStackNavigator();


function AppNavigator({route}) {

  const initialRoute = route.params?.initialRoute || "FeedScreen";

  console.log(route.params?.initialRoute)

  return (
    <AppStack.Navigator initialRouteName={initialRoute}>
      <AppStack.Screen name="FeedScreen" component={FeedScreen} options={{ headerShown: false }} /> 
      <AppStack.Screen name="WishlistScreen" component={WishList} options={{ headerShown: false }} /> 
      <AppStack.Screen name="SellScreen" component={CreateListingScreen} options={{ headerShown: false }} /> 
      <AppStack.Screen name="TransactionsScreen" component={TransactionsScreen} options={{ headerShown: false }} /> 
      <AppStack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} /> 
    </AppStack.Navigator>
  );
}


export default AppNavigator;

