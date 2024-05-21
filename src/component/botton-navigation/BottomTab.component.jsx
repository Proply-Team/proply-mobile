import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeManager from '../home-manager/HomeManager.component';
import NotificationScreen from '../notification/NotificationScreen.component';

const HomeRoute = () => <HomeManager/>;
const NotificationsRoute = () => <NotificationScreen/>;
const AccountRoute = () => <Text>Account</Text>;

const BottomTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'notifications', title: 'Notification', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    notifications: NotificationsRoute,
    account: AccountRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationType='opacity'
      barStyle={{
        backgroundColor: '#FFFFFF', 
        height: 90, 
        justifyContent: 'center', 
        paddingHorizontal: 70,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
      }}
      labeled= {false}
      inactiveColor="#B0BEC5"
      activeIndicatorStyle={{backgroundColor: '#DBE7EB'}}
    />
  );
};

export default BottomTab;