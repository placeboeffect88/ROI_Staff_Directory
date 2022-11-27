import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function EditScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>This is the edit screen</Text>
        <StatusBar style="auto"/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#777777',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });