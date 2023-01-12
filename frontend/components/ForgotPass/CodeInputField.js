import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet,View,Text,TextInput,Image, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import AppTextInput from '../AppTextInput';
import AppButton from '../AppButton';
import BackLink from '../BackLink'
import ErrorMessage from '../ErrorMessage';
import {Entypo} from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import axios from 'axios'

import { CodeInputContainer, HiddenTextInput, SplitBoxes, SplitBoxText, SplitOTPBoxesContainer, SplitBoxesFocused } from "./styles"

function CodeInputField({ code, setCode, maxLength, setIsPinReady}){

     // box array

    const boxArray = new Array(maxLength).fill(0)

    const inputRef = useRef()
    
    // highlight focused box

    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false)

    // when input field is focused

    const handleOnPress = () => {
        setIsInputBoxFocused(true)
        inputRef.current.focus()
    }

    // when not focused on input field
    const handleOnBlur = () => {
        
        setIsInputBoxFocused(false);

    }

    // Show enter pin button when the pin array is filled

    useEffect(() => {

        // Update the pin ready status

        setIsPinReady(code.length === maxLength)

        // clean up function

        return () => {
            
            setIsPinReady(false)
        }


    }, [code])



    const boxDigit = (_, index) => {

        const emptyInput = ""
        const digit = code[index] || emptyInput

        const isCurrentValue = index === code.length
        const isLastValue = index === maxLength - 1
        const isCodeComplete = code.length === maxLength

        const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete)

        const StyledSplitBoxes = 
            isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes

            console.log(isInputBoxFocused && isValueFocused)
            
        return(
            <StyledSplitBoxes key={index}>
                <SplitBoxText>{digit}</SplitBoxText>
            </StyledSplitBoxes>
        )
    }

   

    return(

        <CodeInputContainer>
            <SplitOTPBoxesContainer
            onPress={handleOnPress}
            >
                {boxArray.map(boxDigit)}
            </SplitOTPBoxesContainer>
            <HiddenTextInput 
                value={code}
                onChangeText={setCode}
                maxLength={maxLength}
                ref={inputRef}
                onBlur={handleOnBlur}
            
            />
        </CodeInputContainer>
    );
}


export default CodeInputField


