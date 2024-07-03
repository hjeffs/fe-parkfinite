import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View, Text} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SearchCampsiteView from "./screens/searchCampsiteView";
import IndividualCampsiteView from "./screens/individualCampsiteView";


const Stack = createNativeStackNavigator();

const StackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Group>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SearchCampsiteView" component={SearchCampsiteView} options={{ title: 'Search Campsite' }} />
            </Stack.Group>
            <Stack.Group> 
            <Stack.Screen name="IndividualCampsiteView" component={IndividualCampsiteView} options={{ title: 'View Campsite' }}  />
            </Stack.Group>
        </Stack.Navigator>

    )
}

export default StackNavigator