import {useState} from 'react';
import {View,FlatList,StyleSheet,Text, Image, Dimensions} from 'react-native';
import BookCard from '../components/BookCard';
import { posts } from '../Data/Data';
import Constants from 'expo-constants';
import HomeHeader from '../components/HomeHeader';
import BottomTabsNavigator from '../Navigators/BottomTabsNavigator';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

 
      
          

     
            <View style={styles.greenBackground} >
                <HomeHeader onSearch={HandleSearch}/>
            </View>

            <View style={styles.whiteBackground}>

            <View>
            <FlatList style={styles.topBooks}
                        data={postsData}
                        renderItem={({ item }) => (<BookCard Data={item} />)}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        
                />
            </View>
       



            </View>
        </View>

    );

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        flexDirection: 'column'

    },
    greenBackground: {

    flex: 1,
    backgroundColor:'#005D28',



    },

    whiteBackground: {

        flex: 5,
        flexDirection: 'column',
        backgroundColor:'white',
   

    },

    topBooks: {

        overflow: 'visible',
        height: windowHeight * 0.45,
        marginTop: '2%',
        marginLeft: 10,
        


    }

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