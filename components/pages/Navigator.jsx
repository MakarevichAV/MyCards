import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./HomePage/HomePage";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{title:'Category'}} />
        <Stack.Screen name="Sets" component={SetsPage} options={{title:'Collections'}} />
    </Stack.Navigator>
}