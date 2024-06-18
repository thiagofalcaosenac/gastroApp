import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../config/styles";
import LogoApp from "../components/LogoApp";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LogoApp />
      <Text variant="headlineMedium">Bem vindo ao app gastronômico</Text>
    </View>
  );
}
