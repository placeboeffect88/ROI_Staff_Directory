import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import DirectoryScreen from './assets/pages/DirectoryScreen';
import DetailsScreen from './assets/pages/DetailsScreen';
import EditScreen from './assets/pages/EditScreen';
import AddScreen from './assets/pages/AddScreen';
import Footer from './assets/components/Footer';

const Stack = createNativeStackNavigator();

  
  function App() {
    const [fontsLoaded] = useFonts({'Trebuchet': require('./assets/fonts/trebuc.ttf')})
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DirectoryScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
