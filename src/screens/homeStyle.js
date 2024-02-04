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
  headerText: {
    fontSize: width * 0.05,
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
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  meteodate: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  humidity: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    textAlign: 'center',  
    margin: 15
  },
  temperature: {  
    fontSize: width * 0.04,
    fontWeight: 'bold',
    textAlign: 'center',  
  },
  btn: {
    // Add your button styles here
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default styles;
