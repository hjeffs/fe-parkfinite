import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Header from '../components/Header'; 
import { ImageBackground } from 'react-native';
import Button from '../components/Button';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { UserContext } from '../utils/UserContext';
import { useContext, useEffect } from 'react';
import { getUsers } from '../utils/api';



function HomeScreen() {
    const {user, setUser} = useContext(UserContext)
    const navigation = useNavigation();
  
   function handleLogin () {
    getUsers()
    .then((data) => {
      setUser(data)
      

    })
    navigation.navigate("SearchCampsiteView")
   }

   function handleGuest () {
   setUser({username: "Guest"})
   navigation.navigate("SearchCampsiteView")
   }
   
    return (
      <SafeAreaView style={styles.container}>
        {/* <Header title="Parkfinite" /> */}
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
          <View style={styles.buttonContainer}>
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
            <Button title="Log In" onPress={handleLogin} />
          </View>
          <Button
            title="Continue as guest"
            onPress={handleGuest}
            style={styles.continueAsGuestButton}
          />
          <Text style={styles.label}>
            Guests on this site are restricted to viewing level 1 campsites, and not being able to post or comment
          </Text>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      marginTop: 60,
      resizeMode: 'cover',
      justifyContent: 'center',  
    },
    buttonContainer: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'static', 
      bottom: 0, 
    },
    button: {
      marginHorizontal: 100,
    },  
  
    continueAsGuestButton: {
      fontSize: 9,
      
    },
  
    label: {
      padding: 50,
      color: '#333',   
      alignItems: 'center', 
    }  
  });
  
  export default HomeScreen