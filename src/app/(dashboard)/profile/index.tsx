import ThemedText from '@/components/ui/themed-text';
import ThemedView from '@/components/ui/themed-view';
import { Colours } from "@/constants/colours";
import { StyleSheet, useColorScheme } from 'react-native';

export default function HomeScreen() {
    const colorScheme = useColorScheme()
    const theme = colorScheme === "dark"
        ? Colours.dark
        : Colours.light

    return (
        <ThemedView styles={styles.container} theme={theme}>

            <ThemedText title={true} style={styles.title} theme={theme}>Your Email</ThemedText>

        </ThemedView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
    }

});