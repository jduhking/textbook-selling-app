import React from 'react';
import {View,FlatList,StyleSheet,Text} from 'react-native';
import BookCard from '../components/BookCard';
import { posts } from '../Data/Data';
import Constants from 'expo-constants';
import HomeHeader from '../components/HomeHeader';

function FeedScreen(props){

    return(
       <View style={styles.container}>
            <View style={styles.subContainer}>
                <FlatList
                    data={posts}
                    renderItem={({item}) => <BookCard Data={item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[0]}
                    stickyHeaderHiddenOnScroll={true}
                    ListHeaderComponent={HomeHeader}
                />
            </View>
            <View style={{zIndex:-3, position:"absolute",top:0, bottom:0, right:0, left:0}}>
                <View style={{width:'100%', height:'100%', backgroundColor:'#005D28'}}/>
            </View>
            <View style={{zIndex:-1, position:"absolute",top:0, bottom:0, right:0, left:0, flexDirection:'column-reverse'}}>
            <View style={{width:'100%',height:'65%',borderRadius:15,backgroundColor:'white'}}/>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex:1,
    },
    subContainer: {
        width:'100%',
        height:'100%',
    },
})

export default FeedScreen