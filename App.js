import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDatabase } from './src/utils/createDatabase'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Open DB" onPress={createDatabase}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
