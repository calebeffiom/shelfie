import { View } from "react-native";

interface propTypes {
    height?: number
    width?: number
}

const Spacer = ({ height, width }: propTypes) => {
    return (
        <View style={{ height: height || 20, width: width || 20 }} />
    )
}
export default Spacer