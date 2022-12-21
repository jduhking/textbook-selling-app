import {useState} from 'react';
import {View,FlatList,StyleSheet,Text} from 'react-native';
import BookCard from '../components/BookCard';
import { posts } from '../Data/Data';
import Constants from 'expo-constants';
import HomeHeader from '../components/HomeHeader';
import BottomTabsNavigator from '../Navigators/BottomTabsNavigator';

function FeedScreen(props){

    const [postsData, setPostsData] = useState(posts);

    const HandleSearch = (value) => {
        if (!value.length) return setPostsData(posts);
        
        const filterDataTitle = posts.filter((item) =>
            item.title.toUpperCase().includes(value.toUpperCase())
        );

        const filterDataISBN = posts.filter((item) =>
            item.ISBN.includes(value)
        );

        const filterDataAuthor = posts.filter((item) =>
            item.Author.toUpperCase().includes(value.toUpperCase())
        );

        if (filterDataTitle.length) setPostsData(filterDataTitle);
        if (filterDataISBN.length) setPostsData(filterDataISBN);
        if (filterDataAuthor.length) setPostsData(filterDataAuthor);
    }

    return(
       <View style={styles.container}>
            <View style={styles.subContainer}>
            <HomeHeader onSearch={HandleSearch}/>
            </View>
            <View style={{zIndex:-3, position:"absolute",top:0, bottom:0, right:0, left:0}}>
                <View style={{width:'100%', height:'100%', backgroundColor:'#005D28'}}/>
            </View>
            <View style={{zIndex:-1, position:"absolute",top:'14%', bottom:0, right:0, left:0}}>
            <View style={{width:'100%',height:'100%',borderRadius:1,backgroundColor:'white', flexDirection: 'column-reverse'}}/>
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


// flat list is moved for now 

/*


    <FlatList
                    data={postsData}
                    renderItem={({item}) => <BookCard Data={item}/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    //stickyHeaderIndices={[0]}
                    //stickyHeaderHiddenOnScroll={true}
                    ListHeaderComponent={<HomeHeader onSearch={HandleSearch}/>}
                >



*/