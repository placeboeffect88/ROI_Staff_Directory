import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AddScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>This is the Add screen</Text>
        <StatusBar style="auto"/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#444444',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });