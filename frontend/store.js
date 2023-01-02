import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './components/Login/LoginSlice'

export const store = configureStore({
    reducer: {

        isLogin: loginReducer,
        
    },
})