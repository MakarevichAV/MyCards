import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HomePage } from "./HomePage/HomePage";
import { SetsPage } from "./SetsPage/SetsPage";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#1C1B15" },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white"
  };

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Category" }}
        />
        <Stack.Screen
          name="Sets"
          component={SetsPage}
          options={{ title: "Collections" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
