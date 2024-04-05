import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('dbName', version);

const readOnly = true;
export async function selectData(){
await db.transactionAsync(async tx => {
  const result = await tx.executeSqlAsync('SELECT COUNT(*) FROM USERS', []);
  console.log('Count:', result.rows[0]['COUNT(*)']);
}, readOnly);
}