import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontFamily } from '../../../../GlobalStyles';

const data = [
  { label: 'Furniture', value: '1' },
  { label: 'Stationery', value: '2' },
  { label: 'Electronic', value: '3' },
];

const DropdownItemCategory = ({ onValueChange }) => {
  const [value, setValue] = useState(null);

  const renderItem = item => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      {item.value === value && (
        <AntDesign
          style={styles.icon}
          color="black"
          name="Safety"
          size={20}
        />
      )}
    </View>
  );

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
        onValueChange(item.value); // Pass the selected value to the parent component
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownItemCategory;

const styles = StyleSheet.create({
  dropdown: {
    marginHorizontal: 30,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 14,
    fontFamily: FontFamily.soraRegular,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: FontFamily.soraRegular,
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: FontFamily.soraRegular,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    fontFamily: FontFamily.soraRegular,
  },
});
