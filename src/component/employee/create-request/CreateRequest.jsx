import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Appbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FontFamily } from '../../../../GlobalStyles';
import DropdownProcurementCategory from './DropdownProcurementCategory';

const CreateRequest = () => {
  const navigation = useNavigation();
  const [dropdownValue, setDropdownValue] = useState(null);

  const handleHomeEmployee = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (dropdownValue === '1') {
      navigation.navigate('CreateRequestGoods');
    } else if (dropdownValue === '2') {
      navigation.navigate('CreateRequestFunds');
    } else {
      console.log('Please select a value from the dropdown');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <Appbar.Header mode="center-aligned" style={styles.header}>
          <Appbar.BackAction onPress={handleHomeEmployee} />
          <Appbar.Content title="Create Request" titleStyle={styles.title} />
        </Appbar.Header>
        <Text style={styles.formLabel}>Procurement Category</Text>
        <DropdownProcurementCategory onValueChange={setDropdownValue} />
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default CreateRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: FontFamily.soraSemiBold,
    fontSize: 20,
  },
  formLabel: {
    marginHorizontal: 30,
    fontFamily: FontFamily.soraRegular,
    fontSize: 12,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4D869C',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 80,
  },
  buttonText: {
    fontFamily: FontFamily.soraRegular,
    fontSize: 16,
    color: '#FFFFFF',
  },
});
