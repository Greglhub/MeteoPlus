import { StyleSheet } from "react-native";

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
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',  
        borderRadius: 10,
      },

      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      meteocard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      meteotext: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },

      meteodate: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      humidity : {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      }
})


export default styles