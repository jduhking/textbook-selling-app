import {useState} from 'react';
import {Text,StyleSheet,View,Image, TextInput,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Feather,Ionicons } from '@expo/vector-icons';

function HomeHeader({onSearch, onPress, profilePress, filterPress}){

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.firstContainer}>
                    <Image style={{width:100, height:50}} source={require('../assets/light_logo.png')}/>
                    <TouchableOpacity onPress={profilePress}>
                        <Image style={{width:55, height:55, borderRadius:30, borderWidth:2, borderColor:'white'}} source={require('../assets/junior.jpg')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondContainer}>
                    <Text style={{color:'white', fontSize: 14, paddingBottom:5}}>Hello, Ohiani 👋</Text>
                    <Text style={{color:'white', fontSize: 20, fontWeight:'bold'}}>Let's find you a book!</Text>
                </View>
                <View style={styles.searchContainer}>
                    <Feather name="search" size={24} color="black" />
                    <TextInput
                        style={{width:'85%', paddingLeft:5}}
                        placeholder={'Search Books...'}
                        onChangeText={onSearch}
                    />
                    <TouchableOpacity onPress={filterPress} style={{marginLeft:4}}>
                        <Ionicons name="filter-sharp" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 10,
        width:'100%',
        alignItems:'center',
        marginBottom: 20
    },
    subContainer: {
        width:'80%',
    },
    firstContainer: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom: 15
    },
    secondContainer:{
        width:'100%',
        paddingBottom:15
    },
    searchContainer: {
        width:'100%',
        height:45,
        marginBottom:15,
        flexDirection:'row',
        backgroundColor:'#B7BBB9',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        paddingHorizontal:10,

    }


})

export default HomeHeader;