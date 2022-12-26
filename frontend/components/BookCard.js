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
         
            <Pressable style={styles.cardContainer}>
           
                <Image style={styles.imageStyle} source={Data.Image[0]}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.author}>{Data.Author}</Text>

                    <Text style={styles.title}>{Data.title}</Text>
                    <Text style={{fontSize: 12}}>ISBN: {Data.ISBN}</Text>
                    <Text style={{fontSize: 12}}>Condition: {Data.conditon}</Text>
                    <View style={styles.lastContainer}>
                    <Text style={{fontSize: 20}}>{"$" + Data.price}</Text>
                    </View>
                </View>
            </Pressable>
          
     
    );
}

import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
   
    cardContainer: {
  
        backgroundColor:'white',
        borderRadius: 8,
        shadowColor:'black',
        shadowRadius:15,
        shadowOpacity:0.5,
       
        width: windowWidth * 0.4,
        
       
        marginEnd: 10,
        flexDirection: 'column',

        
        
        
    
    },

    imageStyle: {

        width: windowWidth * 0.4,
        height: windowHeight * 0.22,
        
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,

 
    },
    contentContainer: {
        
        marginLeft: '3%',
        height: windowHeight * 0.19,

    },

    title: {
      
        height: '40%',
        fontWeight:'bold',
        fontSize: 16, 
        marginBottom:2,
        marginTop: '2%',
        paddingTop: '2%',
        paddingLeft: '2%',
        
        
    },


    author: {

        fontSize: 12, 
        marginTop: '2%',
        paddingLeft: '2%',
        height: '12%'



    },
    lastContainer: {

        flexDirection: 'row',
        height: '40%',
      
    },

    wishList: {
       
        width:30,
        height:30,
        borderRadius:17,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius: 14 ,
    }

})

export default BookCard;

{/*


    <View>

                    
                    
                   
    </View>


      <TouchableOpacity style={styles.wishList}>
                </TouchableOpacity>

*/}