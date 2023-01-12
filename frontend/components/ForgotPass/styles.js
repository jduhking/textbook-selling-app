import styled from "styled-components/native"

// pin input styles

export const CodeInputContainer = styled.View`


    justify-content: center;
    align-items: center;
  

`;

export const HiddenTextInput = styled.TextInput`

    position: absolute;
    opacity: 0;

`;

export const SplitOTPBoxesContainer = styled.Pressable`

    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;


`;

export const SplitBoxes = styled.View`

width: 50px;
height: 50px;
border-color: #d3d3d3;
border-width: 2px;
border-radius: 5px;
padding: 12px;

`;

export const SplitBoxText = styled.Text`

    
    font-size: 20px;
    text-align: center;
    color: black;

`

export const SplitBoxesFocused = styled(SplitBoxes)`

    border-color: grey;
    background-color: #f7f7f7

`