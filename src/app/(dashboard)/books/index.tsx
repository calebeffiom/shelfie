import ThemedText from '@/components/ui/themed-text';
import ThemedView from '@/components/ui/themed-view';
import { Colours } from "@/constants/colours";
import { StyleSheet, useColorScheme } from 'react-native';
// import logo from "../assets/images/icon.png";

export default function BooksScreen() {
    const colorScheme = useColorScheme()
    const theme = colorScheme === "dark"
        ? Colours.dark
        : Colours.light

    return (
        <ThemedView styles={styles.container} theme={theme}>

            {/* <Image source={logo} style={styles.image} /> */}
            <ThemedText title={true} style={styles.title} theme={theme}>Read Some Books</ThemedText>


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
    card: {
        backgroundColor: 'white',
        width: 300,
        height: 80,
        borderRadius: 20,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
    }

});