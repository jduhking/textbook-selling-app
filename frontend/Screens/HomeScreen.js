import {useState} from 'react';
import {View,Text,ScrollView,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides,posts } from '../Data/Data';
import LoginScreen from './LoginScreen';
import FeedScreen from './FeedScreen';


function HomeScreen(props){

    const [showSlider, setShowSlider] = useState(true);

    const renderSlide = ({item}) => {
        return(
            <View style={{width:'100%',height:'100%', justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
                <Text style={{fontSize:'Bold'}}>{item.title}</Text>
                {/*<Image/>*/}
                {item.key === '3' && (
                    <TouchableOpacity style={{backgroundColor:'white', width:120, alignItems:'center', height:30, justifyContent:'center', borderRadius:7, marginTop:10}} onPress={()=> setShowSlider(false)}>
                        <Text>GET STARTED</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }

    return(
            <View style={styles.homeContainer}>
                {
                    showSlider ? <AppIntroSlider
                                    data={slides}
                                    renderItem={renderSlide}
                                    showNextButton={false}
                                    showDoneButton={false}
                                    onDone={()=> {setShowSlider(false)}}/> 
                                : <FeedScreen/>
                }
            </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
    flex:1,
    }
})


export default HomeScreen;