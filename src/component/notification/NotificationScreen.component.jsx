import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontFamily } from '../../../GlobalStyles'
import { Button } from 'react-native-paper'

const notificationData = [
    { id: '1', title: 'Notification 1', onPress: () => console.log('Notification 1 Pressed') },
    { id: '2', title: 'Notification 2', onPress: () => console.log('Notification 2 Pressed') },
    { id: '3', title: 'Notification 3', onPress: () => console.log('Notification 3 Pressed') },
    { id: '4', title: 'Notification 4', onPress: () => console.log('Notification 4 Pressed') },
    { id: '5', title: 'Notification 5', onPress: () => console.log('Notification 5 Pressed') },
    { id: '6', title: 'Notification 6', onPress: () => console.log('Notification 6 Pressed') },
    { id: '7', title: 'Notification 7', onPress: () => console.log('Notification 7 Pressed') },
    { id: '8', title: 'Notification 8', onPress: () => console.log('Notification 8 Pressed') },
  ];
  
const NotificationScreen = () => {
    const renderItem = ({ item }) => (
        <Button
          mode="outlined"
          contentStyle={styles.listNotification}
          onPress={item.onPress}
          style={{ marginVertical: 10, backgroundColor: '#F9F9F9' }}
        >
          <Text style={styles.listButtonText}>{item.title}</Text>
        </Button>
      );
    
      return (
        <>
          <StatusBar barStyle="default" backgroundColor="#313131" />
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <View style={styles.helloContainer}>
                <Text style={styles.helloText}>Notification</Text>
              </View>
            </View>
            <View style={styles.ButtonContainer}>
              <FlatList
                data={notificationData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator= {false}
              />
            </View>
          </View>
        </>
      );
}

export default NotificationScreen

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
    helloContainer: {
        flexDirection: 'row',
        height: 60,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 20,
        alignItems: 'center'
    },
    ButtonContainer: {
        paddingHorizontal: 30,
        justifyContent: 'center',
      },
    listNotification: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        height: 70,
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
    listButtonText: {
        fontSize: 14,
        fontFamily: FontFamily.soraSemiBold,
        color: '#313131'
    },
})