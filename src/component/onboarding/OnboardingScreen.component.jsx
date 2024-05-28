import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { FontFamily } from '../../../GlobalStyles';
import OnboardingImage from '../../../assets/onboarding.png'
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation()

    const handleDone = () => {
        navigation.navigate('Login')
    }

    const doneButton = ({...props}) => {
        return(
            <TouchableOpacity activeOpacity={0.8} {...props}>
                <Text style={styles.doneButton}>Get Started</Text>
            </TouchableOpacity>
        )
    }

    return (
    <View style={styles.container}>
        <StatusBar barStyle="default" backgroundColor="#FFFFFF" />
        <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            showNext={false}
            bottomBarColor='#FFFFFF'
            bottomBarHeight={100}
            DoneButtonComponent={doneButton}
            pages={[
                {
                    backgroundColor: '#FFFFFF',
                    image: 
                        <View>
                            <Image 
                            source={OnboardingImage}
                            style={styles.onboarding}
                            />
                        </View>,
                    title: 'Lorem ipsum dolor sit amet',
                    subtitle: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                    titleStyles: styles.title,
                    subTitleStyles: styles.subtitle,
                },
            ]}
        />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontFamily: FontFamily.soraSemiBold,
        fontSize: 32,
        marginHorizontal: 20
    },
    onboarding: {
        height: 450,
        width: 420,
        marginTop: -200
    },
    subtitle: {
        fontFamily: FontFamily.soraRegular,
        fontSize: 14,
        marginHorizontal: 20
    },
    doneButton: {
        color: '#4D869C',
        fontFamily: FontFamily.soraRegular,
        padding: 15,
        marginRight: 10,
        fontSize: 18,
    }
})