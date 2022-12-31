
import {View,FlatList,StyleSheet,Text} from 'react-native';



function TransactionsScreen(props){







return(
    <View style={styles.container}>

    <Text> Transactions Screen </Text>

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

export default TransactionsScreen;