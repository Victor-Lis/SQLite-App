import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';

async function openDatabase(pathToDatabaseFile){
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require(pathToDatabaseFile)).uri,
    FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
  );
  return SQLite.openDatabase('myDatabaseName.db');
}

const db = SQLite.openDatabase('dbName', version);

const readOnly = true;
await db.transactionAsync(async tx => {
  const result = await tx.executeSqlAsync('SELECT COUNT(*) FROM USERS', []);
  console.log('Count:', result.rows[0]['COUNT(*)']);
}, readOnly);

await db.execAsync([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false);
console.log('Foreign keys turned on');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
