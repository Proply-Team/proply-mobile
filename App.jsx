import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreenView from './SplashScreenView';
import { useEffect, useState } from 'react';
import Route from './src/route/route';
import { useFonts } from "expo-font";
import { PaperProvider } from 'react-native-paper';
import AppPaperProvider from './src/component/AppPaperProvider';
import BottomTab from './src/component/bottom-navigation/BottomTab.component';
import { Provider } from "react-redux";
import store from './src/app/store';

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer)
  }, []);

  // const [hideSplashScreen, setHideSplashScreen] = useState(true);

  const [fontsLoaded, error] = useFonts({
    "Sora-Regular": require("./assets/fonts/Sora-Regular.ttf"),
    "Sora-Medium": require("./assets/fonts/Sora-Medium.ttf"),
    "Sora-SemiBold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Bold": require("./assets/fonts/Sora-Bold.ttf"),
    "Sora-Light": require("./assets/fonts/Sora-Light.ttf"),
    
    "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    <Provider store={store}>
      {isShowSplash ? (<SplashScreenView/>) : (
      <AppPaperProvider>
        <Route/>
      </AppPaperProvider>)}
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
