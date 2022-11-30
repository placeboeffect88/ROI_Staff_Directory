import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import DirectoryScreen from './assets/pages/DirectoryScreen';
import DetailsScreen from './assets/pages/DetailsScreen';
import SettingsScreen from './assets/pages/SettingsScreen';
import AddScreen from './assets/pages/AddScreen';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 0, 0)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(38, 38, 38)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(148, 26, 29)',
    notification: 'rgb(0, 0, 0)',
  },
};

const Stack = createNativeStackNavigator();
  
  function App() {
    const [fontsLoaded] = useFonts({'Trebuchet': require('./assets/fonts/trebuc.ttf')})
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DirectoryScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
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
