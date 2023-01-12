


import {View,FlatList,StyleSheet,Text} from 'react-native';


function AccountScreen(props){







return(
    <View style={styles.container}>

    <Text> { process.env.BACKEND_URL }</Text>

    </View>  
)

}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'


    }
})

export default AccountScreen;