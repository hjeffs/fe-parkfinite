import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBarInput = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleInputChange = (input) => {
        setSearchInput(input)
    }
    const handleSubmit = () => {
        console.log("Search in progress")
    }

    return (
       <View style={styles.container}> 
        <TextInput  
    style={styles.searchBar}
    onChangeText={handleInputChange}
    value={searchInput}
    placeholder="Search Campsites..."
      />
      <Button
      title="Submit"
      onPress={handleSubmit}
    />
    </View>
    )
   
}
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    marginVertical: 10, 
    },
    searchBar: {
    position: 'center',
    width: 200,
    backgroundColor: '#D3F8E2',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    }
  });

  export default SearchBarInput