import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./screens/authSreens/RegistrationScreen";
import { LoginScreen } from "./screens/authSreens/LoginScreen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { PostScreen } from "./screens/mainScreens/PostsScreen";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
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
            <LoginScreen onLayout={onLayoutRootView} />
            {/* <RegistrationScreen onLayout={onLayoutRootView} /> */}
            {/* <PostScreen onLayout={onLayoutRootView} /> */}
            <StatusBar style="auto" />
        </View>
    );
}
