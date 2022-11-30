import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, View, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function DetailsScreen({ route, navigation }) {
    const { id, itemsArray } = route.params;
    const myItems = JSON.parse(itemsArray);
    const [nameState, setName] = useState(myItems[id-1].name);
    const [phoneState, setPhone] = useState(myItems[id-1].phone);
    const [departmentState, setDepartment] = useState(myItems[id-1].department);
    const [streetState, setStreet] = useState(myItems[id-1].street);
    const [cityState, setCity] = useState(myItems[id-1].city);
    const [stateTerritoryState, setStateTerritory] = useState(myItems[id-1].state);
    const [zipState, setZip] = useState(myItems[id-1].zip);
    const [countryState, setCountry] = useState(myItems[id-1].country);
    
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titleText}>Employee ID</Text>
        <TextInput
            style={styles.text} 
            textAlign={'center'}
            value={id.toString()}
            editable = {false}></TextInput>
        <Text style={styles.titleText}>Employee Name</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setName}
            value={nameState}></TextInput> 
        <Text style={styles.titleText}>Employee Phone Number</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setPhone}
            value={phoneState}></TextInput>
        <Text style={styles.titleText}>Employee Department</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setDepartment}
            value={departmentState.toString()}></TextInput>
        <Text style={styles.titleText}>Employee Street</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setStreet}
            value={streetState}></TextInput>
        <Text style={styles.titleText}>Employee City</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setCity}
            value={cityState}></TextInput>
        <Text style={styles.titleText}>Employee State</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setStateTerritory}
            value={stateTerritoryState}></TextInput>
        <Text style={styles.titleText}>Employee Zip</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setZip}
            value={zipState.toString()}></TextInput>
        <Text style={styles.titleText}>Employee Country</Text>
        <TextInput 
            style={styles.text}
            textAlign={'center'}
            onChangeText={setCountry}
            value={countryState}></TextInput>
        <StatusBar style="auto"/>
        <Text style={styles.titleTextCenter}>Update Employee</Text>
        <TouchableOpacity 
            style={styles.circleButton}
            onPress={() => Save()}>
            <FontAwesome
                name="save"
                size={50}
                color='#ffffff'/>
        </TouchableOpacity>
      </ScrollView>
      
    )
    
    function Save() {
        
        myItems[id-1].id = id;
        myItems[id-1].name = nameState;
        myItems[id-1].phone = phoneState;
        myItems[id-1].department = departmentState;
        myItems[id-1].street = streetState;
        myItems[id-1].city = cityState;
        myItems[id-1].state = stateTerritoryState;
        myItems[id-1].zip = zipState;
        myItems[id-1].country = countryState;
        console.log(myItems[id-1]);
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
        };

        req.open("PUT", "https://api.jsonbin.io/v3/b/637593ed65b57a31e6b9c34a", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$8NhuF84k7wthEnrWnBcgveJxKX30IpDd/RU5JZ8WY6iytzsEDwvAC");
        req.send(JSON.stringify(myItems));
        navigation.goBack();
    }
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
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
    },
    titleText: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Trebuchet',
    },
    titleTextCenter: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Trebuchet',
        alignSelf: 'center',
    },
    circleButton: {
        width: Dimensions.get('window').width*0.9,
        height: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
    },
  });