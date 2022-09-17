import {useState} from 'react';
import {TouchableWithoutFeedback, View,TextInput, StyleSheet} from 'react-native';

function AppTextInput({onChangeText, placeHolder,formPress,onBlur,secureTextEntry,keyboardType,icon}){

    const [textEdit, setEditText] = useState();
    let changeStyle;
    if (textEdit)
    {
        changeStyle = styles.onEditContainer;
    }
    else changeStyle = styles.pressable;

    return(
        <TouchableWithoutFeedback onPress={formPress}>
            <View style={changeStyle}>
                <TextInput
                    style={styles.textContainer}
                    onChangeText={onChangeText}
                    placeholder={placeHolder}
                    onPressIn={()=>{setEditText(true)}}
                    onEndEditing={()=>{setEditText(false)}}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />
                {icon ? icon : null}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    pressable: {
        width:'100%',
        height:30,
        borderColor:'black',
        borderWidth:1,
        borderRadius: 4,
        flexDirection:'row',
        alignItems:'center'
    },
    textContainer: {
        width:'80%',
        height: 40,
        marginLeft: 10
    },
    onEditContainer: {
        width:'100%',
        height:30,
        borderColor:'green',
        borderWidth:2,
        borderRadius: 4,
        flexDirection:'row',
        alignItems:'center'
    }
});

export default AppTextInput;