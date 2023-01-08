import AsyncStorage from "@react-native-async-storage/async-storage";

export async function store(key, value){

    try {

        // first check if the value is an object

        if(typeof value == 'object'){

            // Serialize the value to a string

            value = JSON.stringify(value)

        }

        // store the value in storage

        await AsyncStorage.setItem(key, value)


    } catch(error) {

        // storing error


        console.log("Token could not be stored")
        console.log(error)

    }

}

export async function retrieve(key) {

    try {

        // try to get the value from storage

        const value = await AsyncStorage.getItem(key)

        // check if the value is a string

        if(value != null && typeof value == 'string'){

            // deserialize the value if it is an object

            try {

                return JSON.parse(value)

            } catch(error){
                // return the value as-is if it is not an object

                return value
            }
        }

    }catch(error){

        console.log('Token either doesn\'t exist or could not be retrieved')

    }


}