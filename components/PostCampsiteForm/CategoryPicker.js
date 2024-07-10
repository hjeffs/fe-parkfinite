import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { pickerSelectStyles, formStyles } from "./PostCampsiteFormStyles";

const CategoryPicker = ({ categoryId, handleCategoryChange }) => {
  const categories = [
    { label: "In Nature", value: 1 },
    { label: "Car Park", value: 2 },
    { label: "Car Park (day only)", value: 3 },
    { label: "Motorway Rest Stop", value: 4 },
    { label: "Free Motor Area", value: 5 },
    { label: "Paid Motor Area", value: 6 },
    { label: "Private Campervan Spot", value: 7 },
    { label: "Camping/Caravan Site", value: 8 },
    { label: "Picnic Area", value: 9 },
    { label: "On The Beach", value: 10 },
  ];

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>What kind of park-up is it? (*required)</Text>
      <RNPickerSelect
        items={categories}
        value={categoryId}
        onValueChange={(value) => handleCategoryChange("category_id", value)}
        placeholder={{ label: "Select type of spot...", value: null }}
        style={pickerSelectStyles}
      />
    </View>
  );
};

export default CategoryPicker;
