import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import doneImage from "../../../../assets/done.png"
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { FontFamily } from '../../../../GlobalStyles'

const ProcurementListApproved = () => {
  const handleLogin = () => {
    navigation.navigate('BottomTab')
  }
  const navigation = useNavigation()

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <View style={styles.container}>
      <View style={styles.successTextContainer}>
        <Text style={styles.successText}>Procurement Approved</Text>
      </View>
      <View style={styles.starImageContainer}>
        <Image source={doneImage} style={styles.starImage}/>
      </View>
      <View style={styles.loginButtonContainer}>
            <Button 
            mode="contained" 
            onPress={handleLogin}
            style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Back to Home</Text>
            </Button>
      </View>
    </View>
    </>
  )
}

export default ProcurementListApproved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  successTextContainer: {
    marginTop: 300
  },
  successText: {
    fontFamily: FontFamily.plusJakartaSansBold,
    fontSize: 25
  },
  starImageContainer: {
    marginTop: 10
  },
  starImage: {
    height: 50,
    width: 50
  },
  loginButtonContainer: {
    marginHorizontal: 30,
    marginTop: 300
  },
  loginButton: {
    backgroundColor: '#4D869C',
    borderRadius: 10,
    padding: 10
  },
  loginButtonText: {
    fontSize: 20,
    fontFamily: FontFamily.soraSemiBold
  },
})