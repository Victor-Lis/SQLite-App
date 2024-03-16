import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

async function createTable() {
  db.transaction((txn) => {
    txn.executeSql(
      `CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT,nome TEXT,idade INTEGER)`, 
      [],
      (res) => console.log("Sucesso"),
      (error) => {console.log(error)}
    )
  })
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title='Criar Tabela' onPress={createTable}/>
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
