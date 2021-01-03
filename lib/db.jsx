import firebase from 'firebase/app'
import 'firebase/firestore'

let db;
try {
    if(firebase.apps.length === 0) {
      const config = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
      };
      firebase.initializeApp(config);
    }
    // Firestoreインスタンスを作成
    db = firebase.firestore();
  } catch (error) {
    console.log(error);
  }

  module.exports = {
    // 本来、initializeAppによる初期化は一度きりのため、
    // 初期化の結果のみを切り出してexportする
    db
  };