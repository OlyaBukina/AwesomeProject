import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Home } from "./screens/mainScreens/Home";
import { LoginScreen } from "./screens/authSreens/LoginScreen";
import { RegistrationScreen } from "./screens/authSreens/RegistrationScreen";

import { MapScreen } from "./screens/nestedScreens/MapScreen";
import { CommentsScreen } from "./screens/nestedScreens/CommentsScreen";

import { Feather } from "@expo/vector-icons";

const MainStack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <MainStack.Navigator initialRouteName="Login">
                    <MainStack.Screen
                        name="Registration"
                        component={RegistrationScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <MainStack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <MainStack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false,
                        }}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        </View>
    );
}
