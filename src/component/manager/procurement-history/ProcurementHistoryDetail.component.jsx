import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontFamily } from '../../../../GlobalStyles'
import { Appbar, Button } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProcurementHistoryDetail = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const { item } = route.params;

  const handleHomeManager = () => {
    navigation.goBack()
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <Appbar.Header
    mode='center-aligned'
    style={styles.header}
    >
      <Appbar.BackAction onPress={handleHomeManager} />
      <Appbar.Content title="Procurement Detail" titleStyle={styles.title}/>
    </Appbar.Header>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.statusText}>Status: {item.status}</Text>
      </View>
      <View style={{height: 400}}></View>
    </View>
    </>
  );
}

export default ProcurementHistoryDetail

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontFamily: FontFamily.soraSemiBold,
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 30
  },
  titleText: {
    fontFamily: FontFamily.soraSemiBold,
    fontSize: 23
  },
  statusText: {
    fontFamily: FontFamily.soraSemiBold,
    fontSize: 18
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: 30,
    marginTop: 10,
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#4D869C',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 80
  },
  buttonReject: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 80
  },
  buttonText: {
    fontSize: 18,
    fontFamily: FontFamily.soraMedium
  },
})