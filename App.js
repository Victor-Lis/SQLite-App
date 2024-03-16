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

async function insertInTableData(){
  db.transaction((txn) => {
    txn.executeSql(
      `INSERT INTO usuarios (nome, idade) VALUES (Victor, 10)`, 
      [],
      (res) => {console.log("Sucesso")},
      (error) => {console.log(error)}
    )
  })
}


async function getTableData(){
  db.transaction((txn) => {
    txn.executeSql(
      `SELECT * FROM usuarios`, 
      [],
      (res) => {
        console.log("Sucesso")
        let len = res.rows.length
        console.log(len)
      },
      (error) => {console.log("Error in get Data")}
    )
  })
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title='Criar Tabela' onPress={createTable}/>
      <Button title='Insert Tabela' onPress={insertInTableData}/>
      <Button title='Ler Tabela' onPress={getTableData}/>
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
