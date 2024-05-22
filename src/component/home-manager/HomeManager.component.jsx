import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { FontFamily } from '../../../GlobalStyles'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const HomeManager = () => {
  const navigation = useNavigation()
  const getCurrentHour = new Date().getHours()
  let hello

  if ( getCurrentHour >= 5 &&  getCurrentHour <= 12 ) {
    hello = "Good Morning!"
  }
  else if ( getCurrentHour >= 12 && getCurrentHour < 18 ) {
    hello = "Good Afternoon!"
  }
  else {
    hello = "Good Evening!"
  }

  const handleProcurementList = () => {
    navigation.navigate('ProcurementList')
  }

  return (
    <>
    <StatusBar barStyle="default" backgroundColor="#313131" />
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.helloContainer}>
            <Text style={styles.helloText}>{hello}</Text>
            <Text style={styles.goodDayText}>Have a good day</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button 
          mode="contained" 
          style={styles.listButton}
          onPress={handleProcurementList}
          >
            <Text style={styles.listButtonText}>Procurement List</Text>
          </Button>
          <Button 
          mode="contained" 
          style={styles.listButton}
          onPress={() => console.log('Pressed')}
          >
            <Text style={styles.listButtonText}>Procurement History</Text>
          </Button>
        </View>
    </View>
    </>
  )
}

export default HomeManager

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    headerContainer: {
        backgroundColor: '#313131',
        height: 120,
        justifyContent: 'center'
    },
    helloText: {
      fontFamily: FontFamily.soraSemiBold,
      fontSize: 25,
      color: '#FFFFFF'
    },
    goodDayText: {
      fontFamily: FontFamily.soraRegular,
      fontSize: 15,
      color: '#FFFFFF',
      marginTop: 2
    },
    helloContainer: {
        height: 60,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 20
    },
    ButtonContainer: {
        marginTop: 30,
        marginHorizontal: 30,
        justifyContent: 'center'
      },
    listButton: {
        backgroundColor: '#4D869C',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        height: 60
      },
    listButtonText: {
        fontSize: 16,
        fontFamily: FontFamily.soraSemiBold
    },
})