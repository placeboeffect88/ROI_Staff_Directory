import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import { employee } from '../json/data';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Footer from '../components/Footer';

export default function Directory({ navigation }) {
    return (
      <View style={styles.container}>
        <FlatList
            data={employee}
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
      </View>
      
    )

    function onPressHandlerDetails(employeeID) {
        navigation.navigate('Details', {
            id: employee[employeeID].id,
            name: employee[employeeID].name,
            phone: employee[employeeID].phone,
            department: employee[employeeID].department,
            street: employee[employeeID].Street,
            city: employee[employeeID].City,
            state: employee[employeeID].State,
            zip: employee[employeeID].Zip,
            country: employee[employeeID].Country
        });
      }
    function onPressHandlerAdd() {
        navigation.navigate('Add');
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
  });