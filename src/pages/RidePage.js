import React from "react";
import { TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements/dist/icons/Icon";
import NavCard from "../components/NavCard";
import { createStackNavigator } from "@react-navigation/stack";
import RideOptions from "../components/RideOptions";
import MapComponent from "../components/MapComponent";
import { useNavigation } from "@react-navigation/native";

const RidePage = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomePage")}
        style={[
          tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`,
        ]}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <MapComponent />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavCard"
            component={NavCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default RidePage;