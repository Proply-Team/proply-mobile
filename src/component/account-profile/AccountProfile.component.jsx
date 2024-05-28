import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfilePhoto from '../../../assets/profile.png';
import { FontFamily } from '../../../GlobalStyles';

const AccountProfile = () => {
  return (
    <>
    <StatusBar barStyle="default" backgroundColor="#313131" />
    <View style={styles.headerContainer}>
          <View style={styles.helloContainer}>
            <Text style={styles.helloText}>Profile</Text>
          </View>
    </View>
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={ProfilePhoto} style={styles.profilePhoto}/>
      </View>
      <View style={styles.personalDetailContainer}>
        <Text style={styles.personalDetailText}>Personal Details</Text>
        <View>
          <Text style={styles.emailAddressText}>Email Address</Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.textInContainer}>monkeyDluffy@example.com</Text>
        </View>
        <View>
          <Text style={styles.emailAddressText}>Full Name</Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.textInContainer}>Monkey D.Luffy</Text>
        </View>
        <View>
          <Text style={styles.emailAddressText}>Gender</Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.textInContainer}>Male</Text>
        </View>
        <View>
          <Text style={styles.emailAddressText}>Birth Date</Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.textInContainer}>07-01-1995</Text>
        </View>
      </View>
    </View>
    </>
  )
}

export default AccountProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  profilePhoto: {
    height: 110,
    width: 110,
    borderRadius: 50
  },
  helloContainer: {
    flexDirection: 'row',
    height: 60,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 20,
    alignItems: 'center'
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
  personalDetailContainer: {
    marginHorizontal: 30,
    marginVertical: 25
  },
  personalDetailText: {
    fontFamily: FontFamily.soraSemiBold,
    fontSize: 19
  },
  emailAddressText: {
    fontFamily: FontFamily.soraRegular,
    fontSize: 12,
    marginTop: 10
  },
  emailContainer: {
    backgroundColor: 'transparent',
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#C8C8C8',
    borderWidth: 2
  },
  textInContainer: {
    marginLeft: 20,
    fontFamily: FontFamily.soraRegular
  }
})