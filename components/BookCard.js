import React from 'react';
import {StyleSheet,View,Image,Text, TouchableOpacity, TouchableWithoutFeedback, Pressable} from 'react-native';
import PostInfo from './PostInfo';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';


function BookCard({Data}){

    return(
        <View style={styles.container} >
            <Pressable style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={Data.Image[0]}/>
                </View>
                <Text>{Data.title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        alignItems:'center',
        marginBottom: Constants.statusBarHeight,
    },
    cardContainer: {
        width:'80%',
        backgroundColor:'white',
        alignItems:'center',
        borderRadius: 17,
        shadowColor:'black',
        shadowRadius:20,
        shadowOpacity:0.6
    },
    imageContainer:{
        width:'100%',
        height:250,
        
    },
    imageStyle: {
        width:'100%',
        height:'100%',
        overflow:'hidden',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17
    }

})

export default BookCard;