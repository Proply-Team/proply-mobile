import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { MD3LightTheme, PaperProvider } from 'react-native-paper'

const AppPaperProvider = ({children}) => {
    const myTheme = useMemo(() => {
        const lightTheme = MD3LightTheme
        const customFonts = Object.fromEntries(
            Object.entries(lightTheme.fonts).map(
                ([variantName, variantProps]) => [
                    variantName,
                    {
                        ...variantProps,
                        fontFamily: 'Sora-Regular'
                    }
                ]
            )
        )

        const appTheme = {
            ...lightTheme,
            fonts: customFonts
        }
        return appTheme 
    }, [])

    return (
        <PaperProvider theme={myTheme}>
            {children}
        </PaperProvider>
    )
}

export default AppPaperProvider
 
const styles = StyleSheet.create({})