import { Text } from "react-native";
interface propTypes {
    theme: any;
    children: React.ReactNode;
    title: boolean
    style: any
}
const ThemedText = ({ theme, children, title, style }: propTypes) => {

    return (
        <Text style={[title ? { color: theme.title } : { color: "#dfdfe3" }, style]}>{children}</Text>
    )
}
export default ThemedText