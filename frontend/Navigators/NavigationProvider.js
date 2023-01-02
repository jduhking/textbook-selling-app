
import BottomTabsNavigator from './BottomTabsNavigator';
import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from '@react-navigation/native'
import {useSelector} from 'react-redux'
import {isLogin} from '../components/Login/LoginSlice'

function NavigationProvider(){

    
// Authentication flow


const isLoggedIn = useSelector(isLogin)


return(

    < NavigationContainer>
    {
    isLoggedIn ? (
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


)



}

export default NavigationProvider