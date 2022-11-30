import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';

export default function Directory({ navigation }) {


    const isFocused = useIsFocused();

    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [myItems, setMyItems] = useState([]);

    const LoadData = () => {
        fetch("https://api.jsonbin.io/v3/b/637593ed65b57a31e6b9c34a/latest", {
            method: "GET",
            headers: {"X-Master-Key": "$2b$10$8NhuF84k7wthEnrWnBcgveJxKX30IpDd/RU5JZ8WY6iytzsEDwvAC",
                      "X-Bin-Meta": false}
        })
            .then(response => response.json())
            .then(data => setMyItems(data))
            .catch(error => console.log("Failed to load data. \n") + error)
            .finally(() => {setIsDataLoaded(true);console.log("performed load")})
    }
    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            LoadData();
        });
        return focusHandler;
    }, [navigation]);
    

    useEffect( () => {
        LoadData();
    }, []);

    return (
      <View style={styles.container}>
        <FlatList
            data={myItems}
            renderItem={({item}) => 
            <TouchableOpacity style={styles.item}
                    onPress={() => onPressHandlerDetails(item.id)}>
                    <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>}
        />
        <TouchableOpacity 
            style={styles.circleButton}
            onPress={() => onPressHandlerAdd()}>
            <FontAwesome
                name="plus"
                size={50}
                color='#ffffff'/>
        </TouchableOpacity>
        <StatusBar style="auto"/>
        <TouchableOpacity 
            style={styles.circleButtonLeft}
            onPress={() => onPressHandlerSettings()}>
            <FontAwesome
                name="gear"
                size={50}
                color='#ffffff'/>
        </TouchableOpacity>
        <StatusBar style="auto"/>
      </View>
      
    )

    function onPressHandlerDetails(employeeID) {
        navigation.navigate('Details', {
            id: myItems[employeeID-1].id,
            itemsArray: JSON.stringify(myItems)
        });
      }
    function onPressHandlerAdd() {
        navigation.navigate('Add', {
            itemsArray: JSON.stringify(myItems)
        });
    }
    function onPressHandlerSettings() {
        //navigation.navigate('Settings')
    }

    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
        width: Dimensions.get('window').width,
      },
    text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 36,
        height: 50,
        fontFamily: 'Trebuchet',
    },
    circleButton: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 1000,
        position: 'absolute',
        bottom: 20,
        right: 20,
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
    },
    circleButtonLeft: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 1000,
        position: 'absolute',
        bottom: 20,
        left: 20,
        borderWidth: 2,
        borderColor: "#941a1d",
        backgroundColor: '#595959',
    },
  });