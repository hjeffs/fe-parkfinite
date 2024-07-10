import React from 'react';
import { View, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { pickerSelectStyles, formStyles } from "./PostCampsiteFormStyles";

const MonthPicker = ({ openingMonth, closingMonth, handleMonthChange }) => {
  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  return (
    <View style={formStyles.container}>
      <View style={formStyles.rowContainer}>
        <View style={formStyles.halfInputContainer}>
          <Text style={formStyles.label}>Opening Month</Text>
          <RNPickerSelect
            items={months}
            value={openingMonth}
            onValueChange={value => handleMonthChange('opening_month', value)}
            placeholder={{ label: "Select opening month", value: null }}
            style={pickerSelectStyles}
          />
        </View>
        <View style={formStyles.halfInputContainer}>
          <Text style={formStyles.label}>Closing Month</Text>
          <RNPickerSelect
            items={months}
            value={closingMonth}
            onValueChange={value => handleMonthChange('closing_month', value)}
            placeholder={{ label: "Select closing month", value: null }}
            style={pickerSelectStyles}
          />
        </View>
      </View>
    </View>
  );
};

export default MonthPicker;