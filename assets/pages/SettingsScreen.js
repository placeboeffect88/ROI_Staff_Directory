import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Dimensions } from 'react-native';

export default function EditScreen({ navigation }) {
    
    const [selectedMainBackground, setSelectedMainBackground] = useState('#262626');
    const [selectedItemBackground, setSelectedItemBackground] = useState('#595959');
    const [selectedBorder, setSelectedBorder] = useState('#941a1d');
    const [selectedText, setSelectedText] = useState('#ffffff');
    const [selectedSmallF, setSelectedSmallF] = useState(24);
    const [selectedBigF, setSelectedBigF] = useState(36);

    return (
      <View style={styles.container}>
        
      </View>
    )
  }
// Work was started here, then I realised I was using features that had been depriacted, this remains if I have time to add it with a useable feature, but I doubt I will
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
      titleText: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Trebuchet',
    },
  });