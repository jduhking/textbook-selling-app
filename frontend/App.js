
import NavigationProvider from './Navigators/NavigationProvider'
import React from "react"
import { store } from './store'
import { Provider } from  'react-redux'

export default function App() {

  return (
 <Provider store={store} >
    <NavigationProvider />
 </Provider>
  );
} 

