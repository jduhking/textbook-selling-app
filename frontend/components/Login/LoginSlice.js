import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    value: false,

}

// Login State


export const LoginSlice = createSlice({

name: 'isLogin',
initialState,

reducers: {

    login: (state) => {

        // set the login state to true

        state.value = true
    },

    logout: (state) => {

        // set the login state to false


    }

}


})

export const  { login, logout } = LoginSlice.actions

export const isLogin = (state) =>  state.isLogin.value

export default LoginSlice.reducer