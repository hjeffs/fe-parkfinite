import { TextInput, View, Text } from "react-native";
import { formStyles } from "./PostCampsiteFormStyles";

const CostInputs = ({ parkingCost, facilitiesCost, handleCostChange }) => {
  return (
    <>
      <View style={formStyles.rowContainer}>
        <View style={formStyles.halfInputContainer}>
          <Text style={formStyles.label}>How much to park?</Text>
          <TextInput
            value={parkingCost}
            onChangeText={(text) => handleCostChange("parking_cost", text)}
            keyboardType="numeric"
            placeholder="Cost for parking..."
            placeholderTextColor="#888"
            style={[formStyles.input]}
          />
        </View>
        <View style={formStyles.halfInputContainer}>
          <Text style={formStyles.label}>How much to use facilities?</Text>
          <TextInput
            value={facilitiesCost}
            onChangeText={(text) => handleCostChange("facilities_cost", text)}
            keyboardType="numeric"
            placeholder="Cost to use facilities..."
            placeholderTextColor="#888"
            style={[formStyles.input]}
          />
        </View>
      </View>
    </>
  );
};

export default CostInputs;
