import { Colours } from "@/constants/colours";
import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import "../global.css";

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colorScheme === "dark"
        ? Colours.dark
        : Colours.light
    return (
        <><StatusBar barStyle="default" />
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.navBackground,
                    },
                    headerTintColor: theme.title,
                    headerTitleAlign: "center",
                    animation: "slide_from_right",
                }}
            >
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ title: "Home" }} />
            </Stack></>
    )
}
export default RootLayout