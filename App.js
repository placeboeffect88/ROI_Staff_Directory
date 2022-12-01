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


};

const Stack = createNativeStackNavigator();
  
  function App() {
    const [fontsLoaded] = useFonts({'Trebuchet': require('./assets/fonts/trebuc.ttf')})
    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DirectoryScreen} options={{orientation: 'all'}}/>
          <Stack.Screen name="Details" component={DetailsScreen} options={{orientation: 'all'}}/>
          <Stack.Screen name="Settings" component={SettingsScreen} options={{orientation: 'all'}}/>
          <Stack.Screen name="Add" component={AddScreen} options={{orientation: 'all'}}/>
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
