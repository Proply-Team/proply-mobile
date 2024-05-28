import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './assets/icon.png'

const SplashScreenView = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image 
        source={Icon}
        style={styles.image}
        />
      </View>
    </View>
  )
}

export default SplashScreenView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9'
    },
    image: {
        width: 240,
        height: 90,
        resizeMode: 'cover'
    }
})