import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

export default function Footer({ navigation }) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity 
                style={styles.item}
                onPress={() => navigation.navigate('Details')}>
                <FontAwesome
                    name="home"
                    size={36}
                    color='#ffffff'
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.item}
                onPress={() => onPressHandlerAdd()}>
                <FontAwesome
                    name="plus"
                    size={36}
                    color='#ffffff'
                />
            </TouchableOpacity>
        </View>
    )
    function onPressHandlerHome() {
        
    }
    function onPressHandlerAdd() {
        
    }
}


const styles = StyleSheet.create({
    footer: {
      flexDirection: 'row',
      flex: 1,
      position: 'absolute',
      bottom: 0,
      left: 0,
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
        width: Dimensions.get('window').width/2,
        alignItems: 'center',
      },
      text: {
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 36,
        height: 50,
    },
  });