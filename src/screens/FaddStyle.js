import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d4ff',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  favoris: {
    borderBottomColor: '#df8e00',
    borderBottomWidth: 3,
    fontSize: 19,
    padding: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  addToFavoritesButton: {
    backgroundColor: 'green',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    width: '40%', 
  },
  SuppToFavoritesButton: {
    backgroundColor: 'red',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    width: '100%', // Set the width to 80%
  },
  favorisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },
  
});

export default styles;
