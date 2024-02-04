import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#00d4ff',
      },
      weatherIcon: {
        width: 50, 
        height: 50, 
        alignItems: 'center'
      },
      searchInput: {
        borderBottomColor: '#df8e00',
        borderBottomWidth: 3, 
        fontSize: 19,
        padding: 5,
        paddingVertical: 20, 
        marginVertical: 100,
        marginHorizontal: 10,
        height: "27%",
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',  
        borderRadius: 10,
      },
    })

    export default styles