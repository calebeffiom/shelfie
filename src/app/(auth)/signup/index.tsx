import ThemedText from "@/components/ui/themed-text";
import ThemedView from "@/components/ui/themed-view";
import { Colours } from "@/constants/colours";
import { Link } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

const Signup = () => {
    const colorScheme = useColorScheme()
    const theme = colorScheme === "dark"
        ? Colours.dark
        : Colours.light
    return (
        <ThemedView styles={styles.container} theme={theme}>
            <ThemedText title={true} style={styles.title} theme={theme}>Signup</ThemedText>

            <Link href="/login">
                <ThemedText title={false} theme={theme} style={styles.link}>Do you have an Account?</ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Signup


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    link: {
        fontSize: 15,
        cursor: 'pointer',
        textDecorationLine: "underline"
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
    }

});