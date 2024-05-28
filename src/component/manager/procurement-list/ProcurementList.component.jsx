import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { FontFamily } from '../../../../GlobalStyles'
import { FontAwesome6 } from '@expo/vector-icons'
import { Appbar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getProcurementsAction } from '../../../app/feature/ProcurementListSlice'

const ProcurementList = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleHomeManager = () => {
    navigation.goBack()
  }

  const {procurements} = useSelector((state) => state.procurements)

  useEffect(() => {
    dispatch(getProcurementsAction())
    console.log(procurements)
  }, [dispatch])

  const renderItem = ({ item }) => (
    <Button 
    mode="contained" 
    key={item.procurementId}
    onPress={() => {
      const { onPress, ...itemWithoutOnPress } = item;
      navigation.navigate("ProcurementListDetail", { item: itemWithoutOnPress });
    }}
    style={styles.button}
    >
      <Text style={styles.buttonText}>{item.userResponse.divisionResponse.name} Division, {item.userResponse.fullName}</Text>
    </Button>
  );

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <Appbar.Header
    mode='center-aligned'
    style={styles.header}
    >
      <Appbar.BackAction onPress={handleHomeManager} />
      <Appbar.Content title="Procurement List" titleStyle={styles.title}/>
    </Appbar.Header>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Text style={styles.tipsText}>Manage all procurement request, 
      here you can see a list of request from each employee</Text>
        <FlatList
        data={procurements}
        renderItem={renderItem}
        keyExtractor={(item) => item.procurementId}
        showsVerticalScrollIndicator= {false}
        />
      </View>
    </View>
    </>
  );
}

export default ProcurementList

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
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontFamily: FontFamily.soraSemiBold,
    marginLeft: 200
  },
  tipsText: {
    textAlign: 'center',
    fontFamily: FontFamily.soraRegular,
    color: '#898989',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 30
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    paddingBottom: 100
  },
  button: {
    backgroundColor: '#CDE8E5',
    borderRadius: 10,
    height: 60,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30
  },
  buttonText: {
    textAlign: 'left',
    color: 'black',
    fontSize: 16,
    fontFamily: FontFamily.soraSemiBold
  },
})