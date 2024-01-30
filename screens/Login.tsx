import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamsList = {
  Login: undefined,
  AuthWeatherApp: undefined,
}
type Props = NativeStackScreenProps<RootStackParamsList, 'Login'>

function Login( { route, navigation }: Props ) {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Login Screen</Text>
        <Button title="Sign In" onPress={() => navigation.navigate("AuthWeatherApp")} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    }
  });

export default Login