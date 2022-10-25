import React from 'react';
import {StyleSheet,View,Image,Text, TouchableOpacity, TouchableWithoutFeedback, Pressable} from 'react-native';
import PostInfo from './PostInfo';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import BookInfo from './BookInfo';
import AppButton from './AppButton';
import CircleButton from './CircleButton';

function BookCard({Data}){

    return(
        <View style={styles.container} >
            <Pressable style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={Data.Image[0]}/>
                </View>
                <View style={{width:'65%'}}>
                    <Text style={{fontWeight:'bold' ,fontSize:14, marginBottom:2}}>{Data.title}</Text>
                    <Text style={{fontSize:12}}>by {Data.Author}</Text>
                    <Text style={{marginTop: 10}}>ISBN: {Data.ISBN}</Text>
                    <AppButton text={'BUY/RENT'} width={'100%'} height={35} marginTop={3} onPress={()=> console.log('button pressed')}/>
                </View>  
                <TouchableOpacity style={styles.wishList}>

                </TouchableOpacity>
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
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius: 17,
        shadowColor:'black',
        shadowRadius:15,
        shadowOpacity:0.5,
        paddingLeft:10,
        paddingVertical:10
    },
    imageContainer:{
        width:'25%',
        height:100,
        marginRight:10,
        
    },
    imageStyle: {
        width:'100%',
        height:'100%',
        overflow:'hidden',
        resizeMode:'contain',
    },
    wishList: {
        position:'absolute',
        width:30,
        height:30,
        borderRadius:17,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius: 14 ,
    }

})

export default BookCard;