import { Colours } from "@/constants/colours";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

const AuthLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colorScheme === "dark"
        ? Colours.dark
        : Colours.light
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground,
                },
                headerTintColor: theme.title,
                headerTitleAlign: "center",
                animation: "slide_from_right",
            }}>
            <Stack.Screen name="login" options={{ title: "Login" }} />
            <Stack.Screen name="signup" options={{ title: "Signup" }} />
        </Stack>
    )
}
export default AuthLayout