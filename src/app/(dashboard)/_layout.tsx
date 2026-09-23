import { Colours } from "@/constants/colours";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

const AuthLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colorScheme === "dark"
        ? Colours.dark
        : Colours.light
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground,
                },
                headerTintColor: theme.title,
                headerTitleAlign: "center",
                tabBarStyle: {
                    backgroundColor: theme.background,
                },
                tabBarActiveTintColor: theme.iconColourFocused,
                tabBarInactiveTintColor: theme.iconColour
                // animation: "slide_from_right",
            }}>
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: () => (
                    <Ionicons name="person" size={24} color={theme.title} />
                )
            }} />
            <Tabs.Screen name="create" options={{
                title: "Create",
                tabBarIcon: () => (
                    <Ionicons name="add" size={24} color={theme.title} />
                )
            }} />
            <Tabs.Screen name="books" options={{
                title: "Books",
                tabBarIcon: () => (
                    <Ionicons name="book" size={24} color={theme.title} />
                )
            }} />
        </Tabs>
    )
}
export default AuthLayout