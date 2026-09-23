import Spacer from '@/components/ui/spacer';
import ThemedText from '@/components/ui/themed-text';
import ThemedView from '@/components/ui/themed-view';
import { Colours } from "@/constants/colours";
import { Link } from 'expo-router';
import { Image, StyleSheet, useColorScheme } from 'react-native';
import logo from "../assets/images/icon.png";

export default function HomeScreen() {
  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark"
    ? Colours.dark
    : Colours.light

  return (
    <ThemedView styles={styles.container} theme={theme}>

      <Image source={logo} style={styles.image} />
      <ThemedText title={true} style={styles.title} theme={theme}>Hola</ThemedText>

      <Spacer height={20} />

      <Link href="/login">
        <ThemedText title={false} style={styles.link} theme={theme}>Login</ThemedText>
      </Link>
      <Spacer height={10} />
      <Link href="/signup">
        <ThemedText title={false} style={styles.link} theme={theme}>Signup</ThemedText>
      </Link>

      <Spacer height={10} />
      <Link href="/profile">
        <ThemedText title={false} style={styles.link} theme={theme}>Profile</ThemedText>
      </Link>


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