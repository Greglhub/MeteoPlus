// FaddStyle.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  favoris: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  favoriscard: {
    marginTop: 20,
  },
  favoriscardItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  favorisText: {
    fontSize: 16,
    marginRight: 10,
  },
  favorisButton: {
    fontSize: 10,
    color: 'red',
  },

  trashButton: {
    backgroundColor: '#fff', // Customize background color if needed
    borderColor: '#000', // Customize border color if needed
    borderWidth: 1,
    borderRadius: 50, // Make the button circular
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Align icon and text vertically
  },
  trashIcon: {
    marginRight: 5, // Adjust spacing between icon and text
    fontSize: 18, // Customize icon size
    color: '#000', // Customize icon color if needed
  },
});

export default styles;
