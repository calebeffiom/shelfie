import { View } from "react-native";
interface propTypes {
    theme: any;
    children: React.ReactNode;
    styles: any
}
const ThemedView = ({ theme, children, styles }: propTypes) => {

    return (
        <View style={[styles, { backgroundColor: theme.background }]}>{children}</View>
    )
}
export default ThemedView