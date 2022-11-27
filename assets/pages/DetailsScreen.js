import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, ScrollView, View } from 'react-native';
import { Dimensions } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
    const { id, name, phone, department, street, city, state, zip, country } = route.params;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Employee ID</Text>
        <TextInput
            style={styles.text} 
            textAlign={'center'}>{JSON.stringify(id)}</TextInput>
        <Text style={styles.titleText}>Employee Name</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(name).replace(/['"]+/g, '')}</TextInput>
        <Text style={styles.titleText}>Employee Phone Number</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(phone).replace(/['"]+/g, '')}</TextInput>
        <Text style={styles.titleText}>Employee Department</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(department).replace(/['"]+/g, '')}</TextInput>
        <Text style={styles.titleText}>Employee Street</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(street).replace(/['"]+/g, '')}</TextInput>
        <Text style={styles.titleText}>Employee City</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(city).replace(/['"]+/g, '')}</TextInput>
        <Text style={styles.titleText}>Employee State</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(state).replace(/['"]+/g, '')}</TextInput>
        <Text style={styles.titleText}>Employee Zip</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(zip).replace(/['"]+/g, '')}</TextInput>
        <Text style={styles.titleText}>Employee Country</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}>{JSON.stringify(country).replace(/['"]+/g, '')}</TextInput>
        <StatusBar style="auto"/>
      </ScrollView>
    )
  }
  

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    text: {
        color: '#ffffff',
        fontFamily: 'Trebuchet',
        alignItems: 'center',
        fontSize: 36,
        width: Dimensions.get('window').width,
        height: 80,
        borderWidth: 1,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
    },
    titleText: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Trebuchet',
    },
  });